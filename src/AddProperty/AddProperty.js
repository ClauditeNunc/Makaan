import React, { useState, useEffect } from 'react'; // Import useEffect and useState
import { useNavigate } from 'react-router-dom';
import './AddProperty.css';
import { databaseOfPseudoProperties as db, propertyTypes as typesOfProperties, propertyLocations as locationsOfProperties } from '../locations';

function AddProperty({ updateDatabase }) {
    const navigate = useNavigate();

    const [newProperty, setNewProperty] = useState({
        name: '',
        type: typesOfProperties[0].type,
        amount: 150000,
        imageURL: 'property-2.jpg',
        state:locationsOfProperties[0],
        address:"Some Street, USA",
        size: 0,
        amountOfBeds: 1,
        amountOfBaths: 1,
        status: 'For Rent',
        index: db.length + 1
    });

    useEffect(() => {
        // Initialize state with default values and set the proper index
        setNewProperty({
            name: '',
            type: typesOfProperties[0].type,
            amount: 150000,
            imageURL: 'property-2.jpg',
            state:locationsOfProperties[0],
            address:"Some Street, USA",
            size: 0,
            amountOfBeds: 1,
            amountOfBaths: 1,
            status: 'For Rent',
            index: db.length + 1
        });
    }, [db.length]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProperty((prevProperty) => ({
            ...prevProperty,
            [name]: value,
            index: prevProperty.index // Ensure index is not overwritten
        }));
    };

    const handleSubmit = () => {
        // Increment the index before updating the database
        const updatedDB = newProperty;
        updateDatabase(updatedDB);

        console.log(db); // Log the updated array
        navigate('/');
    };
  return (
    <div className='addProperty-wrapper'>
        <div className='addProperty-imgWrapper'><img className='propertyPicture' src='./imgs/apartments.jfif'/></div>
        <div className='addProperty'>
        <h3 className='addProperty-title'>Add New Property</h3>
        <form className='addProperty-form'>
            <div className='addProperty-form-part'>
                <label className='addProperty-form-label'>Name:</label>
                <input className='addProperty-form-input'  type="text" name="name" value={newProperty.name} onChange={handleInputChange} />
            </div>
            <div className='addProperty-form-part'>
            <label className='addProperty-form-label'>Type:</label>
                <select className='addProperty-form-select' name="type" value={newProperty.type} onChange={handleInputChange}>
                    {typesOfProperties.slice(0, 8).map((propertyType, index) => (
                        <option className='addProperty-form-select-option'  key={index} value={propertyType.type}>
                            {propertyType.type}
                        </option>
                    ))}
                </select>
            </div>
            <div className='addProperty-form-part'>
                <label className='addProperty-form-label'>Amount:</label>
                <input className='addProperty-form-input' type="number" name="amount" value={newProperty.amount} onChange={handleInputChange} />
            </div>
            <div className='addProperty-form-part'>
            <label className='addProperty-form-label'>State:</label>
                <select className='addProperty-form-select' name="state" value={newProperty.state} onChange={handleInputChange}>   
                {locationsOfProperties.slice(0, locationsOfProperties.length).map((propertyLocation, index) => (
                        <option className='addProperty-form-select-option' key={index} value={propertyLocation}>
                            {propertyLocation}
                        </option>
                    ))}
                    </select>
            </div>
            <div className='addProperty-form-part'>
                <label className='addProperty-form-label'>Address:</label>
                <input className='addProperty-form-input' type="text" name="address" value={newProperty.address} onChange={handleInputChange} />
            </div>
            <div className='addProperty-form-part'>
                <label className='addProperty-form-label'>Size:</label>
                <input className='addProperty-form-input' type="number" name="size" value={newProperty.size} onChange={handleInputChange} />
            </div>
            <div className='addProperty-form-part'>
                <label className='addProperty-form-label'>Amount of Beds:</label>
                <input className='addProperty-form-input' type="number" name="amountOfBeds" value={newProperty.amountOfBeds} onChange={handleInputChange} />
            </div>
            <div className='addProperty-form-part'>
                <label className='addProperty-form-label'>Amount of Baths:</label>
                <input className='addProperty-form-input' type="number" name="amountOfBaths" value={newProperty.amountOfBaths} onChange={handleInputChange} />
            </div>
            <div className='addProperty-form-part'>
            <label className='addProperty-form-label'>Status:</label>
                    <select className='addProperty-form-select' name="status" value={newProperty.status} onChange={handleInputChange}>
                        <option className='addProperty-form-select-option' value="For Rent">
                            For Rent
                        </option>
                        <option className='addProperty-form-select-option' value="For Sale">
                            For Sale
                        </option>
                    </select>
            </div>
            <button className='addProperty-form-submit' type="button" onClick={handleSubmit}>Submit</button>
        </form>
        </div>
    </div>
  );
}

export default AddProperty;
