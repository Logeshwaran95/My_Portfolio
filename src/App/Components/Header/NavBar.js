import React,{useEffect,useState} from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom';




function NavBar({setColor}) {
    const [click, setClick] = React.useState(false);
  
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

    const [sticky, setSticky] = useState("");

    // on render, set listener
    useEffect(() => {
      console.log("hello");
      window.addEventListener("scroll", isSticky);
      return () => {
        window.removeEventListener("scroll", isSticky);
      };
    }, []);
  
    const isSticky = () => {
      /* Method that will fix header after a specific scrollable */
      const scrollTop = window.scrollY;
      const stickyClass = scrollTop >= 250 ? "is-sticky" : "";
      setSticky(stickyClass);
      console.log(stickyClass);
    };
  
    const classes = `header-section d-none d-xl-block ${sticky}`;
    const style={
      backgroundColor: '#FF3CAC',
      backgroundImage: 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)'
    }

    
    return (
      <header >
       <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
        <nav className="navbar" onClick={e => e.stopPropagation()}
        style={setColor?style:{}}
        >
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo" >
              Logeshwaran
              <i className="fa fa-code"></i>
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/skills"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Skills
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/projects"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  activeClassName="active"
                  className="nav-links"
                 onClick={click ? handleClick : null}
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </ header>
    );
  }

    export default NavBar;