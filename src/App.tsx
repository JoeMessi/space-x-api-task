import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { SideNav } from "./components/side-nav/SideNav";
import { Rockets } from "./views/rockets/Rockets";
import { History } from "./views/history/History";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleisMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <Router>
      <div className="outer-box">
        <div className="inner-box">
          <SideNav
            isMenuOpen={isMenuOpen}
            handleisMenuOpen={handleisMenuOpen}
          />

          <Routes>
            <Route
              path="/rockets"
              element={
                <Rockets
                  isMenuOpen={isMenuOpen}
                  handleisMenuOpen={handleisMenuOpen}
                />
              }
            />
            <Route path="/history" element={<History />} />
            {/* <Route path="/hello" element={<div>Hello</div>} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
