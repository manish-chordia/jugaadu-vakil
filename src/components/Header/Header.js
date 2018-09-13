import React from 'react'
import hamburgerIcon from '../../images/ham-burger.svg'
import backIcon from '../../images/back_arrow.svg'
import "./Header.css"

class Header extends React.PureComponent {
    onNavigationClick = () => {
        if(this.props.onNavigationClick) {
            this.props.onNavigationClick();
        } else {
            window.history.back();
        }
    }

    render() {
        const {title, showBackButton} = this.props;
        const navigationIcon = showBackButton ? backIcon : hamburgerIcon

        return(
            <div className="header">
                <img className="ham-burger" src={navigationIcon} alt="" onClick={this.onNavigationClick}/>
                {title ? <div className="page-title">{title}</div> : null}
            </div>
        );
    }
}

Header.defaultProps = {
    showBackButton: true
}

export default Header