import React from 'react'
import IconSizeBigger from '../IconSizeBigger/IconSizeBigger'
import SearchBar from '../SearchBar/SearchBar'
import { Link, useNavigate } from 'react-router-dom'

function Header() {

    const navigate = useNavigate();

    return (
        <div style={{ height: '10%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 16, paddingRight: 16, borderBottom: '1px solid #ccc' }}>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <IconSizeBigger className="fa-solid fa-comment" size='20px'></IconSizeBigger>
                <p style={{ marginLeft: 20, fontSize: 24 }}>Messaging</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
                <SearchBar></SearchBar>
                <IconSizeBigger className="fa-sharp fa-regular fa-bell" size='24px'></IconSizeBigger>
                <IconSizeBigger className="fa-solid fa-user" size='24px'></IconSizeBigger>

                <div style={{ display: 'flex', gap: 12 }}>
                    <button onClick={() => navigate('/signup')}>
                        Sign Up
                    </button>
                    <button>Log In</button>
                </div>
            </div>
        </div>

    )
}

export default Header