import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ArticlesList from './components/ArticlesList';
import Nav from './components/Nav';
import Search from './components/Search';
import ReadingList from './components/ReadingList';
import './App.css';

const propTypes = {
  config: PropTypes.object.isRequired,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      searchTerm: '',
      counter: 0,
      readingList: [],
    };
    this.fetchArticles = this.fetchArticles.bind(this);
    this.fetchInitialArticles = this.fetchInitialArticles.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLoadClick = this.handleLoadClick.bind(this);
    this.handleReadingClick = this.handleReadingClick.bind(this);
  }

  componentDidMount() {
    this.fetchInitialArticles(0);
  }

  fetchArticles() {
    const { searchTerm } = this.state;
    const { config } = this.props;
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&sort=newest&api-key=${config.apiKey}`)
      .then(res => res.json())
      .then(json => this.setState({ articles: json.response.docs }));
  }

  fetchInitialArticles() {
    const { counter, articles } = this.state;
    fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?page=${counter}&sort=newest&api-key=a69e1cdbb16b4f23841c8f01be77f31a`)
      .then(res => res.json())
      .then(json => this.setState({ articles: articles.concat(json.response.docs) }))
      .then(this.setState({ counter: counter + 1 }));
  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.fetchArticles();
  }

  handleLoadClick() {
    this.fetchInitialArticles();
  }

  handleReadingClick(event) {
    const { articles, readingList } = this.state;
    const eventId = event.target.parentElement.parentElement.id;
    const article = articles.find(eachArticle => eachArticle._id === eventId);
    const newState = [...readingList, article];
    this.setState({ readingList: newState });
  }

  render() {
    const { articles, readingList, searchTerm } = this.state;
    return (
      <Router>
        <div className="App">
          <Nav />
          <Search
            searchTerm={searchTerm}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
          <br />
          <Route
            exact
            path="/"
            render={({ match }) => (
              <ArticlesList
                articles={articles}
                onLoadClick={this.handleLoadClick}
                onReadingClick={this.handleReadingClick}
              />
            )}
          />
          <Route
            exact
            path="/readinglist"
            render={({ match }) => (
              <ReadingList readingList={readingList} />
            )}
          />
        </div>
      </Router>
    );
  }
}

App.propTypes = propTypes;
export default App;
