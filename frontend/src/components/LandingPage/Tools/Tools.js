import React, { useState } from 'react';
import reactLogo from './assets/react-logo.png';
import nodejsLogo from './assets/nodejs-logo.png';
import herokuLogo from './assets/heroku-logo.png';
import youtubeLogo from './assets/youtube-logo.png';
import yelpLogo from './assets/yelp-logo.png';
import './Tools.css';
import {
    Jumbotron, Container
  } from 'reactstrap';

  function Tools() {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 id="tools-title" className="display-4">Built Using</h1>
            <hr className="my-4" width="250" />
            <div class="row" id="main-logos">
              <img class="col-sm-2" id="nodejs-logo" src={nodejsLogo} alt="Nodejs logo"/> 
              <img class="col-sm-2" id="react-logo" src={reactLogo} alt="React logo"/>
              <img class="col-sm-3" id="heroku-logo" src={herokuLogo} alt="Heroku logo"/>
            </div>
            <div class="text-center">
              <p className="lead">with APIs from</p>
            </div>
            <div class="row" id="api-logos">
              {/*<img src={} alt="Image analyzer logo"/> */}
              <img class="col-sm-1" src={youtubeLogo} alt="YouTube logo"/>
              {/*<img src={} alt="Recipe maker logo"/> */}
              <img class="col-sm-1" src={yelpLogo} alt="Yelp logo"/>
              {/*<img src={} alt="Food nutrition logo"/> */}
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  };
  


export default Tools;