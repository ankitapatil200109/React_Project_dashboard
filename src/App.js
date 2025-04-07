import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Customers from './pages/Customers';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const bgClass = darkMode ? 'bg-dark text-white' : 'bg-light text-dark';

  return (
    <div className={`min-vh-100 ${bgClass}`}>
      <Router>
        <NavBar toggleTheme={toggleTheme} darkMode={darkMode} />
        <div className="d-flex">
          <Sidebar darkMode={darkMode} />
          <main className="flex-grow-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/customers" element={<Customers />} />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
