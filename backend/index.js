const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
app.use(express.json())

const port = 8080;

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.listen(port,()=>{
    console.log('API is up and running');
})

// call yelp api
app.get('/business/:recipe', (req, res)=> {
    const headers = { headers: {'Authorization': 'Bearer '+process.env.YELP_API_KEY}}
    let recipe = req.params.recipe;


    axios.get('https://api.yelp.com/v3/businesses/search?location=dallas&categories=restaurants&term='+recipe, headers)
    .then((response)=>{
        console.log(response);
        res.status(200).json(response.data);
    })
    .catch((error)=>{
        console.log(error);
        res.status(400).json({error:'An error has occurred'});
    })
})


module.exports = app;