import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import CV from "../../data/CV.pdf"

function Navbar() {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 500) {
            // eslint-disable-next-line no-unused-expressions
            closeMenu;
          }
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

      useEffect(() => {
        if (window.innerWidth <= 1200) {
            // eslint-disable-next-line no-unused-expressions
            closeMenu;
        }
      }, []);

      return (
        <nav className={`navbar ${navActive ? "active" : ""}`}>
          <div>
            <p>Yondela.</p>
          </div>
          <a
            className={`nav__hamburger ${navActive ? "active" : ""}`}
            onClick={toggleNav}
          >
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
            <span className="nav__hamburger__line"></span>
          </a>
          <div className={`navbar--items ${navActive ? "active" : ""}`}>
            <ul>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  to="heroSection"
                  className="navbar--content"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  to="mySkills"
                  className="navbar--content"
                >
                  My Skills
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  to="AboutMe"
                  className="navbar--content"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  onClick={closeMenu}
                  activeClass="navbar--active-content"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  to="MyPortfolio"
                  className="navbar--content"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-btns">
            <Link
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="Contact"
              className="btn btn-outline-primary"
            >
              Contact Me
            </Link>
            <a
              onClick={closeMenu}
              className="btn btn-outline-primary"
              href={CV}
              // download={"CV"}
              target="_blank"
              rel="noopener noreferrer"
            >
              View/Download CV
            </a>
          </div>
        </nav>
      );
    

}

export default Navbar;