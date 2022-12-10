import React from 'react'
import "../assets/css/header.css"
import logo from "../assets/img/logo_nits.png"



const navItems = [
  {
    pathname: "/",
    name: "Home",
  },
  {
    pathname: "/#about",
    name: "About Laboratory",
  },
  {
    pathname: "/listOfEquipments",
    name: "List of Equipments",
  },
  {
    pathname: "/listOfProjects",
    name: "List of Projects",
  },
  {
    pathname: "/team",
    name: "Team",
  },
  {
    pathname: "/contact-us",
    name: "Contact us",
  },
]


const Header = () => {
  const [isScrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) setScrolled(true);
    else setScrolled(false);
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])
 


  return (
    <>
    <div className="header">
      <nav className={isScrolled ? "moved nav-bar" : "nav-bar"}>
        <div className="logo">
          <img src={logo} alt="" className="nit-logo" />
        </div>
        <div className="links">
        {
            navItems.map((item, i) => 
            (item.subItems && item.subItems.length > 0 ) ? (
              <div key={i} >
                  <a className="nav-btn" href={ item.pathname} >{item.name}</a>
                
              </div>
            ) : 
            (
              <div key={i} className={item.pathname === window.location.pathname ? "nav-btn-box active-btn" : "nav-btn-box"}>
                <a href={ item.pathname} className="nav-btn"   >{item.name}</a>
              </div>
            ))
          }
        </div>
      </nav>
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
              <ul id="menu">
                {navItems.map((item, i) => (
                  <li key={i}>
                    <a href={ item.pathname } >{item.name}</a>
                  </li>
                ))}
            </ul>
          </div>
        </nav>
      <div>
      <div className="content-container">
        <div className="heading">
          ENERGY SYSTEMS LAB
        </div>
        
        <div className="organised-by">
           <br /> Department of Electronics and Instrumentation
          Engineering
        </div>
        <div className="logo2 log-15x mt-2">
            {/* <img src={logo} alt="" className="nit-logo" /> */}
          </div>
          <br />
        <div className="college-name mt-1">
          NATIONAL INSTITUTE OF TECHNOLOGY SILCHAR <br />
          (Assam, India)
        </div>
        
      </div>
      </div>
  </div>
  <div>

  {/* mobile nav */}
  </div>
</>
  )
}

export default Header