import React from 'react'
import hamburgerIcon from '../../images/ham-burger.svg'
import "./Header.css"

const Header = () => (
    <div className="header">
        <img className="ham-burger" src={hamburgerIcon} alt=""/>
        <div className="page-title">Jugaadu Vakil</div>
    </div>
);

export default Header