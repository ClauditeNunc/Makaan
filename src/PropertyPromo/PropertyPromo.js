import './PropertyPromo.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function PropertyPromo(props) {
    const [isVisibleStatic, setIsVisibleStatic] = useState(false);
    useEffect(() => {
        const handleScrollForStatic = () => {
            if (window.scrollY >= 1000) {
                setIsVisibleStatic(true);
            }
        };

        window.addEventListener('scroll', handleScrollForStatic);
        return () => {
            window.removeEventListener('scroll', handleScrollForStatic);
        };
    }, []);
    return (
        <div className='propertyPromo' style={{
           paddingTop: props.animationStatus ? "10%":"none",
           paddingBottom: props.animationStatus ? "5%":"none",
        }}>
            <div className={isVisibleStatic || props.animationStatus ? 'propertyPromo-img-container' : 'hidden'}>
                <div style={{
                    clipPath: 'polygon(0 0, 25% 0, 65% 100%, 0% 100%)',
                    backgroundColor: '#00b98d',
                    width: '120%',
                    height: '100%',
                    marginLeft: '2em',
                    position: 'relative',
                    zIndex: -5,
                }} />
                <img className='propertyPromo-img' src='./imgs/about.jpg' />
            </div>
            <div className={isVisibleStatic || props.animationStatus ? 'propertyPromo-text-container' : 'hidden'}>
                <h2 className='propertyPromo-text-title'>
                    #1 Place To Find The Perfect Property
                </h2>
                <p className='propertyPromo-text-p'>
                    Discover the perfect property with ease!
                    Our curated listings guide you to your dream home.
                    Explore, choose, and make your move.
                    Your ideal living space awaits – start your journey with us today!
                </p>
                <ul>
                    <li><span>🗸</span>Seamless service.</li>
                    <li><span>🗸</span>Dazzling amenities.</li>
                    <li><span>🗸</span>Expert guidance always.   </li>
                </ul>
                <Link className='readMore-button' to='/testimonial'>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default PropertyPromo;



