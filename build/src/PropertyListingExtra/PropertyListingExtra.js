import './PropertyListingExtra.css';
import React, { useState, useEffect } from 'react';
import { databaseOfPseudoProperties as db, propertyTypes, propertyLocations } from '../locations';



function PropertyListingExtra() {
    const [whichIsClicked, setWhichIsClicked] = useState(null);
    const [searchTitle, setSearchTitle] = useState('');
    const [selectedPropertyType, setSelectedPropertyType] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [properties, setProperties] = useState(db);
    const [searchButtonClicked, setSearchButtonClicked] = useState(false);

    const handleWhichIsClicked = (buttonId) => {
        if (whichIsClicked !== null) {
            document.getElementById(whichIsClicked).classList.remove('active');
        }
        setWhichIsClicked(buttonId);
        document.getElementById(buttonId).classList.add('active');
    };

    const handleSearch = () => {
        const filteredProperties = db.filter((property) => {
            const titleMatch = property.name.toLowerCase().includes(searchTitle.toLowerCase());
            const typeMatch = !selectedPropertyType || property.type === selectedPropertyType;
            const locationMatch = !selectedLocation || property.state === selectedLocation;

            return titleMatch && typeMatch && locationMatch;
        });

        setProperties(filteredProperties);
    };

    useEffect(() => {
        handleWhichIsClicked('featured');
    }, []);

    useEffect(() => {
        if (searchButtonClicked) {
            handleSearch();
            setSearchButtonClicked(false);
        }
    }, [searchButtonClicked, searchTitle, selectedPropertyType, selectedLocation, db]);

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
    return (
        <div style={{ paddingTop: "10%" }}>
            <div className='propertyListingExtra-about'>
                <div className='propertyListingExtra-about-text'>
                    <h3>Our Properties</h3>
                    <p>Explore our diverse and extensive range of property listings.
                        Find your ideal home or investment opportunity with our comprehensive
                        and up-to-date selection. Start your search today for a brighter future.</p>
                </div>
                <div className='propertyListingExtra-about-nav'>
                    <button
                        className='propertyListingExtra-about-nav-button'
                        onClick={() => handleWhichIsClicked('featured')}
                        id="featured"
                    >
                        Featured
                    </button>
                    <button
                        className='propertyListingExtra-about-nav-button'
                        onClick={() => handleWhichIsClicked('For Sale')}
                        id="For Sale"
                    >
                        For Sell
                    </button>
                    <button
                        className='propertyListingExtra-about-nav-button'
                        onClick={() => handleWhichIsClicked('For Rent')}
                        id="For Rent"
                    >
                        For Rent
                    </button>
                </div>
                <div className='propertyListingExtra-search'>
                <input
                    type='text'
                    placeholder='Search by title'
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                />
                <select
                    value={selectedPropertyType}
                    onChange={(e) => setSelectedPropertyType(e.target.value)}
                >
                    <option value=''>All Types</option>
                    {propertyTypes.map((type) => (
                        <option key={type.index} value={type.type}>{type.type}</option>
                    ))}
                </select>
                <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                >
                    <option value=''>All Locations</option>
                    {propertyLocations.map((location, index) => (
                        <option key={index} value={location}>{location}</option>
                    ))}
                </select>
                <button onClick={() => setSearchButtonClicked(true)}>Search</button>
            </div>
            </div>
            <div className='propertyListingExtra-posts'>
                {properties.map((dbObj) => (
                    ((whichIsClicked === dbObj.status || whichIsClicked === 'featured')) && (
                        <div className='propertyListingExtra-post' key={dbObj.index}>
                            <div className='propertyListingExtra-post-photo-container'>
                                <img className='propertyListingExtra-post-photo' src={`./imgs/${dbObj.imageURL}`} alt={dbObj.name} />
                            </div>
                            <div className='propertyListingExtra-post-info'>
                                <div className='propertyListingExtra-post-shortInfo'>
                                    <span className='propertyListingExtra-post-shortInfo-status'>{dbObj.status}</span>
                                    <span className='propertyListingExtra-post-shortInfo-type'>{dbObj.type}</span>
                                </div>
                                <p className='propertyListingExtra-post-info-price'>${addCommas(dbObj.amount)}</p>
                                <p className='propertyListingExtra-post-info-title'>{dbObj.name} {dbObj.type}</p>
                                <div className='propertyListingExtra-post-info-location'>
                                    <img className='post-info-gpsIcon' src='./imgs/gps.png' alt='Location icon' />
                                    {dbObj.state}, {dbObj.address}
                                </div>
                                <div className='propertyListingExtra-post-footer'>
                                    <span className='propertyListingExtra-post-footerPart'><img src='./imgs/size.png' alt='Size icon' /> {dbObj.size} Sqft</span>
                                    <span className='propertyListingExtra-post-footerPart'><img src='./imgs/beds.png' alt='Beds icon' /> {dbObj.amountOfBeds} Bed</span>
                                    <span className='propertyListingExtra-post-footerPart'><img src='./imgs/bathroom.png' alt='Bathroom icon' /> {dbObj.amountOfBaths} Bath</span>
                                </div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    );
}

export default PropertyListingExtra;
