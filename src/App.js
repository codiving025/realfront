import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchFilter from './components/SearchFilter';
import House from './components/House';
import SignUp from './components/SignUp';
import SearchResults from './components/SearchResults';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SearchedHouse from './components/Searchedhouse';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Enquiry from './components/Enquiry';
import EnquiriesList from './components/EnquiriesList';

function App() {
  const [housesArray, setHousesArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(process.env.REACT_APP_BACKEND_URL,"houses");
        setHousesArray(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  console.log(housesArray);
  return (
    <div className='container-fluid'>
      <Header />
      <Routes>
        <Route 
          path="/" 
          element={
            <React.Fragment>
              <SearchFilter housesData={housesArray} />
              {housesArray[2] && <House Houses={housesArray[2]} />} {/* Check if housesArray[2] is defined */}
            </React.Fragment>
          } 
        />
        <Route 
          path="/SearchResults/:county" 
          element={
            <React.Fragment>
              <SearchFilter housesData={housesArray} />
              <SearchResults housesData={housesArray} />
            </React.Fragment>
          } 
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path='/enquiries' element={<EnquiriesList />} />
        <Route 
          path="/Searchedhouse" 
          element={
          <SearchedHouse housesData={housesArray} />
        } 
        />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
