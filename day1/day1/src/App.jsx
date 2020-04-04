import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Products from './components/Products';
import Company from './components/Company';
import AddNewBook from './components/AddNewBook';
import NoMatch from './components/NoMatch';
import FindBook from './components/FindBook';

function App({ bookFacade }) {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/products'>
          <Products bookFacade={bookFacade} />
        </Route>
        <Route path='/company'>
          <Company />
        </Route>
        <Route path='/add-book'>
          <AddNewBook bookFacade={bookFacade} />
        </Route>
        <Route path='/find-book'>
          <FindBook bookFacade={bookFacade} />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </>
  );
}

export default App;
