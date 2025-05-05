function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="app">
        <button className="toggle-btn" onClick={toggleTheme}>
          {darkMode ? 'Light ☀️' : 'Dark 🌙'}
        </button>
        <img src="/hobee_logo2.png" alt="Hobee Logo" className="logo" />
        <input className="search" placeholder="What hobby are you interested in?" />
      </div>
    </div>
  );
}
