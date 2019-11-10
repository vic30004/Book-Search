import React,{Fragment,useContext} from 'react';
import './Books.css';
import SBooksContext from '../context/SavedBooks/SBooksContext';
import {Link} from 'react-router-dom'

const BooksItems = ({ books }) => {
  const sbooksContext = useContext(SBooksContext);
  const {addBook} = sbooksContext;
const saveBook = (e)=>{
  window.location.reload()
  addBook({
    title:books.title,
    image: books.imageLinks.thumbnail,
    authors: books.authors,
    link: books.previewLink,
    description: books.description
  })

}
  

  return (
    <Fragment>
    {books ? 
      <div className='card'>
          <div className='left-side'>
            <img src={books.imageLinks ? books.imageLinks.smallThumbnail : "#"} alt='Book' />
            {books.authors.map(author => (
              <ul>
                <li>{author}</li>
              </ul>
              
            ))}
                <Link to='/' className='saveBtn' onClick={saveBook}>
        Save Book
      </Link>
          </div>
          <div className="right-side">
                 <h2>{books.title}</h2>
          <p>{books.description}</p>
          <a href={books.previewLink}>Preview</a>
          </div>
   
        </div>
      
      :''}
        

  
    </Fragment>
  );
};

export default BooksItems;
