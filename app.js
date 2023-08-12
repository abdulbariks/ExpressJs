const express = require("express");
const userRouter = require("./routes/user.route");
const app = express();


app.use('/user', userRouter);

 //Sent HTML file
 app.use('/home', (req, res)=>{
    res.statusCode = 202;
    res.sendFile(__dirname+"/views/index.html");
    res.end();
 });
  app.use('/about', (req, res)=>{
    res.statusCode = 202;
    res.sendFile(__dirname+"/views/about.html");
    // res.end();
 });


 app.use((req, res)=>{
    res.send("404! Page not Found!");
    res.end();
 });

module.exports = app;