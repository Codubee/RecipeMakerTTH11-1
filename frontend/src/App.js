import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
import MyNavbar from './components/MyNavbar/MyNavbar';
import React from 'react';
import { Jumbotron } from 'reactstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import YouTubeVideo from './components/YouTubeVideo/YouTubeVideo';

function App() {
  return (
    <>
      <MyNavbar/>
      <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/findRecipe" component={Recipes} />
          </Switch>
      </Router>
    </>
  );
}

function Recipes()
{
  //return <h2>Find a recipe</h2>
  return (
    <div >
            <Jumbotron className="jumbotron-style">
                <h1 className="display-3" >Find a recipe</h1>
            </Jumbotron>
            <YouTubeVideo recipe='aglio e olio'/>
    </div>
  );
}


export default App;
