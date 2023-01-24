import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
// import bg from '../../assets/footerimg.webp';
// import logo from '../../assets/CineFilms.png';


const Footer = () => {
    return (
        // <div className="footer" style={{backgroundImage: `url(${bg})`}}>
        //     <div className="footer__content container">
        //         <div className="footer__content__logo">
        //             <div className="logo">
        //                 <Link to="/"><img src={logo} alt="" /></Link>
        //                 <i className='bx bx-play bx-tada' ></i>
        //             </div>
        //         </div>
        //         <div className="footer__content__menus">
                    
        //         </div>
        //     </div>
        // </div>
        <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="about">Cine Films is the world's most popular and authoritative source for information on movies, TV shows and celebrities. Products and services to help fans decide what to watch and where to watch it include: the IMDb website for desktop and mobile devices; apps for iOS and Android; and X-Ray on Prime Video.</p>
            </div>

  
            <div className="col">
              <h6>Quick Links</h6>
              <ul className="footer-links">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/movie'>Movies</Link></li>
              <li><Link to='/tv'>TV Shows</Link></li>
                
              </ul>
            </div>
            <br/>
          </div>
        </div>
        <div className="container">
          <div className="row">
            
            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li><a className="email" href="mailto:jawonwinbush@gmail.com" rel='noreferrer' target={"_blank"}><i className="bx bx-mail-send"></i></a></li>
                <li><a className="phone" href="tel:3176544324" rel='noreferrer' target={"_blank"}><i className="bx bx-phone"></i></a></li>
                <li><a className="github" href="https://www.github.com/jwinbush/" rel='noreferrer' target={"_blank"}><i className="bx bxl-github" ></i></a></li>
                <li><a className="linkedin" href="https://www.linkedin.com/in/jawonmwinbush/" rel='noreferrer' target={"_blank"}><i className="bx bxl-linkedin"></i></a></li>   
              </ul>
              <p className="copyright-text">Developed by Jawon Winbush.
              </p>
              <br />
              
            </div>
          </div>
        </div>
  </footer>
    );
}

export default Footer;
