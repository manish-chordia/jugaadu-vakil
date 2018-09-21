import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../common/Card'
import tipsImage from '../../images/tips.svg'
import lawyerImage from '../../images/lawyer.svg'
import SideNav from '../SideNav'
import Header from '../Header'

import './HomePage.css'

class HomePage extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isSideNavOpen: false
        };
    }

    openSideNav = () => {
        this.setState({
            isSideNavOpen: true
        });
    }

    closeSideNav = () => {
        this.setState({
            isSideNavOpen: false
        });
    }

    render() {
        return(
            <div>
                <Header onNavigationClick={this.openSideNav} title={"Jugaadu Vakil"} showBackButton={false}/>
                <SideNav isOpen={this.state.isSideNavOpen} onClose={this.closeSideNav}/>
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
                        <Link to={`${process.env.PUBLIC_URL}/browse`} className="card-action-button">BROWSE</Link>
                    </div>
                </Card>
            </div>
        );
    }
};

export default HomePage