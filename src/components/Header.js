import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Avatar } from '@mui/material';
import './Header.css'


function Header() {
    return (
        <div className='header'>
              <img
                    className="airbnb_icon"
                    src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
                    alt=""
                />
                <div className='header_center'>
                    <input type = 'text'/>
                    <SearchIcon />
                </div>

                <div className = 'header_right'>
                    <p>Become a Host</p>
                    <LanguageIcon/>
                    <KeyboardArrowDownIcon/>
                    <Avatar/>


                </div>
        </div>
    )
}

export default Header
