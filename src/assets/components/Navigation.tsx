import React from "react";
import './Navigation.scss'



const locations = [
  {
    name: "Home",
    path: "#home"
  },
  {
    name: "About me",
    path: "#about"
  },
  {
    name: "Projects",
    path: "#projects"
  },
  {
    name: "Contact",
    path: "#contact"
  }
]

function Navigation(){
  return (
    <nav className="nav">
      <a href="/" className="site-logo">Site</a>
      <ul>
        {locations.map(location => (
          <li key={location.path}>
            <a href={location.path}>{location.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
};

export default Navigation;
