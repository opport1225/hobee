// src/App.jsx
import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleMode = () => setDarkMode(!darkMode)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="app">
        {/* 토글 버튼 (로고 위) */}
        <button onClick={toggleMode} className="toggle-btn">
          {darkMode ? 'Light ☀️' : 'Dark 🌙'}
        </button>

        {/* 로고 */}
        <img
          src="/hobee_logo2.png"
          alt="HoBee Logo"
          className="logo-img"
        />

        {/* 검색창 */}
        <input
          type="text"
          className="search"
          placeholder="What hobby are you interested in?"
        />
      </div>
    </div>
  )
}

export default App
