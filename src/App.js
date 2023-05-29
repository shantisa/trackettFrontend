import './Presentation/styles/App.css';
import Navbar from "./Presentation/Views/Navbar";
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthenticationView from "./Presentation/Views/AuthenticationView";
import HomeView from "./Presentation/Views/HomeView";
function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
            <Routes>
                <Route path="/" element={<AuthenticationView />} />
                <Route path="/home" element={<HomeView />} />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
