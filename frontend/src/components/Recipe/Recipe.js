/*
This component will call the recipe API to get the recipe based on the ingredients from the user.
When calling the backend api the route will be ‘/recipe’
 
An example axios api call would be 
axios.get('/recipe?userIngredients=chicken rice beans')
 
It will get the ingredients from the user input component.
 
After getting the ingredients calling the backend recipe api and receiving the data, 
    the data will then be displayed to the user.
*/
import React from 'react';
import axios from 'axios';
import { Card,CardBody,CardTitle, CardImg, CardText} from 'reactstrap';
import './Recipe.css';
 
class Recipe extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            // commented out for now until user input can be gathered
            //ingredients: [],
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
    
    /*
        recipes is an array so map the dish with its index to loop through all possible dishes
        dish.recipe.label gets the name
        dish.recipe.ingredients gets the ingredients list
        dish.recipe.image gets the recipe image
    */
    render(){
        console.log("inside func");
        return(
            <div>
                {this.state.recipes.map((dish, index) => (
                    <div key={index}>
                    <Card class="recipe-card">
                    <CardBody>
                        <CardTitle tag="h5">{dish.recipe.label}</CardTitle>
                        <a href={dish.recipe.url} target="_blank">
                            <CardImg 
                                top width="100%" 
                                src={dish.recipe.image} 
                                alt={"picture of " + dish.recipe.label}
                                id="pictures"
                            />
                        </a>
                        {/* <CardText>
                            {dish.recipe.ingredients.map((ingredient, index) => (
                                    <p key={index}>
                                        {ingredient}
                                    </p>
                            ))}
                        </CardText> */}
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
