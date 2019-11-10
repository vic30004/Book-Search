import React, { Fragment, useContext } from 'react';
import SBooksContext from '../context/SavedBooks/SBooksContext';
import { Link } from 'react-router-dom';
const SavedBookItems = ({ books }) => {
  const sbooksContext = useContext(SBooksContext);
  const { deleteBook } = sbooksContext;

  const removeSaved = e => {
      window.location.reload()
    deleteBook(books._id);
  };
  console.log(books);
  return (
    <Fragment>
      <div className='card'>
        <div className='left-side'>
          <img src={books.image} alt='Book' />
          {books.authors.map(author => (
            <ul>
              <li>{author}</li>
            </ul>
          ))}
          <Link to='/saved-books' className='saveBtn' onClick={removeSaved}>
            Delete
          </Link>
        </div>
        <div className='right-side'>
          <h2>{books.title}</h2>
          <p>{books.description}</p>
          <a href={books.link}>Preview</a>
        </div>
      </div>
    </Fragment>
  );
};

export default SavedBookItems;
