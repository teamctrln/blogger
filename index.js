const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database.js');
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err)=>{
    if(err){
        console.log('Could not connect To Database');
    }
    else{
        console.log('Connected to databse:'+config.db);
    }
});

app.use(express.static(__dirname+'/client/dist'));

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname+'/client/dist/index.html'));
});

app.listen(8080, ()=>{
    console.log('Listening On Port 8080');
});