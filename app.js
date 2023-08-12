const express = require("express");
const userRouter = require("./routes/user.route");
const app = express();


app.use('/user', userRouter);


app.get('/', (req, res)=>{
    res.send("This is Home Page");
    res.end();
 });

 app.use((req, res)=>{
    res.send("404! Page not Found!");
    res.end();
 });

module.exports = app;