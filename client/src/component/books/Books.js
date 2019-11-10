import React, { useContext } from 'react';
import BooksItems from './BooksItems';
import GBooksContext from '../context/GoogleBooks/GBooksContext';

const Books = () => {
  const gbooksContext = useContext(GBooksContext);
  const { books } = gbooksContext;
  console.log(books);
  return (
    <section
      id='books'
      style={
        books.length > 1
          ? { background: 'rgba(208, 214, 218, 0.89)' }
          : { background: '#fff' }
      }
    >
      <div className='books-container'>
        {books.length > 1 ? (
          books.map((data, i) => <BooksItems key={i} books={data.volumeInfo} />)
        ) : (
          <h2 className='book-placeHolder'>
            “A room without books is like a body without a soul.” ― Marcus
            Tullius Cicero
          </h2>
        )}
      </div>
    </section>
  );
};

export default Books;
