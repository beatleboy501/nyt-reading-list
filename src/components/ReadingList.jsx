import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const propTypes = {
  readingList: PropTypes.array,
};

const ReadingList = (props) => {
  const { readingList } = props;
  return (
    <div className="reading-list">
      <div className="ui cards">
        {readingList && readingList.map((article, index) => <Article key={`${index}${Math.random()}`} article={article} />)}
      </div>
    </div>
  );
};

ReadingList.propTypes = propTypes;
export default ReadingList;
