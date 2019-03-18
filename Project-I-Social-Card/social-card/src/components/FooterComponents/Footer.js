import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <p className="footerItem"><i className="far fa-comment"></i></p>
            <p className="footerItem"><i className="fas fa-retweet"></i> 6</p>
            <p className="footerItem"><i className="far fa-heart"></i> 4</p>
            <p className="footerItem"><i className="far fa-envelope"></i></p>
        </div>
    )
}

export default Footer