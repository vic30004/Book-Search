import React, {useReducer} from 'react';
import GBooksContext from './GBooksContext';
import GBooksReducer from './GBooksReducer'
import dotenv from 'dotenv'
import {SEARCH_BOOKS,CLEAR} from '../types'

const GBooksState = props => {
    const initialState={
        books:[]
    }
    
    const [state,dispatch] = useReducer(GBooksReducer, initialState);


    // Search Books
    const searchBooks =async (query) =>{
        const URL=`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.KEY}`;
        const res = await fetch(URL);
        const data = await res.json();
        dispatch({
        type: SEARCH_BOOKS,
        payload: data.items
        })
    }

    // Clear Books
    const clearBooks = ()=>dispatch({type:CLEAR})


    return <GBooksContext.Provider 
    value={{
        books:state.books,
        searchBooks,
        clearBooks
    }}
    >
    {props.children}
    </GBooksContext.Provider>
}

export default GBooksState
