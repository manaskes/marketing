import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Structure from "./component"; // Ensure the path is correct
import Sidebar from "./component/Layout/Sidebar";
import RightSideBar from "./component/Layout/RightSideBar";
import LoginPage from "./component/Page/LoginPage";
import FirstDocument from "./component/Page/FirstDocument";
import AboutPage from "./component/Page/AboutPage";
import ContactPage from "./component/Page/ContactPage";
import Advertiser from "./component/Page/Advertiser";
import Publisher from "./component/Page/Publisher";
import Lottie from "lottie-react";
import loader from './component/LottieData/loading.json';
import './App.css'; // assuming your styles are defined here

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., fetching data)
    const timer = setTimeout(() => setLoading(false), 3000); // Adjust delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <Lottie animationData={loader} loop={true} style={{ width: '100%', height: '100%' }} />
      </div>
    );
  }

  return (
    <Router>
      <Structure sidebar={<Sidebar />} rightSidebar={<RightSideBar />}>
        <Routes>
          <Route path="/" element={<FirstDocument />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/advertiser" element={<Advertiser />} />
          <Route path="/publisher" element={<Publisher />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Structure>
    </Router>
  );
}

export default App;
