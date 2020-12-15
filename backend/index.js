const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
app.use(express.json())

const port = 8080;

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.listen(port,()=>{
    console.log('API is up and running')
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

module.exports = app;