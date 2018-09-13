import React from 'react'
import {Link} from 'react-router-dom'
import crossIcon from '../../images/close.svg'

import "./SideNav.css"

const SideNav = ({isOpen, onClose}) => {
    const sideNavClass = isOpen ? 'side-nav side-nav-open' : 'side-nav'
    return(
        <div className={sideNavClass}>
            <img className="close-icon" src={crossIcon} alt={`&times;`} onClick={onClose}/>
            <Link to={`${process.env.PUBLIC_URL}/contact`} className="side-nav-link">Contact Us</Link>
            <Link to={`${process.env.PUBLIC_URL}/disclaimer`} className="side-nav-link">Disclaimer</Link>
        </div>
    );
};

export default SideNav