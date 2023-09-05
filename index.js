const express = require('express');
const db = require('./config/mongoose')
const port = 8000;

const app = express();

app.use(express.urlencoded());

app.use('/',require('./routes'))

app.listen(port,(err)=>{
    if(err){
        console.log(`Error ${err}`);
        return;
    }
    console.log(`The server is up on port: ${port}`);
})
