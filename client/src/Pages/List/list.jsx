import React, { useEffect, useState } from "react";
import Hotels from "../../Components/hotels/hotels";
import jwtdecode from 'jwt-decode'

import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const List = () => {
  const { state } = useLocation();

  const [hoteldata, setHoteldata] = useState(null);

  console.log(state.location);

    const navigate=useNavigate()

  async function checkHeader() {
    await axios
      .get(`http://localhost:5566/api/hotels?city=${state.location}`,
      {
        headers:{
          'access-token':localStorage.getItem('token')
        }
      })
      .then((response) => {
        setHoteldata(response?.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  

  useEffect(() => {
    const token=localStorage.getItem('token')
    if(token){
      const {id}=jwtdecode(token)
      console.log(id)
      if(!id){
        localStorage.removeItem('token')
        navigate('/login')  
      }
      else{
        checkHeader();
      }
    }
    else{
      navigate('/login') 
    }
   
  }, []);

  return (
    <>
      <h2 className="ttt">BOOKING</h2>
      {hoteldata !== null && hoteldata.length > 0 ? (
        <Hotels hoteldata={hoteldata} />
      ) : (
        <div style={{ textAlign: "center", color: "red", margin: 20,fontSize:50 }}>
          Hotel NOt found
        </div>
      )}
    </>
  );
};
export default List;
