import { useState } from 'react'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleMode = () => setDarkMode(!darkMode)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="app">
        <button className="toggle-btn" onClick={toggleMode}>
          {darkMode ? 'Light ☀️' : 'Dark 🌙'}
        </button>

        <img src="/hobee_logo2.png" alt="Hobee Logo" className="logo" />

        <input
          className="search"
          type="text"
          placeholder="What hobby are you interested in?"
        />
      </div>
    </div>
  )
}

export default App
