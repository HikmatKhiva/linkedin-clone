import { Avatar } from '@mui/material';
import React from 'react';
import './sidebar.css';
import BgImg from '../../assets/img4.jpg'
import { useSelector } from 'react-redux';
import { selectUser } from "../../features/userSlice"
const Sidebar = () => {
    const user = useSelector(selectUser)
    const recentItem = (topic) => {
        return <div className="sidebar-recent__item">
            <span className='sidebar-hash'>#</span>
            <p>{topic}</p>
        </div>
    }
    return (
        <div className='sidebar'>
            <div className="sidebar-top">
                <img src={BgImg} alt="" />
                <Avatar src={user.photoUrl} className='sidebar-avatar' >{user.email[0]}</Avatar>
                <h2>{user?.displayName}</h2>
                <h4>{user?.email}</h4>
            </div>
            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p>Who you iewed</p>
                    <p className="sidebar-stat__number">1000</p>
                </div>
                <div className="sidebar-stat">
                    <p>Views on post</p>
                    <p className="sidebar-stat__number">1000</p>
                </div>
            </div>
            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("software engineering")}
                {recentItem("web developer")}
            </div>
        </div>
    )
}

export default Sidebar