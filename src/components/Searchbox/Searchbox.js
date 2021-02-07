import React from 'react';

import classes from './Searchbox.module.css';

import searchIcon from '../../assets/www.png';

const searchbox = props => {
  return (
    <div className={classes.wrap}>
      <div className={classes.search}>
        <input
          type="text"
          className={classes.searchTerm}
          placeholder="Search..."
          onChange={props.onSearch}
        />
        <button type="submit" className={classes.searchButton}>
          <i className="fa fa-search">
            <img src={searchIcon} className={classes.SearchIcon} alt="search" />
          </i>
        </button>
      </div>
    </div>
  );
};

export default searchbox;
