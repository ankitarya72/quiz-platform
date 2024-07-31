// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import './App.css';
import './components/QuizComponent.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/quiz" element={<QuizComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
