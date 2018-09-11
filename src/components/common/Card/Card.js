import React from 'react'
import './Card.css'

const Card = ({children}) => (
    <div className="card-container">
        {children}
    </div>
);

export default Card