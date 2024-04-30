import React from "react";
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

function App() {
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
