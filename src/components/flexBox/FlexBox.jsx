import React from 'react';
import './FlexBox.css'

export default function FlexBox(){
    return(
        <div>
            <span className="Header">Header</span>
            <ul>
                <li className="article">
                    Article
                </li>
                <li className="aside">
                    Aside
                </li>
                <li className="nav">
                    Nav
                </li>
            </ul>
            <span className="Footer">Footer</span>
        </div>
    )
}