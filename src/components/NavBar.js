import React from "react"
import "./NavBar.css"
import LogoIcon from "../icons/LogoIcon"
import SolarIcon from "../icons/SolarIcon"
import DarkIcon from "../icons/DarkIcon"
import LightIcon from "../icons/LightIcon"

export default function NavBar(props) {
  const {navbarItems, switchTheme} = props;
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo">
          <a href="." className="nav-link">
            <span className="link-text logo-text">Fireship</span>
            <LogoIcon/>
          </a>
        </li>
        {navbarItems.map(([icon, label], i) => (
          <li key={i} className="nav-item">
            <a href="." className="nav-link">
              {icon}
              <span className="link-text">{label}</span>
            </a>
          </li>
        ))}
        <li className="nav-item" id="themeButton">
          <a href="." className="nav-link" onClick={switchTheme}>
            <SolarIcon/>
            <DarkIcon/>
            <LightIcon/>
            <span className="link-text">Themify</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}