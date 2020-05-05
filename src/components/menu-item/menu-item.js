import React from "react";
import "./menu-item.scss";
import {withRouter} from "react-router-dom"

const MenuItem=({title,imageUrl,size,history,linkUrl})=>(
    <div className={`${size} menu-item`} onClick={()=>history.push(`${process.env.PUBLIC_URL + '/shop'}${linkUrl}`)}>
        <div className="background-image" style={{
        backgroundImage:`url(${imageUrl})`
    }} />
         <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">shop now</span>
        </div>
     </div>
)


export default withRouter(MenuItem);