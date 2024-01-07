// Import necessary components and React
import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    databaseOfPseudoProperties.push(newProperty); // Add the new property to the original array
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/Makaan"
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
        <Route path="/Makaan/search" element={<SearchBar />} />
        <Route path="/Makaan/property-types" element={<PropertyTypesBlock animationStatus={true} />} />
        <Route path="/Makaan/property-promo" element={<PropertyPromo animationStatus={true} />} />
        <Route path="/Makaan/property-listing" element={<PropertyListing propertyDatabase={propertyDatabase} />} />
        <Route path="/Makaan/client-reviews" element={<ClientReviews />} />
        <Route path="/Makaan/agent-promo" element={<AgentPromo animationStatus={true} />} />
        <Route path="/Makaan/agents-listing" element={<AgentsListing animationStatus={true} />} />
        <Route path="/Makaan/testimonial" element={<Testimonial />} />
        <Route path="/Makaan/add-property" element={<AddProperty updateDatabase={updatePropertyDatabase} />} />
        <Route path="/Makaan/cookies" element={<Cookies />} />
        <Route path="/Makaan/help" element={<Help />} />
        <Route path="/Makaan/faq" element={<Faq />} />
        <Route path="/Makaan/property-listing-extra" element={<PropertyListingExtra />} />
        <Route
          path="/Makaan/*"
          element={<Error404 />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
