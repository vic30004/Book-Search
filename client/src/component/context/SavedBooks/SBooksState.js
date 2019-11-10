import React, {useReducer,useEffect,useState} from 'react';
import SBooksContext from './SBooksContext';
import SBooksReducer from './SBooksReduces';
import {ADD_BOOKS,DELETE_BOOKS,GET_BOOKS} from '../types';

const SBooksState = props =>{
  const [books, setBooks] = useState([])


    // GET BOOKS
    useEffect(()=>{
        getBooks()
    }, [])

    const getBooks = async() =>{
        const res = await fetch("/api/v1/books");
        const data = await res.json();
        setBooks(data.data)
    }

    // Add Book
    const addBook = async(book)=>{
        let url = "/api/v1/books";
        const res = await fetch(url,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
        });
        
    }

    // Delete Book
    const deleteBook = async (id) =>{
        let url= `/api/v1/books/${id}`;
        const res = await fetch(url,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },

        })
    }


    return <SBooksContext.Provider
        value={{
            books:books,
            addBook,
            deleteBook
        }}>
        {props.children}
        </SBooksContext.Provider>


}

export default SBooksState