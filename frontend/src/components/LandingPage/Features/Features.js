import React from 'react';
import FeaturesCard from './FeaturesCard';
import { CardDeck, Jumbotron } from 'reactstrap';
import './Features.css'

const camera = '/coolcamera.jpeg';
const nutritional = '/nutritional.jpg';
const recipes = '/goodrecipe.jpeg';
const videos = '/videos.jpg';


// function displayed on screen
function Features(){
    return(
       <>
        <Jumbotron>
            <h1 id="features-header" className="display-4">Features</h1>
        </Jumbotron>
        <CardDeck>
            <FeaturesCard
                img = {camera} 
                alttext = "picture of ingredients"
                title = "Snap a Picture or Manually Insert"
                sub = "Entry made easy"
                text = "We let you choose how you'd like to enter your ingredients. Center your camera on your ingredients or manually insert them."
            />
            <FeaturesCard
                img = {recipes}
                alttext = "recipe on a phone"
                title = "Recipes Based on Your Ingredients"
                sub = "Reduce searching"
                text = "It is difficult finding recipes with the ingredients you have, especially if they are limited. We reduce your searching by displaying possible recipes with the ingredients given."
            />
            <FeaturesCard
                img = {nutritional}
                alttext = "different food groups"
                title = "Get Nutritional Information"
                sub = "Upfront clarity"
                text = "Not all recipes are made equal and neither is nutrition. Along with the recipe, we provide its nutritional information. We want you to be as informed as possible about your meal decision."
            />
            <FeaturesCard
                img = {videos}
                alttext = "youtube on a phone"
                title = "Watch the Videos"
                sub = "Visually follow along"
                text = "Videos are great when creating dishes, so we make sure to provde a video to eliminate the time you would spend searching for one."
            />
        </CardDeck>
        </> 
    );
}


export default Features;
