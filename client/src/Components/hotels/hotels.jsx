import React from "react";
import "./hotels.css";

const Hotels = ({ hoteldata }) => {
  
  // const fetchRoomData=async(roomId)=>{
  //    try{
  //     const response= await axios.get(`http://localhost:5566/api/room/${roomId}`);
  //     console.log(response.data)
  //     return response.data.roomType;
  //    }
  //    catch(err){
  //     console.log(err)
  //     return err;
  //    }
  // }

  return (
    <>
        <div className="maincontainer">
          <h1>Hotels</h1>
        {hoteldata.map((currElem, index) => {
          const { hotelName, city, country, rooms } = currElem;

          const letsMoveToRooms = () => {
            console.log(rooms)
          };
          return (
            <>
              <div
                key={index}
                className="hotelsdata"
                onClick={letsMoveToRooms}
              >
                <img
                  src="https://img.freepik.com/free-vector/flat-hotel-facade-background_23-2148157379.jpg"
                  alt="avatar"
                  width={102}
                />
                <div>{hotelName}</div>
                <div>{city}</div>
                <div>{country}</div>
              </div>
            </>
          );
        })}
      </div>
     
     
     
    </>
  );
  
};
export default Hotels;
