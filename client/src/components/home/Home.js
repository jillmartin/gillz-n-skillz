// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import React, { Component } from 'react';
import Header from '../header/Header';
import FishMap from '../map/Map';
import FapDetails from '../fapDetails/FapDetails';
import FishPhotos from '../fishPhotos/FishPhotos';
// import './Home.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clickedFapLat: "",
      clickedFapLong: "",
      clickedFapSiteId: "",
      clickedFapWebPage: ""
    }
    this.latLongCallback = this.latLongCallback.bind(this);
  }

  latLongCallback(clickedFap) {
    this.setState({
      clickedFapLat: clickedFap.clickedFapLat,
      clickedFapLong: clickedFap.clickedFapLong,
      clickedFapSiteId: clickedFap.clickedFapSiteId,
      clickedFapWebPage: clickedFap.clickedFapWebPage
    })
  }

  render() {
    return (
    <div className="bgimage img-responsive">
      <div className="container-fluid">
        <div className="row">
          <Header/>
        </div>
        <div className="row">
          <div className="map">
            <FishMap callbackFromApp={this.latLongCallback} />
          </div>
        </div>
        <div className="row">
          <FishPhotos fishPhotos={this.state}/>
        </div>
        <div className="row">
          <FapDetails fapDetails={this.state} />
        </div>  
        
        <div className="row">
          <p className="caps">Copyright Gillz-n-Skillz 2017</p>
        </div>
      </div>  
    </div>
    );
  }
}

export default App;
