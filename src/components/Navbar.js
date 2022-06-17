import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import resume from '../img/YuhanWang_Resume.pdf';
import logo from '../img/logo.png';
import './style.css';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-light fixed-top w-100">
          <Link to='/'><div className="navbar-brand"><img src={logo} alt="logo" /></div></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
            <ul className="navbar-nav justify-content-end">
              {/** <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle portfolio_btn" id="navbardrop" data-toggle="dropdown">
                  PORTFOLIO
                </button>
                <div className="dropdown-menu">
                  <Link to='/sweet' className="dropdown-item">Sweet</Link>
                  <Link to='/smarthygiene' className="dropdown-item">Smart Hygiene</Link>
                  <Link to='/scatteringresources' className="dropdown-item">Scattering Resources</Link>
                 <Link to='/capitalsphere' className="dropdown-item">Capitalsphere</Link>
                  <Link to='/meeting' className="dropdown-item">Meeting APPropriately</Link>
                  <Link to='/d4sd' className="dropdown-item">D4SD</Link>
                  <Link to='/lito_nail' className="dropdown-item">Lito Nail</Link>
                </div>
              </li>**/}
              <li className="nav-item">
                <Link to='/about' className="nav-link">ME</Link>
              </li>
              <li className="nav-item">

                <a className="nav-link" href={resume} target="_blank" rel="noopener noreferrer">RESUME <i className="fas fa-external-link-alt"/></a>
              </li>

            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
