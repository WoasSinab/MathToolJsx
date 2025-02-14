import React from 'react';
import MainPage from './components/MainPage';
import MathGame from './components/MathGame';
import Calculator from './components/Calculator';
import UnitConverter from './components/UnitConverter';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import './assets/styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/math-game" element={<MathGame />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/unit-converter" element={<UnitConverter />} />
      </Routes>
    </Router>
  );
}

export default App;
