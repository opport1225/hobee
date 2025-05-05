import { useState } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="app-container">
        <button onClick={toggleTheme} className="toggle-btn">
          {darkMode ? 'Light ☀️' : 'Dark 🌙'}
        </button>

        <img src="/hobee_logo2.png" alt="Hobee logo" className="logo" />

        <input
          type="text"
          className="search"
          placeholder="What hobby are you interested in?"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              console.log('Search:', e.target.value);
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
