import React from 'react'
import {connect} from 'react-redux'
import {getVakilProfile} from '../../reducers/vakilReducer'
import Header from '../Header'

//styles
import "./VakilProfile.css"

class VakilProfile extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const {name, imageUrl, practiceAreas, courts, practicingSince, contactNo, officeAddress, city, state, pincode, registrationNo, profileLink, description} = this.props.profile;
        return(
            <div>
                <Header title="Profile"/>
                <div className={'vakil-profile'}>
                    <div className={'card-content'}>
                        <div className={'card-text-container'}>
                            <div className={'vakil-name'}>{name}</div>
                            <div className={'card-text'}>{`${city}, ${state}`}</div>
                            <div className={'card-text'}>{`Practicing since ${practicingSince}`}</div>
                        </div>
                        <div>
                            <img className={'image'} src={imageUrl} alt=""/>
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
            </div>
        );
    }
};

export default connect(
    (state, props) => ({profile: getVakilProfile(state.vakilsData.vakils, props.filter)})
)(VakilProfile)