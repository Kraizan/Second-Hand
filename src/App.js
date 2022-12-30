import React from "react";
import Explore from "./Views/Explore/Explore";
import Upload from "./Views/Upload/Upload";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/styles.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Explore />} />
        <Route path="upload" element={<Upload />} />
      </Routes>
    </Router>
  );
}

export default App;
