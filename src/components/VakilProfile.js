import React from 'react'
import {connect} from 'react-redux'
import {getVakilProfile} from '../reducers/vakilReducer'

const VakilProfile = ({profile}) => (
    <div>Vakil Profile</div>
);

export default connect(
    (state, props) => ({profile: getVakilProfile(state.vakilsData.vakils, props.filter)})
)(VakilProfile)