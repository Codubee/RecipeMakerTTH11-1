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
    
    const NA_ID = process.env.NUTRITIONAL_APP_ID
    const NA_KEY = process.env.NUTRITIONAL_APP_KEY

    axios.post('https://api.edamam.com/api/nutrition-details?app_id=' + NA_ID + '&app_key=' + NA_KEY)
    .then((response)=>{
        console.log(response.data);
        res.status(200).json(response.data)
    })
    .catch((error)=>{
        console.log(error);
        res.status(400).json({error:"An error occurred"});
    })

})


module.exports = app;