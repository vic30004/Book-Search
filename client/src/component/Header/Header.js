import React, { useState, useContext } from 'react';
import GBooksContext from '../context/GoogleBooks/GBooksContext';
import './Header.css';

const Header = () => {
  const gbooksContext = useContext(GBooksContext);
  const [search, setSearch] = useState('');
  const { books, searchBooks, clearBooks } = gbooksContext;
  const onChange = e => setSearch(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if (search === '') {
      alert('Please add text');
    } else {
      searchBooks(search);
      setSearch('');
    }
  };
  const clear = e => {
    e.preventDefault();
    clearBooks();
  };

  return (
    <div id='head'>
      <div className='head-container'>
        <h1>Book Search</h1>
        <input type='text' name='search' value={search} onChange={onChange} />
        <div className='btncontainer'>
          <a href='#' className='searchBtn' onClick={onSubmit}>
            Search
          </a>

          {books.length > 0 ? (
            <a href='#' className='searchBtn' onClick={clear}>
              Clear
            </a>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
