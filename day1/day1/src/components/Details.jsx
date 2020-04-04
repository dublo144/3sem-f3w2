import React from 'react';
import { useParams } from 'react-router-dom';

const Details = ({ books = [] }) => {
  const { bookid } = useParams();
  const bookDetails = books.find((book) => book.id === Number(bookid));

  return (
    <>
      {bookDetails ? (
        <>
          <p>{`ID: ${bookDetails.id}`}</p>
          <p>{`Title: ${bookDetails.title}`}</p>
          <p>{`Additional Info: ${bookDetails.info}`}</p>
        </>
      ) : (
        <p>Please select a book above</p>
      )}
    </>
  );
};

export default Details;
