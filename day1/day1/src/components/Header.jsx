import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <ul className='header'>
      <li>
        <NavLink exact activeClassName='active' to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/products'>
          Products
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/company'>
          Company
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/find-book'>
          Find Book
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName='active' to='/add-book'>
          Add Book
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
