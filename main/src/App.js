import "./App.css";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Homesection from "./components/Homesection";
import { BrowserRouter, Routes, Route }from "react-router-dom";
import Villdis from "./components/Villdis";


function App() {
  const[villname,setvillname] = useState({title: "try"})
  const moreabvill =(stringg) =>{
    console.log("running")

  }
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homesection moreabvill = {moreabvill} />}/>
            <Route path = "/villdis" element={<Villdis villnamee = {villname.title}/>}/>
            

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
