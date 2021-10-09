import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png';

const mainNav=[
    {
        display:"introdution",
        path:"/introdution",
    },
    {
        display:"solution",
        path:"/solution",
    },
    {
        display:"rate plan",
        path:"/rate",
    },
    {
        display:"login",
        path:"/login",
    },
    {
        display:"apply for free use",
        path:"/apply",
    }
];

const Header = () => {
    
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <Link to='/'>
                        <img src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="header__menu">
                    {
                        mainNav.map((item, index) => (

                            <div className="header__menu__item" key={index}>
                                   <Link to={item.path}>
                                        <span>{item.display}</span>
                                   </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Header
