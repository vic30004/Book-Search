import React,{useContext} from 'react'
import SavedBookItems from './SavedBookItems';
import SBooksContext from '../context/SavedBooks/SBooksContext'
const SavedBooks = () => {
    const sbooksContext =useContext(SBooksContext)
    const {books} = sbooksContext
    
    return (
        <div>
            {books.length>1 ? books.map(data=>(
                <SavedBookItems books={data}/>
            ))
            :
            <h2>Nothing Saved Yet.</h2>}
        </div>
    )
}

export default SavedBooks
