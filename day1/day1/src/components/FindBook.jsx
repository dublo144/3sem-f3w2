import React, { useState } from 'react';

const FindBook = ({ bookFacade }) => {
  const [bookId, setBookId] = useState('');
  const [book, setBook] = useState(null);

  const handleChange = (e) => {
    setBookId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBook(bookFacade.findBook(bookId));
    setBookId('');
  };

  const handleDelete = () => {
    bookFacade.deleteBook(book.id);
    setBook(null);
  };

  return (
    <>
      <h1>Find book by id</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={bookId} placeholder='Enter book id' />
        <button type='submit'>Find</button>
      </form>

      {book ? (
        <>
          <p>{`ID: ${book.id}`}</p>
          <p>{`Title: ${book.title}`}</p>
          <p>{`Additional Info: ${book.info}`}</p>
          <button type='button' onClick={handleDelete}>
            Delete Book
          </button>
        </>
      ) : (
        <p>Please search for a book above</p>
      )}
    </>
  );
};

export default FindBook;
