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

// Recipe Maker API
app.get( '/recipe', (req, res)=>{

    //Add key
    
    axios.get('https://api.edamam.com/search?q=chicken')
    .then( (response)=>{
        console.log(response.data);
        res.status(200);

    })

    .catch( (error)=>{
        console.log(error);
        res.status(400).json({error:'An error has occurred'});


    })

})

module.exports = app;