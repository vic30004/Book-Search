import React, {useState} from 'react'
import './Header.css'

const Header = () => {
   const [search, setSearch] = useState('');

    const onChange = (e)=> setSearch(e.target.value)

    const onSubmit = (e)=>{
        e.preventDefault();
        if(search === ''){
            alert("Please add text")
        }
        setSearch('')
    }

    return (
        <div id="head">
            <div className="head-container">
                <h1>Book Search</h1>
                <input type="text" name="search" value={search} onChange={onChange}/>
                <div className="btncontainer">
                <a href="#" className="searchBtn" onClick={onSubmit}>Search</a>
                <a href="#" className="searchBtn">Clear</a>
                </div>
                
            </div>
        </div>
    )
}

export default Header
