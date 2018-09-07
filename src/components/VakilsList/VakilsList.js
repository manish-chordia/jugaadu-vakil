import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

//Styles
import styles from './VakilsList.css'

const Vakil = ({vakilInfo}) => {
    const {name, imageUrl, practiceAreas, courts, practicingSince, contactNo, officeAddress, city, state, pincode, registrationNo, profileLink} = vakilInfo;
    return(
        <div className={'vakil-container'}>
            <div>
                <img className={'image'} src={imageUrl} alt=""/>
            </div>
            <div className={'info-container'}>
                <div className={'lawyer-name'}>{name}</div>
                <div>{`${city}, ${state}`}</div>
                <div>{`Practicing since ${practicingSince}`}</div>
                <div>{`${practiceAreas[0]} + ${practiceAreas.length - 1} more`}</div>
                <Link to={`${process.env.PUBLIC_URL}/lawyers/${profileLink}`}>View Profile</Link>
            </div>
        </div>
    );
};

class VakilList extends Component {
    render() {
        const {vakils} = this.props;
        if(!vakils) {
            return null;
        }
        return(
            <div>{vakils.map((vakil, index) => {
                return <Vakil vakilInfo={vakil} key={index}/>
            })}</div>
        );
    }
}

export default connect(
    (state, props) => ({vakils: state.vakilsData.vakils})
)(VakilList)