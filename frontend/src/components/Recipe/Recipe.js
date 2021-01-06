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
import './Recipe.css';

// TODO: FIX INGREDIENTS NOT DEFINED ERROR
class Recipe extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            ingredients: props.ingredients,
            recipes: "" 
        };
    }
    componentDidMount() {
        axios.get('/recipe?userIngredients=' + ingredients).then((response) => {
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
            <div>
                {this.state.recipes}
            </div>
        )
    }
}

export default Recipe;