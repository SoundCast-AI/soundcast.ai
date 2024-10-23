import React from "react";
import LandingPage from "./pages/LandingPage";
import ExplorePage from "./pages/ExplorePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/explore" element={<ExplorePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
