import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  searchTerm: PropTypes.string,
};

const Search = (props) => {
  const { handleChange, handleSubmit, searchTerm } = props;
  return (
    <div className="ui input">
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
};

Search.propTypes = propTypes;
export default Search;
