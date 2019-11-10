import React,{Fragment} from 'react';
import './Books.css';

const BooksItems = ({ books }) => {
  return (
    <Fragment>
        <div className='card'>
          <div className='left-side'>
            <img src={books.imageLinks.thumbnail} alt='Book' />
            {books.authors.map(author => (
              <ul>
                <li>{author}</li>
              </ul>
              
            ))}
                <a href='#' className='saveBtn'>
        Save Book
      </a>
          </div>
          <div className="right-side">
                 <h2>{books.title}</h2>
          <p>{books.description}</p>
          <a href={books.previewLink}>Preview</a>
          </div>
   
        </div>

  
    </Fragment>
  );
};

export default BooksItems;
