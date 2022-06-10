import React from 'react';
import headerLogo from './images/Logo.svg';

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <img src={headerLogo} alt="Логотип Место" className="header__logo" />
            </header>
        )
    }
}

export default Header;
