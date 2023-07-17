import './Navigation.scss'
import { useEffect, useState } from "react";

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
  const [activePath, setActivePath] = useState(window.location.hash);
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);

    console.log(isChecked)
  };
  useEffect(() => {
    const handleHashChange = () => {
      setActivePath(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const hash = event.currentTarget.hash;
    const target = document.querySelector(hash);
    window.location.hash = hash;
    if (target) {
      const offset = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }

  };

  return (
    <nav className="nav">
      <a href="/" className="site-logo">OSKAR</a>
      <input type="checkbox" name="" onChange={handleInputChange} checked={isChecked} id="input__menu-toggle" className="menu-toggle"></input>
      <label htmlFor="input__menu-toggle" className={`label-for-menu ${isChecked ? 'active' : ''}`}>
        <div className="burger">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
        </div>
      </label>
      <ul>
        {locations.map(location => (
          <li key={location.path} className={location.path === activePath ? "active" : ""}>
            <a href={location.path} onClick={handleClick}>{location.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation;
