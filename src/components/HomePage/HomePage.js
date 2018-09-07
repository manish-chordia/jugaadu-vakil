import React from 'react'
import {Link} from 'react-router-dom'
import tipsImage from '../../images/tips.svg'
import lawyerImage from '../../images/lawyer.svg'

const HomePage = () => {
    return(
        <div>
            <h1>Welcome to Jugaadu Vakil</h1>
            <img src={lawyerImage} alt=""/>
            <Link to={`${process.env.PUBLIC_URL}/lawyers`}>Search for Lawyer</Link>
            <br />
            <img src={tipsImage} alt=""/>
            <span >Browse through topics</span>
        </div>
    );
};

export default HomePage