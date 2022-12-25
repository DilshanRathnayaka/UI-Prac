import React from 'react'
import "./index.css"

function Home() {
  return (
    <div className="container">
        <div className="ball-1"></div>
        <div className="ball-2"></div>
        <div className="ball-3"></div>
      <div className="box">
        <nav >
          <div className="logo">LOGO</div>
          <ul>
            <li><a>HOME</a></li>
            <li><a>ABOUT</a></li>
            <li><a>SERVICE</a></li>
            <li><a>CONTACT</a></li>
          </ul>
        </nav>
        <div className="contains">
          <div className="section-1">
            <h1>Welcome</h1>
            <h3>This Is<span>' </span>For <span>'</span> Practice</h3>
            <p>Create Glass Using React+Css  No Responsive</p>
            <div className="buttons">
              <a className='ab'>More Info</a>
              <a className='ab'>Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home