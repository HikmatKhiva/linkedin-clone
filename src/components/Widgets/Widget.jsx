import { FiberManualRecord, Info } from '@mui/icons-material'
import React from 'react'
import './widget.css'
const Widget = () => {
    const newArticle = (heading, subtitle) => {
        return (
            <div className="widget-article">
                <div className="article-left">
                    <FiberManualRecord className="widget-icon" />
                </div>
                <div className="article-right">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }
    return (
        <div className='widget'>
            <div className="widget-header">
                <h2>Linkedin News</h2>
                <Info />
            </div>
            <div className="widget-body">
                {newArticle("This is test", "this is test")}
                {newArticle("This is test", "this is test")}
                {newArticle("This is test", "this is test")}
                {newArticle("This is test", "this is test")}
            </div>
        </div>
    )
}

export default Widget