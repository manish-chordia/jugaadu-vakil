import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../common/Card'
import tipsImage from '../../images/tips.svg'
import lawyerImage from '../../images/lawyer.svg'

import './HomePage.css'

const HomePage = () => {
    return(
        <div>
            <Card>
                <div className={"card-content"}>
                    <div className="card-text-container">
                        <div className="card-title">Find a lawyer</div>
                        <div className="card-sub-title">Search a top rated lawyer near you</div>
                    </div>
                    <div className="card-image-container">
                        <img className="card-image" src={lawyerImage} alt=""/>
                    </div>
                </div>
                <div className="card-action-button-container">
                    <Link to={`${process.env.PUBLIC_URL}/lawyers`} className="card-action-button">SEARCH</Link>
                </div>
            </Card>
            <Card>
                <div className={"card-content"}>
                    <div className="card-text-container">
                        <div className="card-title">Browse Topics</div>
                        <div className="card-sub-title">Look through the contents to find out material</div>
                    </div>
                    <div className="card-image-container">
                        <img className="card-image" src={tipsImage} alt=""/>
                    </div>
                </div>
                <div className="card-action-button-container">
                    <Link to={`${process.env.PUBLIC_URL}/lawyers`} className="card-action-button">BROWSE</Link>
                </div>
            </Card>
        </div>
    );
};

export default HomePage