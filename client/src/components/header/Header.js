import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import './Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <header className="bgimage img-responsive">
        <nav className="navbar navbarstyle navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="navbar-brand" >
                <a href="">
                  <img src="./gillznskills-icon.png" style={{width:30}} alt='A leaping fish filled with multi-colored glitter'/>
                  Gillz-N-Skillz
                </a>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Menu <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><Link to="/login">Login</Link></li>
                    <li><a href="">Logout</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

       </header>
    );
  }
}

export default Header;