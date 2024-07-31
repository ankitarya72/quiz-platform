// src/components/HomeComponent.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeComponent.css'; // Import the CSS file

const HomeComponent = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/quiz');
  };

  return (
    <div className="home-container">
      <h1>Welcome to Quiz</h1>
      <button onClick={handleGetStarted}>Get Started</button>
    </div>
  );
};

export default HomeComponent;
