import React, { useState } from 'react'
import './header.css'
import HeaderOption from './HeaderOPtion/HeaderOption'
import { Avatar, IconButton } from "@mui/material"
import { Menu, MenuItem } from "@mui/material"
import { LinkedIn, Search, SupervisorAccount, Home, BusinessCenter, Chat, Notifications, Email, Logout } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice'
import { auth } from '../../Firebase/firebase'
const Header = () => {
    const [toggle, setToggle] = useState(false);
    const Toggle = () => setToggle(!toggle);
    const user = useSelector(selectUser);
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logout())
        auth.signOut();
        Toggle();
    }
    return (
        <>
            <header className='header'>
                <div className="container d-flex justify-content-between align-items-center">
                    <div className="header-left">
                        {/* <img src="" className='header-logo' alt="" /> */}
                        <LinkedIn className='header-logo' />
                        <div className="header-search">
                            <Search className='search-icon' />
                            <input type="text" placeholder='Search' />
                        </div>
                    </div>
                    <div className="header-right">
                        <HeaderOption Icon={Home} title="Home" />
                        <HeaderOption Icon={SupervisorAccount} title="My Network" />
                        <HeaderOption Icon={BusinessCenter} title="Jobs" />
                        <HeaderOption Icon={Chat} title="Messaging" />
                        <HeaderOption Icon={Notifications} title="Notification" />
                        {/* Last Child add avatar from  */}
                        <HeaderOption avatar={true} Toggle={Toggle} title="Me" />
                    </div>
                    <div className='header-right__account'>
                        <IconButton onClick={Toggle} className='header-right__account-btn'>
                            <Avatar src={user?.photoUrl} className='header-right__avatar' />
                        </IconButton>
                        {user && (<Menu className='toggle-test'
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            open={toggle}
                            onClose={Toggle}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <MenuItem className='d-flex justify-content-between' onClick={Toggle}>{user?.displayName} <Avatar src={user?.photoUrl} className='icon-toggle' >{user?.email[0]}</Avatar> </MenuItem>
                            <MenuItem className='d-flex justify-content-between' onClick={Toggle}>{user?.email} <Email className='icon-toggle' /> </MenuItem>
                            <MenuItem className='d-flex justify-content-between' onClick={logOut} >Logout <Logout className='icon-toggle' /> </MenuItem>
                        </Menu>)
                        }
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header