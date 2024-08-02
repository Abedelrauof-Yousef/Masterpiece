import "./App.css";
import AboutUs from "./components/About Page/About";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pricing from "./components/Pricing Page/Pricing";
import SignIn from "./components/Registeration/Sign";
import Contact from "./components/Contact Page/Contact";
import Navbar from "./components/HomePage/homepageComponents/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="pricing" element={<Pricing/>} />
          <Route path="signin" element={<SignIn/>} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
