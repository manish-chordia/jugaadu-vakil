import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Header from '../Header'
import Card from '../common/Card'

//Styles
import styles from './VakilsList.css'

const Vakil = ({vakilInfo}) => {
    const {name, imageUrl, practiceAreas, courts, practicingSince, contactNo, officeAddress, city, state, pincode, registrationNo, profileLink} = vakilInfo;
    return(
        <Card>
            <div className={'card-content'}>
                <div className={'card-text-container'}>
                    <div className={'vakil-name'}>{name}</div>
                    <div className={'card-text'}>{`${city}, ${state}`}</div>
                    <div className={'card-text'}>{`Practicing since ${practicingSince}`}</div>
                    <div className={'card-text'}>{`${practiceAreas[0]} + ${practiceAreas.length - 1} more`}</div>
                </div>
                <div>
                    <img className={'image'} src={imageUrl} alt=""/>
                </div>
            </div>
            <div className="card-button-container">
                <Link to={`${process.env.PUBLIC_URL}/lawyers/${profileLink}`} className="card-action-button">VIEW PROFILE</Link>
            </div>
        </Card>
    );
};

class VakilList extends Component {
    render() {
        const {vakils} = this.props;
        if(!vakils) {
            return null;
        }
        return(
            <div>
                <Header title="Vakils"/>
                {vakils.map((vakil, index) => {
                    return <Vakil vakilInfo={vakil} key={index}/>
                })}
            </div>
        );
    }
}

export default connect(
    (state, props) => ({vakils: state.vakilsData.vakils})
)(VakilList)