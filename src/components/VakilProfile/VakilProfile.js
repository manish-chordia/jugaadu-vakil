import React from 'react'
import {connect} from 'react-redux'
import {getVakilProfile} from '../../reducers/vakilReducer'

//styles
import "./VakilProfile.css"

const VakilProfile = ({profile}) => {
    const {name, imageUrl, practiceAreas, courts, practicingSince, contactNo, officeAddress, city, state, pincode, registrationNo, profileLink, description} = profile;
    return(
        <div className={'vakil-profile'}>
            <div className={'profile-container'}>
                <div className={'image-container'}>
                    <img className={'image'} src={imageUrl} alt=""/>
                </div>
                <div className={'info-container'}>
                    <div className={'lawyer-name'}>{name}</div>
                    <div>{`${city}, ${state}`}</div>
                    <div>{`Practicing since ${practicingSince}`}</div>
                </div>
            </div>
            <div className={'section'}>
                <div className={'title'}>Practice Areas</div>
                {practiceAreas.map((area, index) => (
                    <div className={'profile-section-text'} key={index}>{area}</div>
                ))}
            </div>
            <div className={'section'}>
                <div className={'title'}>About</div>
                <div className={'profile-section-text'}>{description}</div>
            </div>
            <div className={'registration-number'}>Registration No: {registrationNo}</div>
            <div className={'section'}>
                <div className={'title'}>Courts</div>
                <ul>
                    {courts.map((court, index) => (
                        <li key={index} className={'profile-section-text'}>{court}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default connect(
    (state, props) => ({profile: getVakilProfile(state.vakilsData.vakils, props.filter)})
)(VakilProfile)