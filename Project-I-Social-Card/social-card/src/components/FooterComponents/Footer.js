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

const footerButtons = document.querySelectorAll(".footerItem");
console.log(footerButtons);


// console.log(footerButtons[0]);
// const footerButtonsArray = Array.from(footerButtons);

// console.log(footerButtonsArray);
// footerButtons[2].addEventListener('click', () => {
//     footerButtons[0].classList.add("comment")
// })

export default Footer