import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homePage/HomePage";
import TopBar from "./components/topbar/TopBar";
import Single from "./Pages/homePage/single/Single";
import Write from "./Pages/write/Write"; // Import the Write component

function App() {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/single" element={<Single />} />
        <Route path="/write" element={<Write />} />{" "}
        {/* Only render Write component on /write route */}
      </Routes>
    </Router>
  );
}

export default App;
