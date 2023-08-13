import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/navbar";
import Hotels from "../../Components/hotels/hotels";
import axios from "axios";
import { useLocation } from "react-router-dom";

const List = () => {
  const { state } = useLocation();

  const [hoteldata, setHoteldata] = useState(null);

  console.log(state.location);

  useEffect(() => {
    axios
      .get(`http://localhost:5566/api/hotels?city=${state.location}`)
      .then((response) => {
        setHoteldata(response?.data);
      });
  }, [state.location]);

  return (
    <>
      <Navbar />
      {(hoteldata !== null && hoteldata.length > 0) ? 
        <Hotels hoteldata={hoteldata} />
       : (
        <div style={{ textAlign: "center", color: "red", margin: 20 }}>
          Hotel NOt found
        </div>
      )}
    </>
  );
};
export default List;
