import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
import MyNavbar from './components/MyNavbar/MyNavbar';
import React from 'react';
import Recipes from './components/Recipes/Recipes'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <>
      <MyNavbar />
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/findRecipe" component={Recipes} />
        </Switch>
      </Router>
    </>
  );
}


export default App;
