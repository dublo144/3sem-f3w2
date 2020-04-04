import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import Details from './Details';

const Products = ({ bookFacade }) => {
  const [books, setBooks] = useState([]);
  const { path, url } = useRouteMatch();

  useEffect(() => {
    setBooks(bookFacade.getBooks());
  }, [bookFacade]);

  return (
    <>
      {books.map((book) => (
        <ul key={book.id}>
          <li>
            {book.title} <Link to={`${url}/${book.id}`}>Details</Link>
          </li>
        </ul>
      ))}

      <Switch>
        <Route exact path={path}>
          <Details />
        </Route>
        <Route path={`${path}/:bookid`}>
          <Details books={books} />
        </Route>
      </Switch>
    </>
  );
};

export default Products;
