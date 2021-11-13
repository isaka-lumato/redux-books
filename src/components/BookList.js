import React from 'react';
import BookItem from './BookItem';
import BookAdd from './BookAdd';

function BookList() {
  return (
    <>
      <ul>
        <BookItem />
      </ul>
      <BookAdd />
    </>
  );
}

export default BookList;
