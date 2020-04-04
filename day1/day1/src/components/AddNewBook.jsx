import React, { useState } from 'react';
import { Prompt } from 'react-router-dom';

const AddNewBook = ({ bookFacade }) => {
  const [isBlocking, setIsBlocking] = useState(false);

  const initialBook = { title: '', info: '' };
  const [newBook, setNewBook] = useState(initialBook);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
    setIsBlocking(e.target.value.length > 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    bookFacade.addBook(newBook);
    setNewBook(initialBook);
    setIsBlocking(false);
  };

  return (
    <>
      <h1>Add Book</h1>
      <form onSubmit={handleSubmit}>
        <input name='title' value={newBook.title} onChange={handleChange} placeholder='Title' />
        <input name='info' value={newBook.info} onChange={handleChange} placeholder='Info' />
        <button type='submit'>Add Book</button>
      </form>

      <Prompt
        when={isBlocking}
        message={(location) => `Are you sure you want to go to ${location.pathname}`}
      />
    </>
  );
};

export default AddNewBook;
