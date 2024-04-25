import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Structure from "./component"; // Ensure the path is correct
import Sidebar from "./component/Layout/Sidebar";
import RightSideBar from "./component/Layout/RightSideBar";
import LoginPage from "./component/Page/LoginPage";
import Documentation from "./component/Page/Documentation";
import FirstDocument from "./component/Page/FirstDocument";

function App() {
  return (
    <Router>
      <Structure sidebar={<Sidebar />} rightSidebar={<RightSideBar />}>
        <Routes>
          <Route path="/" element={<FirstDocument />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </Structure>
    </Router>
  );
}

export default App;
