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
    name: "Resume",
    path: "#resume"
  },
  {
    name: "Skills",
    path: "#skills"
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
  };

  useEffect(() => {
    const handleHashChange = () => {
      setActivePath(window.location.hash);
    };

    const handleScroll = () => {
      for (let i = locations.length - 1; i >= 0; i--) {
        const location = locations[i];
        const element = document.querySelector(location.path);
        if (element && element.getBoundingClientRect().top <= 200) {
          if (window.location.hash !== location.path) {
            window.history.replaceState(null, '', location.path);
          }
          setActivePath(location.path);
          break;
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const hash = event.currentTarget.hash;
    const target = document.querySelector(hash);
    window.history.pushState(null, '', hash);
    if (target) {
      const offset = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
    setIsChecked(false);
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
