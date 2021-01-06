import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className="header">
      <img
        className="header__icon" 
        src="https://mybroadband.co.za/news/wp-content/uploads/2015/07/Airbnb-logo.jpg"
        alt=""
      />

      <div className="header__center">
        <input type="text"/>
        <SearchIcon />
      </div>
    </div>
  );
}

export default Header;
