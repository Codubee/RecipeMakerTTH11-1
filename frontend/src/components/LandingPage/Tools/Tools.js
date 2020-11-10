import React, { useState } from 'react';
import reactLogo from './assets/react-logo.png';
import nodejsLogo from './assets/nodejs-logo.png';
import herokuLogo from './assets/heroku-logo.png';
import youtubeLogo from './assets/youtube-logo.png';
import yelpLogo from './assets/yelp-logo.png';
import './Tools.css';
import {
    Jumbotron, Container, Tooltip,
  } from 'reactstrap';

  const Tools = (props) => {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 id="tools-header" className="display-4">Built Using</h1>
            <hr className="my-4" width="250" />
            <div id="main-logos">
              <img id="nodejs-logo" src={nodejsLogo} alt="Nodejs logo" height="%100" width="225"/> 
              <img id="react-logo" src={reactLogo} alt="React logo" height="100%" width="250"/>
              <img id="heroku-logo" src={herokuLogo} alt="Heroku logo" height="%100" width="350"/>
            </div>
            <div id="api-logos">
              {/*<img src={} alt="Image analyzer logo"/> */}
              <img id="youtube-logo" src={youtubeLogo} alt="YouTube logo" height="100%" width="75"/>
              {/*<img src={} alt="Recipe maker logo"/> */}
              <img id="yelp-logo" src={yelpLogo} alt="Yelp logo" height="100%" width="150"/>
              {/*<img src={} alt="Food nutrition logo"/> */}
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  };
  


export default Tools;