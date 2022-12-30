import "./App.css";
import Navbar from "./components/Navbar";

import Homesection from "./components/Homesection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homesection />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
