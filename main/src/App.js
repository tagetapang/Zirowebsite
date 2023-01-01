import "./App.css";
import Navbar from "./components/Navbar";

import Homesection from "./components/Homesection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Villdis from "./components/Villdis";

function App() {
  var villname = null;
  const moreabvill = (event) =>{
    if(event.currentTarget.id === "mudangtage"){
      villname = "mudangtage";
    }
    
  }
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homesection moreabvill = {moreabvill} />}/>
            <Route path = "/villdis" element={<Villdis villnamee ="koha"/>}/>

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
