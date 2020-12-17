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

//Calling the Nutritional Analysis API

app.post('/nutritionalinfo',(req,res)=>{
    console.log(req.body)

    const body = {
        title: req.body.title,
        ingr: req.body.ingr,
        yield: req.body.yield

    }

    // API ID AND KEY
    const NA_ID = process.env.NUTRITIONAL_APP_ID
    const NA_KEY = process.env.NUTRITIONAL_APP_KEY

    axios.post('https://api.edamam.com/api/nutrition-details?app_id=' + NA_ID + '&app_key=' + NA_KEY, body)
    .then((response)=>{
        /* handle success and sends back recipe object containing number of servings (yield), 
         *total calories for the recipe (calories), nutrient content by nutrient type (totalNutrients, totalDaily), 
         *diet and health classification (dietLabels, healthLabels)
         */
        console.log(response.data);
        res.status(200).json(response.data)
    })
    .catch((error)=>{
        //error message recieved from API call
        console.log(error);
        res.status(400).json({error:"An error occurred"});
    })

})


module.exports = app;