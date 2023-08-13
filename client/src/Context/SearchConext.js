import { createContext } from "react";

export const SearchContext = createContext("");

// export const SearchProvider=({children})=>{
//   const [location, setLocation] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");

//   const values = {
//     location,
//     setLocation,
//     checkIn,
//     setCheckIn,
//     checkOut,
//     setCheckOut,
//   };

//     return(
//         <SearchContext.Provider value={values}>
//             {children}
//         </SearchContext.Provider>

//     )
// }
