import './FrontPage.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function FrontPage() {
    const images = ['./imgs/about.jpg', './imgs/carousel-1.jpg', './imgs/carousel-2.jpg','./imgs/about.jpg', './imgs/carousel-1.jpg', './imgs/carousel-2.jpg','./imgs/about.jpg', './imgs/carousel-1.jpg', './imgs/carousel-2.jpg','./imgs/about.jpg', './imgs/carousel-1.jpg', './imgs/carousel-2.jpg','./imgs/about.jpg', './imgs/carousel-1.jpg', './imgs/carousel-2.jpg'];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length -2 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 2 ? 0 : prevIndex + 1));
    };
    const imageStyle = {
        transform: `translateX(${-currentImageIndex * ((window.innerWidth > 1168) ? 50 : 100)}%)`,
    };

    return (
        <div className='frontPage'>
            <div className='frontPage-description'>
                <h1 className='frontPage-description-title'>
                    Find A <span>Perfect Home</span> To Live With Your Family
                </h1>
                <p className='frontPage-description-text'>
                    Embarking on the quest for an ideal family home involves thoughtful considerations, from location to amenities, crafting a space tailored to meet your unique preferences.
                </p>
                <Link to='/property-listing-extra' className='frontPage-description-button'>
                    Get Started
                </Link>
                <div className='frontpage-button-container'>
                    <button className="frontpage-button" onClick={handlePrevClick}>{'<'}</button>
                    <button className="frontpage-button" onClick={handleNextClick}>{'>'}</button>
                </div>
            </div>
            <div className="frontpage-images-container">
                <div className="frontpage-images" style={imageStyle}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className="frontpage-image"
                            src={image}
                            alt={`frontpage-image-${index}`}
                        />
                    ))}
                </div>
            </div>
        </div>);
}

export default FrontPage;
