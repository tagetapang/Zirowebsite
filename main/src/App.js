import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Homesection from "./components/Homesection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homesection />}/>
          
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
