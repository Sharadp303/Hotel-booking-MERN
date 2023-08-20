import React, { useState } from "react";
import Navbar from "../../Components/Navbar/navbar";
import "./home.css";

import { useNavigate } from "react-router-dom";

const Home = () => {
  
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

 console.log(checkIn)

  const navigate = useNavigate();
  
  const handleData = () => {
  
    navigate("/hotels",{
      state:{
        location:location,checkIn:checkIn,checkOut:checkOut
      }
    });
  };
  const today=new Date().toISOString().split('T')[0];

  return (
    <>
      <Navbar />
      <div className="home-container">
        <input
          type="text"
          className="loc-input"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="checkin" className="labelcss">
          CheckIn
        </label>
        <input
          type="date"
          id="checkin"
          value={checkIn}
          min={today}
          onChange={(e) => setCheckIn(e.target.value)}
        />
        <label htmlFor="checkout" className="labelcss">
          CheckOut
        </label>
        <input
          type="date"
          id="checkout"
          min={today}
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
        <button className="search-button" onClick={handleData}>
          Search Hotel
        </button>

      </div>
    </>
  );
};
export default Home;
