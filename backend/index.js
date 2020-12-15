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

// call yelp api such as localhost:8080/business/cheesecake/75227
app.get('/business/:recipe/:zipcode', (req, res)=> {
    // headers must have this format to call api
    const headers = { headers: {'Authorization': 'Bearer '+process.env.YELP_API_KEY}}
    let recipe = req.params.recipe;
    let zipcode = req.params.zipcode;

    // '&categories=restaurants' was added to reduce the non-food places that would appear
    axios.get('https://api.yelp.com/v3/businesses/search?term=' + recipe + '&location=' + zipcode + '&categories=restaurants', headers)
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