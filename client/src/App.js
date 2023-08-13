import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Pages/home/home";
import Login from "./Pages/Login/login";
import Register from "./Pages/register/register";
import List from "./Pages/List/list";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home avatar="Sharad"/>}/>
      <Route path="/hotels" element={<List />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register"  element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
