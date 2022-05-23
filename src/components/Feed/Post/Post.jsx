import { Avatar } from '@mui/material'
import { ThumbUpAltOutlined, ChatOutlined, ShareOutlined, SendOutlined } from '@mui/icons-material'
import React, { forwardRef } from 'react'
import InputOptions from '../InputOptions/InputOptions'
import './post.css'
const Post = forwardRef(({ name, desc, message,time,photoUrl }, ref) => {
    let date = new Date(time?.toDate()).toLocaleString()
    return (
        <div ref={ref} className='post'>
            <div className="post-header">
                <Avatar src={photoUrl} className="post-avatar" >{desc[0].toLocaleString().toUpperCase()}</Avatar>
                <div className="post-info">
                    <h2>{name}</h2>
                    <p>{desc}</p>
                </div>
            </div>
            <div className="post-body">
                <p>{message}</p>
                <small className='time'>{`${date}`}</small>
            </div>
            <div className="post-buttons">
                <InputOptions Icon={ThumbUpAltOutlined} title="Like"  color="gray" />
                <InputOptions Icon={ChatOutlined} title="Comment" color="gray" />
                <InputOptions Icon={ShareOutlined} title="Share" color="gray" />
                <InputOptions Icon={SendOutlined} title="Send" color="gray" />
            </div>
        </div>
    )
})

export default Post