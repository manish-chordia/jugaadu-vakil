import React, {Component} from 'react'
import {connect} from 'react-redux'
import {css} from 'emotion'

const vakilContainer = css({
    padding: 16,
    boxShadow: '0 2px 2px 0 rgba(0,0,0,.1)',
    display: 'flex',
    textAlign: 'left',
    backgroundColor: 'white',
    marginBottom: 8
});

const imageContainer = css({
    height: 115
});

const image = css({
    height: 115
});

const infoContainer = css({
    fontSize: 12,
});

const Vakil = ({vakilInfo}) => {
    const {name, imageUrl, practiceAreas, courts, practicingSince, contactNo, officeAddress, city, state, pincode, registrationNo} = vakilInfo;
    return(
        <div className={vakilContainer}>
            <div className={imageContainer}>
                <img className={image} src={imageUrl}/>
            </div>
            <div className={infoContainer}>
                <div>{name}</div>
                <div>{`${city}, ${state}`}</div>
                <div>{`Practicing since ${practicingSince}`}</div>
                <div>{`${practiceAreas[0]} + ${practiceAreas.length - 1} more`}</div>
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
)(VakilList);