import './Header.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function BurgerIcon({ onClick }) {
    return (
        <div className="burger-icon" onClick={onClick}>
            <img src='./imgs/burgerMenu.png' alt="Burger Icon" />
        </div>
    );
}

function Header() {
    const [isHoveredProperties, setIsHoveredProperties] = useState(false);
    const [isHoveredPages, setIsHoveredPages] = useState(false);
    const [isMorphed, setIsMorphed] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScrollForMorphed = () => {
            if (window.scrollY >= 50) {
                setIsMorphed(true);
            } else {
                setIsMorphed(false);
            }
        };

        window.addEventListener('scroll', handleScrollForMorphed);
        return () => {
            window.removeEventListener('scroll', handleScrollForMorphed);
        };
    }, []);

    const handleMouseEnterPages = () => setIsHoveredPages(true);
    const handleMouseLeavePages = () => setIsHoveredPages(false);
    const handleMouseClickPages = () => setIsHoveredPages(!isHoveredPages);

    const handleMouseEnterProperties = () => setIsHoveredProperties(true);
    const handleMouseLeaveProperties = () => setIsHoveredProperties(false);
    const handleMouseClickProperties = () => setIsHoveredProperties(!isHoveredProperties);

    const handleBurgerClick = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    const handleLinkClick = () => {
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={isMorphed ? 'header-sticky' : 'header'}>
            <div className='header-shortInfo'>
                <img src='./imgs/icon-deal.png' alt="Icon" />
                <h2>Makaan</h2>
            </div>
            <BurgerIcon className="burger-menu" onClick={handleBurgerClick} />
            <div className={`header-links${isMobileMenuOpen ? ' show' : ''}`}>
                <Link to="/" className='header-links-home' onClick={handleLinkClick}>
                    Home
                </Link>
                <Link to="/property-promo" className='header-links-about' onClick={handleLinkClick}>
                    About
                </Link>
                <div onClick={handleMouseClickProperties} className='header-links-dropdownProperties'>
                    Property ˅
                    <div
                        onMouseEnter={handleMouseEnterProperties}
                        onMouseLeave={handleMouseLeaveProperties}
                        className={`header-linksDropdownProperty ${isHoveredProperties ? 'visible' : ''}`}>
                        <Link to="/property-listing" onClick={handleLinkClick}>Our Properties</Link>
                        <Link to="/property-types" onClick={handleLinkClick}>Types of Properties</Link>
                        <Link to="/agents-listing" onClick={handleLinkClick}>Our Agents</Link>
                    </div>
                </div>
                <div onClick={handleMouseClickPages} className='header-links-dropdownPages'>
                    Pages ˅
                    <div
                        onMouseEnter={handleMouseEnterPages}
                        onMouseLeave={handleMouseLeavePages}
                        className={`header-linksDropdownPage ${isHoveredPages ? 'visible' : ''}`}>
                        <Link onClick={handleLinkClick} to="/testimonial">Testimonial</Link>
                        <Link onClick={handleLinkClick} to="/error-404">Error 404</Link>
                        <Link onClick={handleLinkClick} to="/property-listing-extra">Browse More</Link>
                        <Link onClick={handleLinkClick} to="/faq">FAQs</Link>
                        <Link onClick={handleLinkClick} to="/help">Help</Link>
                    </div>
                </div>
                <Link onClick={handleLinkClick} to="/agent-promo" className='header-links-contact'>
                    Contact
                </Link>
                <Link onClick={handleLinkClick} to="/add-property" className='header-links-addProperty-button'> 
                    Add Property
                </Link>
            </div>
        </div>
    );
}

export default Header;
