/* 
    This component will have a title and a description of the features 
    Features include: 
        - getting recipes with ingredients you have
        - seeing nutritional information
        - and getting videos to go along with your recipe
*/

import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';


const FeaturesCard = (props) => {
    return (
        <div>
            <Card body inverse style ={{ backgroundColor: '#333', borderColor: '#333'}}>
            <CardTitle><div>{props.title}</div></CardTitle>
            <CardText><div>{props.description}</div></CardText>
            </Card>
        </div>
    );
};


function Features() {
    return(
        <>
        <div><h1>What features does this project have?</h1></div>
        <FeaturesCard
            title = "Get Recipes!"
            description = "Get delicious recipes based on ingredients you have! Just snap a picture or manually insert ingredients."
        />
        <FeaturesCard
            title = "Get Nutritional Information"
            description = "Worried about the amount of fats or sugar in a recipe? Get the nutritional information for all the created recipes to better make your choice. "
        />
        <FeaturesCard
            title = "Get Videos!"
            description = "Each recipe will have a link to a YouTube video so you can follow along."
        />
        </>
    );
}


export default Features;