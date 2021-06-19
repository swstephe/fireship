import React, {useState} from 'react'
import NavBar from './components/NavBar'
import Main from './components/Main'
import CatsIcon from "./icons/CatsIcon"
import AliensIcon from "./icons/AliensIcon"
import SpaceIcon from "./icons/SpaceIcon"
import ShuttleIcon from "./icons/ShuttleIcon"

const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
}

const navbarItems = [
  [<CatsIcon/>, "Cats"],
  [<AliensIcon/>, "Aliens"],
  [<SpaceIcon/>, "Space"],
  [<ShuttleIcon/>, "Shuttle"]
]

function App() {
  const currentTheme = localStorage.getItem('theme') || 'dark';
  const [theme, setTheme] = useState(currentTheme);
  document.body.className = theme;

  function switchTheme(e) {
    const next = themeMap[theme]
    setTheme(next);
    localStorage.setItem('theme', next);
    e.preventDefault()
  }

  return (
    <>
      <NavBar navbarItems={navbarItems} switchTheme={switchTheme}/>
      <Main />
    </>
  )
}

export default App;
