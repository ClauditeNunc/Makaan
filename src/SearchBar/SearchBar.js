import './SearchBar.css';
import { Link } from 'react-router-dom';
import { propertyLocations as searchBarLocations, propertyTypes as searchBarTypes } from 'D:/For Work/Projects/Project 1/my-app/src/locations.js';

function SearchBar() {
  return (
    <div className='searchBar'>
      <form className='searchBar-form'>
        <input className='searchBar-form-searchField' type='search' placeholder='Search Keyword'></input>
        <select className='searchBar-form-propertyTypes'>
          <option className='searchBar-form-propertyType' value="" disabled selected>Choose property's type</option>
          {searchBarTypes.map(apartmentType => (<option key={apartmentType.id} className='searchBar-form-propertyType'>{apartmentType.type}s</option>))}
        </select>
        <select className='searchBar-form-propertyLocations'>
          <option className='searchBar-form-propertyLocation' value="" disabled selected>Choose property's location</option>
          {searchBarLocations.map((locationType, index) => (<option key={index} className='searchBar-form-propertyLocation'>{locationType}</option>))}
        </select>
        <Link to="/property-listing-extra" className='searchBar-form-submitSearch' type='submit'>Search</Link>
      </form>
    </div>
  );
}

export default SearchBar;
