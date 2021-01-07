/*
This component will call the recipe API to get the recipe based on the ingredients from the user.
When calling the backend api the route will be ‘/recipe’

An example axios api call would be 
axios.get('/recipe?chicken rice beans')

It will get the ingredients from the user input component.

After getting the ingredients calling the backend recipe api and receiving the data, 
    the data will then be displayed to the user.
*/
import React from 'react';
import axios from 'axios';
import { Card,CardBody,CardTitle,CardText } from 'reactstrap';
import './Recipe.css';

// TODO: FIX HOW RECIPES WONT SHOW
class Recipe extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            //ingredients: props.ingredients,
            recipes: [] 
        };
    }
    componentDidMount() {
        axios.get('/recipe?userIngredients=chicken rice beans').then((response) => {
            console.log(response.data);
            this.setState({
                recipes: response.data
            });
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    render(){
        return(
            <div class = "container">
                {this.state.recipes.map((dish, index) => (
                    <div key={index}>
                    <Card>
                      <CardBody>
                        <CardTitle tag="h5">{dish.recipe.label}</CardTitle>
                      </CardBody>
                    </Card>
                    <br></br>
                  </div>
                  
                ))}
            </div>
        )
    }
}

export default Recipe;