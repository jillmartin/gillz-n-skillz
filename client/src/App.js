// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import FishMap from './components/map/Map';
import FapDetails from './components/fapDetails/FapDetails';
// import EsriLoaderReact from 'esri-loader-react';
import styles from './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clickedFapLat: "",
      clickedFapLong: ""
    }
    this.latLongCallback = this.latLongCallback.bind(this);
  }
  latLongCallback(clickedFap) {
    this.setState({
      clickedFapLat: clickedFap.clickedFapLat,
      clickedFapLong: clickedFap.clickedFapLong,
    })
    // console.log(this.state)
  }

  render() {
    
        return (

        <div>
            <header className="bgimage">

            <nav className="navbar navbar-inverse fixedTop">         
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="">Gillz-N-Skillz</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                 
                  <ul className="nav navbar-nav navbar-right">
                    <li><a href="">Link</a></li>
                    <li className="dropdown">
                      <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                      <ul className="dropdown-menu">
                        <li><a href="">My Favorites</a></li>
                        <li><a href="">Current Conditions</a></li>
                        <li><a href="">Logout</a></li>
                  </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
           
          <div className="container-fluid">
              <FishMap callbackFromApp={this.latLongCallback}/>
              <br />
            </div>
         
         <div className="container">
          <div className="jumbotron">
            <h3>Site Details</h3>
            <p>I am your location. Check me out for directions, shops and post-fishing extravaganzas!</p>
          </div>
          </div>
          <div className="container">
            <FapDetails fapDetails={this.state}/>
          </div>
          <p class="caps">Copyright Gillz-n-Skillz 2017</p>
          
      </header>
      </div>
          
        );
      }
    }

export default App;
