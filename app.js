const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.send("Hello World!");
    res.end();
 });
 
 app.post('/h', (req, res)=>{
    res.send("You just called the post method at '/hello'!\n");
    res.end();
 });



module.exports = app;