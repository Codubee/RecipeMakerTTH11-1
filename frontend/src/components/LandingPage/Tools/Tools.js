import React, { useState } from 'react';
import './Tools.css';
import {
    Jumbotron, Container
  } from 'reactstrap';

  function Tools() {
    return (
      <div>
        <Jumbotron fluid className='tools-jumbotron'>
          <Container fluid>
            <h1 id='tools-title' className='display-4'>Built Using</h1>
            <hr className='my-4' width='250' />
            <div className='row' id='main-logos'>
              <img className='col-sm-2' id='nodejs-logo' src='/nodejs-logo.png' alt= 'Node.js logo'/> 
              <img className='col-sm-2' id='react-logo' src='/react-logo.png' alt='React logo'/>
              <img className='col-sm-3' id='heroku-logo' src='/heroku-logo.png' alt='Heroku logo'/>
            </div>
            <div className='text-center'>
              <p className='lead'>with APIs from</p>
            </div>
            <div className='row' id='api-logos'>
              {/*<img src={} alt='Image analyzer logo'/> */}
              <img className='col-sm-1' id='youtube-logo' src='/youtube-logo.png' alt='YouTube logo'/>
              {/*<img src={} alt='Recipe maker logo'/> */}
              <img className='col-sm-1' id='yelp-logo' src='/yelp-logo.png' alt='Yelp logo'/>
              {/*<img src={} alt='Food nutrition logo'/> */}
            </div>
          </Container>
        </Jumbotron>
      </div>
    );
  };
  


export default Tools;