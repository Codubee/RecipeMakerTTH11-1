import './App.css';
import LandingPage from './components/LandingPage/LandingPage'
import MyNavbar from './components/MyNavbar/MyNavbar';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <>
      <MyNavbar/>
      <Router>
          <Switch>
            <Route path="/" component={LandingPage} />
            <Route path="/test" component={Recipes} />
            <Route path="https://github.com/Codubee/RecipeMakerTTH11-1">
              <GitHub />
            </Route>
          </Switch>
      </Router>
    </>
  );
}

function Home()
{
  return <h2>Home</h2>
}

function Recipes()
{
  return <h2>Find a recipe</h2>
}

function GitHub()
{
  return <h2>GitHub</h2>
}

export default App;
