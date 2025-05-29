import React, { useEffect, useState } from 'react'

function Nav() {

  const [darkMode, setDarkMode] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(()=>{
    if(darkMode){
      document.body.classList.add('dark-mode');
    }
    else{
      document.body.classList.remove('dark-mode');
    }
  },[darkMode]);

  const toggleDarkMode = () =>{
    setDarkMode(!darkMode);
  }

   useEffect(() =>{
    const handleScroll = () => {
      if(window.scrollY > 50){
        setIsSticky(true);
      }
      else{
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return()=>window.removeEventListener('scroll',handleScroll);
   },[]);


  return (
    <>
    <div className="container py-2 d-flex justify-content-between align-items-center">
      <div className="nav-social d-flex">
        <a href="#" className="social-icon text-primary"><i className="bi bi-facebook"></i></a>
        <a href="#" className="social-icon text-info"><i className="bi bi-twitter"></i></a>
        <a href="#" className="social-icon text-danger"><i className="bi bi-instagram"></i></a>
        <a href="#" className="social-icon text-primary"><i className="bi bi-linkedin"></i></a>
        <a href="#" className="social-icon text-danger"><i className="bi bi-pinterest"></i></a>
      </div>

      <div className="navbar-brand mx-auto logo d-flex align-items-center">
        <h2><span>Quiet</span>Quill</h2>
      </div>
      <div className="nav-btn-wrap d-flex align-items-center">
        <button className="btn btn-primary me-2">Subscribe</button>
        <a href="#" className="social-icon border d-flex align-items-center justify-content-center">
          <i className="bi bi-person"></i>
        </a>
      </div>
    </div>

     <nav className={`navbar navbar-expand-lg border-top ${isSticky?'fix-nav' : ''}`}>
      <div className="container">
        <button className="navbar-toggler"
        type="button"
        data-bs-tooggle="collapse"
        data-bs-target="#mainNavbar"
        aria-controls='mainNavbar'
        aria-expanded='false'
        aria-label='Toggle navigation'
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id='mainNavbar'>
          <ul className="navbar-nav">
            <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Blogs</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <label className="switch">
            <input type="checkbox" checked={darkMode} onClick={toggleDarkMode} />
            <span className="slider"></span>
          </label>
          <a href="#" className="social-icon ms-3"><i className="bi bi-search"></i></a>
        </div>
      </div>
    </nav>  
    </>
  )
}

export default Nav