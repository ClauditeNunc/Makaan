import { React, useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './FrontPage/FrontPage';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import PropertyTypesBlock from './PropertyTypesBlock/PropertyTypesBlock';
import PropertyPromo from './PropertyPromo/PropertyPromo';
import PropertyListing from './PropertyListing/PropertyListing';
import AgentPromo from './AgentPromo/AgentPromo';
import AgentsListing from './AgentsListing/AgentsListing';
import ClientReviews from './ClientReviews/ClientReviews';
import Footer from './Footer/Footer';
import Testimonial from './Testimonial/Testimonial';
import Error404 from './Error404/Error404';
import ForJ from './scrt/Secret';
import AddProperty from './AddProperty/AddProperty';
import { propertyLocations, propertyTypes, databaseOfPseudoProperties as initialDB, databaseOfPseudoProperties } from './locations';
import Cookies from './Cookies/Cookies';
import Help from './Help/Help';
import Faq from './Faq/Faq';
import PropertyListingExtra from './PropertyListingExtra/PropertyListingExtra';

function App() {
  const [propertyDatabase, setPropertyDatabase] = useState(initialDB);

  const updatePropertyDatabase = (newProperty) => {
    setPropertyDatabase((prevDatabase) => [...prevDatabase, newProperty]);
    databaseOfPseudoProperties.push(newProperty); 
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FrontPage />
              <SearchBar />
              <PropertyTypesBlock animationStatus={false} />
              <PropertyPromo animationStatus={false} />
              <PropertyListing propertyDatabase={propertyDatabase} />
              <AgentPromo animationStatus={false} />
              <AgentsListing animationStatus={false} />
              <ClientReviews />
            </>
          }
        />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/property-types" element={<PropertyTypesBlock animationStatus={true} />} />
        <Route path="/property-promo" element={<PropertyPromo animationStatus={true} />} />
        <Route path="/property-listing" element={<PropertyListing propertyDatabase={propertyDatabase} />} />
        <Route path="/client-reviews" element={<ClientReviews />} />
        <Route path="/agent-promo" element={<AgentPromo animationStatus={true} />} />
        <Route path="/agents-listing" element={<AgentsListing animationStatus={true} />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/add-property" element={<AddProperty updateDatabase={updatePropertyDatabase} />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/help" element={<Help />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/property-listing-extra" element={<PropertyListingExtra />} />
        <Route path="/myDear" element={<ForJ/>} />
        <Route
          path="/*"
          element={<Error404 />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
