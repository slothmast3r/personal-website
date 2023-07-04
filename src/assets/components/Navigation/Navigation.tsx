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
    if (target) {
      const offset = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
    window.location.hash = hash;

  };

  return (
    <nav className="nav">
      <a href="/" className="site-logo">Site</a>
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
