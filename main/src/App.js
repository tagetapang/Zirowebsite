import "./App.css";
import Navbar from "./components/Navbar";

import Homesection from "./components/Homesection";
import { BrowserRouter, Routes, Route }from "react-router-dom";
import Mudangtage from "./components/aboutvillages/Mudangtage";
import Footer from "./components/Footer";
import Hija from "./components/aboutvillages/Hija";
import About from "./components/About";



function App() {
  
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Homesection />}/>
            <Route exact path="/mudangtage" element={<Mudangtage/>}/>
            <Route exact path ="/hija" element={<Hija/>}/>
            <Route exact path ="/about" element={<About/>}/>
           
            

          
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
