import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
import './headerOption.css'
const HeaderOption = ({ title, Icon, avatar, Toggle }) => {
  const user = useSelector(selectUser);

  return (
    <div className='header-option'>
      {Icon && <Icon className="header-option__icon" />}
      {avatar && (
        <Avatar src={user?.photoUrl} onClick={Toggle} className="header-option__icon" >{user?.email[0]}</Avatar>)}
      <h3>{title}</h3>
    </div>
  )
}

export default HeaderOption