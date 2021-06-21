import { useState } from 'preact/hooks';

import NavBar from './navbar';
import Main from './main';

const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

const App = () => {
  const current = localStorage.getItem('theme') || 'dark';
  const [theme, setTheme] = useState(current);

  document.body.classList.add(current)

  function nextTheme() {
    const next = themeMap[theme];
    document.body.classList.replace(theme, next);
    localStorage.setItem('theme', next);
    setTheme(next);
  }

  return (
    <>
      <NavBar nextTheme={nextTheme} />
      <Main />
    </>
  )
}

export default App;
