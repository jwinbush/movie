import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import bg from '../../assets/footerimg.webp';
import logo from '../../assets/CineFilms.png';


const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <Link to="/"><img src={logo} alt="" /></Link>
                        <i class='bx bx-play bx-tada' ></i>
                    </div>
                </div>
                <div className="footer__content__menus">
                    
                </div>
            </div>
        </div>
    );
}

export default Footer;
