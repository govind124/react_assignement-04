import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Student from "./Component/Student";
import Contact from "./Component/Contact";
// import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Student" element={<Student />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}