import React from 'react';
import './App.css';
import Pesa from './Util/Pesa';

function App() {
  return (
    <div className="welcome-page">
      <header className="welcome-header">
        <h1>Welcome to <span className="site-name">GymZone</span></h1>
        <div className="animation-container">
          {/* Animación: Caminadora o pesas */}
        <Pesa  animationDuration={1000} isAnimationActive={true}/>
        </div>
        <a href="/main" className="enter-button">
          Enter the Gym
        </a>
      </header>
    </div>
  );
}

export default App;
