import './PropertyListing.css';
import { useState, useEffect } from 'react';
import { databaseOfPseudoProperties as db } from '../locations';
import { Link } from 'react-router-dom';

function PropertyListing() {
    function addCommas(num) {
        var str = num.toString().split('.');
        if (str[0].length >= 5) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');
    }

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 1000) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [whichIsClicked, setWhichIsClicked] = useState(null);

    const handleWhichIsClicked = (buttonId) => {
        if (whichIsClicked !== null) {
            document.getElementById(whichIsClicked).classList.remove('active');
        }
        setWhichIsClicked(buttonId);
        document.getElementById(buttonId).classList.add('active');
        console.log(whichIsClicked);
    };

    useEffect(() => {
        handleWhichIsClicked('featured');
    }, []);

    const [properties, setProperties] = useState(db);

    useEffect(() => {
        setProperties(db);
    }, [db]);

    return (
        <div style={{
            minHeight: window.innerWidth < 1368 ? '5000px' : "fit-content",
        }}>
            <div className='propertyListing-about'>
                <div className='propertyListing-about-text'>
                    <h3>Property Listing</h3>
                    <p>Explore our diverse and extensive range of property listings.
                        Find your ideal home or investment opportunity <br />with our comprehensive
                        and up-to-date selection. Start your search today for a brighter future.</p>
                </div>
                <div className='propertyListing-about-nav'>
                    <button
                        className='propertyListing-about-nav-button'
                        onClick={() => handleWhichIsClicked('featured')}
                        id="featured"
                    >
                        Featured
                    </button>
                    <button
                        className='propertyListing-about-nav-button'
                        onClick={() => handleWhichIsClicked('For Sale')}
                        id="For Sale"
                    >
                        For Sale
                    </button>
                    <button
                        className='propertyListing-about-nav-button'
                        onClick={() => handleWhichIsClicked('For Rent')}
                        id="For Rent"
                    >
                        For Rent
                    </button>
                </div>
            </div>
            <div className='propertyListing-posts'>
                {properties.map((dbObj) => (
                    ((whichIsClicked === dbObj.status || whichIsClicked === 'featured') && dbObj.index < 7) && (
                        <div className='propertyListing-post' key={dbObj.id}>
                            <div className='propertyListing-post-header'>
                                <img className='propertyListing-post-header-photo' src={`./imgs/${dbObj.imageURL}`} />
                                <span className='propertyListing-post-header-status'>{dbObj.status}</span>
                                <span className='propertyListing-post-header-type'>{dbObj.type}</span>
                            </div>
                            <div className='propertyListing-post-main'>
                                <p className='propertyListing-post-main-price'>${addCommas(dbObj.amount)}</p>
                                <p className='propertyListing-post-main-title'>{dbObj.name} {dbObj.type}</p>
                                <div className='propertyListing-post-main-location'>
                                    <img className='post-main-gpsIcon' src='./imgs/gps.png' />
                                    {dbObj.state}, {dbObj.address}
                                </div>
                            </div>
                            <div className='propertyListing-post-footer'>
                                <span className='propertyListing-post-footerPart'><img src='./imgs/size.png' /> {dbObj.index} Sqft</span>
                                <span className='propertyListing-post-footerPart'><img src='./imgs/beds.png' /> {dbObj.amountOfBeds} Bed</span>
                                <span className='propertyListing-post-footerPart'><img src='./imgs/bathroom.png' /> {dbObj.amountOfBaths} Bath</span>
                            </div>
                        </div>
                    )
                ))}
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <Link to='/property-listing-extra' className='propertyListing-browseMore'>Browse More Property</Link>
            </div>
        </div>
    );
}

export default PropertyListing;
