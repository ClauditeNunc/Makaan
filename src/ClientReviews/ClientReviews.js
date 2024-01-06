import React, { useState } from 'react';
import './ClientReviews.css';
import clients from '../dbClients';

function ClientReviews() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? clients.length -2 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === clients.length - 2 ? 0 : prevIndex + 1));
    };

    const clientStyle = {
        transform: `translateX(${-currentImageIndex * 35}%)`,
        transition: 'transform 1s ease-in-out',
        overflow: 'hidden',
    };

    return (
        <div className='clientReviews'>
            <div className='clientReviews-text'>
                <h3 className='clientReviews-text-h3'>Our Clients Say!</h3>
                <p className='clientReviews-text-p'>
                    Feedback from our valued clients speaks volumes about our exceptional service.
                    Discover what others are saying about our unparalleled service and client-centric approach.
                </p>
            </div>
            <div className='buttonsAndCards'>
                <div className='overflow-outline'>
                    <button onClick={handlePrevClick}>{'<'}</button>
                </div>
                <div className='clientReviews-cards' style={clientStyle}>
                    {clients.map((client, index) => (
                        <div className='clientReviews-card-outline'>
                            <div key={index} className='clientReviews-card'>
                                {client.review}
                                <div className='clientReviews-card-info'>
                                    <img src={client.imageURL} alt={`client-${index}`} />
                                    <span style={{
                                        display:"flex",
                                        flexDirection:"column",
                                        justifyContent:"flex-start",
                                        marginLeft:"1rem",
                                    }}>
                                        <p className='clientReviews-card-info-name'>{client.name}</p>
                                        <p className='clientReviews-card-info-job'>{client.designation}</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='overflow-outline'>
                    <button onClick={handleNextClick}>{'>'}</button>
                </div>
            </div>
        </div>
    );
}

export default ClientReviews;
