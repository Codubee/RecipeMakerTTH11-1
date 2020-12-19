const express = require('express');
const app = express();
const axios = require('axios');
const { query } = require('express');
require('dotenv').config();
app.use(express.json())

const port = 8080;

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(port,()=>{
    console.log('API is up and running');
})

// call yelp api such as localhost:8080/business/cheesecake/75227
app.get('/business/:recipe/:zipcode', (req, res)=> {
    // headers must have this format to call api
    const headers = { headers: {'Authorization': 'Bearer '+process.env.YELP_API_KEY}}
    let recipe = req.params.recipe;
    let zipcode = req.params.zipcode;

    // '&categories=food' was added to reduce the non-food places that would appear
    axios.get('https://api.yelp.com/v3/businesses/search?term=' + recipe + '&location=' + zipcode + '&categories=food', headers)
    .then((response)=>{
        console.log(response);
        res.status(200).json(response.data);
    })
    .catch((error)=>{
        console.log(error);
        res.status(400).json({error:'An error has occurred'});
    })
})

/**
 *  Send a post request to the API that will get YouTube links for recipe videos.
 *  To test, use http://localhost:8080/youtubeRecipe as the request URL on Postman
 *      - The data to be sent should be input in the body tab as raw JSON data.
 *      - i.e. {
 *                  "recipe": "steak"     
 *             }
 */
app.post('/youtubeRecipe',(req,res)=>{
    console.log(req.body);

    const body = {
        recipe: req.body.recipe
    }

    axios.post('https://codubee-api.herokuapp.com/youtubeLinks',body)
    .then(function(response) { 
        console.log(response.data);
        res.status(200).json(response.data);
    })
    .catch(function(error) {
        console.log(error);
        res.status(400).json({error:"An error has occured"});
    })
})

// Call the Recipe Maker API
// :userIngredients is the string of ingredients to search the API for
// Example: localhost:8080/recipe?chicken rice beans/ searches for recipes containing chicken, rice, and beans
app.get( '/recipe?:userIngredients/', (req, res)=>{


    //API Verification
    const API_KEY = process.env.RECIPEMAKER_API_KEY;
    const APP_ID = process.env.RECIPEMAKER_APP_ID;
    
    //API Call
    axios.get('https://api.edamam.com/search?q=' + req.params.userIngredients + '&app_key=' + API_KEY + '&app_id=' + APP_ID)
    .then( (response)=>{
        //Print recipes to console
        console.log(response.data);
        res.status(200).json(response.data.hits);

    })

    //Error handling
    .catch( (error)=>{
        console.log(error);
        res.status(400).json({error:'An error has occurred'});

    })

})


module.exports = app;