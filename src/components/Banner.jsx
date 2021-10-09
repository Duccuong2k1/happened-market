import React from 'react'
import backgroundBanners from '../assets/images/main_banner.png';
import { GrLinkNext } from "react-icons/gr";
const Banner = () => {
    // style={{backgroundImage:`url(${backgroundBanners})`}}
    return (
        <div className="banner" style={{backgroundImage:`url(${backgroundBanners})`}}>
            <div className="container">
                <h3>launching open event!</h3>
                {/* <p className="banner__text">what happened! mar-ket</p> */}
                <div className="banner__btn">
                    <span className="banner__btn__item">lorem ipsum</span>
                    <span className="banner__btn__icon__next"><GrLinkNext/></span>
                    <span className="banner__btn__text">Market <br/>launching!</span>
                    <span className="banner__btn__icon__next"><GrLinkNext/></span>
                    <span className="banner__btn__item">lorem ipsum</span>
                </div>
            </div>
        </div>
    )
}

export default Banner
