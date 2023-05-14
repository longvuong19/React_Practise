import React from 'react'
import './SearchBar.css'

function SearchBar() {
    return (
        <div className='SearchBar'>
            <input type="text" placeholder='Search' />
            <button type='submit' className='SearchBtn'>
                <i class="fa-sharp fa-solid fa-magnifying-glass" aria-hidden='true' style={{color: '#fff', fontSize: 16}}></i>
            </button>
        </div>
    )
}

export default SearchBar