import React, { useState } from "react";
import Navbar from "../../Components/Navbar/navbar";
import "./home.css";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [err, setErr] = useState("");

 

  const navigate = useNavigate();
  
  const handleData = () => {
    let ans =
      parseInt(checkOut.replace(/-/g, "")) -
      parseInt(checkIn.replace(/-/g, ""));
    if (ans < 0) {
      return setErr("Checkout date must be greater than Checkin");
    }
    navigate("/hotels",{
      state:{
        location:location,checkIn:checkIn,checkOut:checkOut
      }
    });
  };

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
          onChange={(e) => setCheckIn(e.target.value)}
        />
        <label htmlFor="checkout" className="labelcss">
          CheckOut
        </label>
        <input
          type="date"
          id="checkout"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
        />
        <button className="search-button" onClick={handleData}>
          Search Hotel
        </button>
        {<p>{err}</p>}
      </div>
    </>
  );
};
export default Home;
