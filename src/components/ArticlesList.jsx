import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const propTypes = {
  articles: PropTypes.array,
  onLoadClick: PropTypes.func,
  onReadingClick: PropTypes.func,
};

const ArticlesList = (props) => {
  const { articles, onLoadClick, onReadingClick } = props;
  const allArticles = articles.map((art, index) => {
    return <Article key={`${index}${Math.random()}`} article={art} onReadingClick={onReadingClick} />;
  });

  return (
    <div className="all-articles">
      <div className="ui cards">
        {allArticles}
      </div>
      <button onClick={onLoadClick}>Load More Articles</button>
    </div>
  );
};

ArticlesList.propTypes = propTypes;

export default ArticlesList;
