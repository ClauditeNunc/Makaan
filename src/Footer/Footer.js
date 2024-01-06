import './Footer.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    const [hoveredIcon, setHoveredIcon] = useState({ type: null});

    const handleMouseEnter = (type) => {
      setHoveredIcon(type);
    };
  
    const handleMouseLeave = () => {
      setHoveredIcon({type: null});
    };

    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
    <footer style={{
        display:"flex",
        flexDirection:"column",
        backgroundColor:"#0e2e50",
        color:"#fcffff",
        width:"100%",
        paddingBottom: window.innerWidth > 1368 ?"25vh":"auto"
    }}>
        <div className='footer-upperPart'>
            <div className='footer-upperPart-socials'>
                <h5 className='footer-upperPart-socials-title'>Get In Touch</h5>
                <p><img src='./imgs/geopinG.png'/>Strajku Łódzkich Studentów 1981 r. 13, 91-001 Łódź</p>
                <p><img src='./imgs/telephoneG.png'/>+48 572 776624</p>
                <p><img src='./imgs/mailG.png'/>justme_2021@mail.ru</p>
                <div className='footer-upperPart-socials-icons'>
                    <img
                    className='footer-upperPart-socials-icon'
                    src={`./imgs/instagram${hoveredIcon === 'instagram' ? 'G' : 'W'}.png`}
                    alt="Instagram Icon"
                    onClick={()=> window.open("https://instagram.com/", "_blank")}
                    onMouseEnter={() => handleMouseEnter('instagram')}
                    onMouseLeave={handleMouseLeave}
                    />
                    <img
                    className='footer-upperPart-socials-icon'
                    src={`./imgs/twitter${hoveredIcon === 'twitter' ? 'G' : 'W'}.png`}
                    alt="Twitter Icon"
                    onClick={()=> window.open("https://twitter.com/", "_blank")}
                    onMouseEnter={() => handleMouseEnter('twitter')}
                    onMouseLeave={handleMouseLeave}
                    />
                    <img
                    className='footer-upperPart-socials-icon'
                    src={`./imgs/facebook${hoveredIcon === 'facebook' ? 'G' : 'W'}.png`}
                    alt="Facebook Icon"
                    onClick={()=> window.open("https://pl-pl.facebook.com/", "_blank")}
                    onMouseEnter={() => handleMouseEnter('facebook')}
                    onMouseLeave={handleMouseLeave}
                    />
                    <img
                    className='footer-upperPart-socials-icon'
                    src={`./imgs/youtube${hoveredIcon === 'youtube' ? 'G' : 'W'}.png`}
                    alt="youtube Icon"
                    onClick={()=> window.open("https://youtu.be/6dNho0h_yQQ", "_blank")}
                    onMouseEnter={() => handleMouseEnter('youtube')}
                    onMouseLeave={handleMouseLeave}
                    />
                </div>
            </div>
            <div className='footer-upperPart-navigation'>
                <h5 className='footer-upperPart-navigation-title'>Quick Links</h5>
                <Link to="/property-promo">{'>'}About Us</Link>
                <Link to='/agent-promo'>{'>'}Contact Us</Link>
                <Link to='/property-types'>{'>'}Our Services</Link>
                <Link to='/help'>{'>'}Privacy Policy</Link>
                <Link to='/help'>{'>'}Terms & Conditions</Link>
            </div>
            <div className='footer-upperPart-photos'>
                <h5 className='footer-upperPart-photos-title'>Photo Gallery</h5>
                <img className='footer-upperPart-photo' src='./imgs/property-1.jpg'/>
                <img className='footer-upperPart-photo' src='./imgs/property-2.jpg'/>
                <img className='footer-upperPart-photo' src='./imgs/property-3.jpg'/>
                <img className='footer-upperPart-photo' src='./imgs/property-4.jpg'/>
                <img className='footer-upperPart-photo' src='./imgs/property-5.jpg'/>
                <img className='footer-upperPart-photo' src='./imgs/property-6.jpg'/>
            </div>
            <div className='footer-upperPart-newsletter'>
                <h5 className='footer-upperPart-newsletter-title'>Newsletter</h5>
                <p className='footer-upperPart-newsletter-subtext'>Explore our latest property listings and find<br/> your dream home today!</p>
                <form className='footer-upperPart-newsletter-signUpForm'>
                    <input placeholder='Your email'></input>
                    <button>Sign Up</button>
                </form>
            </div>
        </div>
        <div className='footer-bottomPart'>
            <div className='footer-bottomPart-signature'>
                © <a>Your site name</a>, All rights reserved. Design realised by <a onClick={()=>window.open("https://www.linkedin.com/in/kbln27/?originalSubdomain=pl","_blank")}>Faik Mammadov</a>, designed by <a onClick={()=>window.open("https://htmlcodex.com/","_blank")}>HTML Codex</a>.
            </div>
            <div className='footer-bottomPart-additionalLinks'>
                <Link to="/" className='footer-bottomPart-additionalLink' onClick={handleLinkClick}>
                    Home
                </Link>
                <Link to="/cookies" className='footer-bottomPart-additionalLink' onClick={handleLinkClick}>
                    Cookies
                </Link>
                <Link to="/help" className='footer-bottomPart-additionalLink' onClick={handleLinkClick}>
                    Help
                </Link>
                <Link to="/faq" className='footer-bottomPart-additionalLink' onClick={handleLinkClick}>
                    FAQs
                </Link>
            </div>
        </div>
    </footer>
    );
}

export default Footer;