const express = require('express');
const app = express();
const axios = require('axios');
const { query } = require('express');
require('dotenv').config();
app.use(express.json())

const port = 8080;

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.listen(port,()=>{
    console.log('API is up and running')
})


// Call Recipe Maker API
app.get( '/recipe/:userIngredients/', (req, res)=>{


    //API Verification
    const API_Key = process.env.RECIPEMAKER_API_KEY;
    const App_ID = process.env.RECIPEMAKER_APP_ID;
    
    
    axios.get('https://api.edamam.com/search?q=' + req.params.userIngredients + '&app_key=' + API_Key + '&app_id=' + App_ID)
    .then( (response)=>{
        //Return only the recipes
        console.log(response.data.hits);
        res.status(200);

    })

    .catch( (error)=>{
        console.log(error);
        res.status(400).json({error:'An error has occurred'});


    })

})




module.exports = app;