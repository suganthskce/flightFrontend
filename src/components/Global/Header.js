import React, { Fragment, useState } from 'react';

const Header = (props) => {
    const [tab, seTTab] = useState('aerin');
    const list = [{
        id: "aerin",
        displayLabel: "Aerin"
    },
    {
        id: "flight",
        displayLabel: "Flight"
    }, {
        id: "hotel",
        displayLabel: "Hotel"
    }];

    return (
        <div className="header__container">
            <div className="header--logo">
                <div className="logo__wrapper">
                    <a href="javascript:void(0)">
                        <img src="https://cdn.aertrip.com/resources/assets/scss/skin/img/common/aertip-vertical-logo-white.svg" class="css-logo-icon" />
                        <img src="https://cdn.aertrip.com/resources/assets/scss/skin/img/common/aertrip-name-vertical-white.svg" class="css-logo-text" />
                    </a>
                </div>
            </div>
            <div className="navBar">
                <ul>
                    {list.map(option => {
                        return <li
                            key={option.id}
                            className={tab == option.id ? 'selected' : ''}
                            onClick={() => { seTTab(option.id) }}
                        >
                            {option.displayLabel}
                        </li>;
                    })}
                </ul>
            </div>
            <div className="headerRightBar">
                <div className="registerSignIn">Login</div>
            </div>
        </div>
    );
}

export default Header;