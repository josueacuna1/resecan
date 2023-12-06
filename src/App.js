import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Characters } from "./components/Characters";
import { Mechanics } from "./components/Mechanics";
import { History } from "./components/History";
import { Footer } from "./components/Footer";

function App() {
  return (

    <Router>
      <div>
        {/* Barra de navegación con enlaces */}
        <NavBar />

        {/* Contenido de la aplicación */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resecan/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/mechanics" element={<Mechanics />} />
        </Routes>

        {/* Footer siempre visible */}
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
