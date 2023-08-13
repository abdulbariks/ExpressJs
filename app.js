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

 //query parameter
app.get('/query', (req, res)=>{
      // const id = req.query.id;
      // const name = req.query.name;
      const {id, name} = req.query;
      res.send(`id = ${id} name= ${name}`);

})

//route parameter
app.get('/id/:id/name/:name', (req, res)=>{
   //  const id = req.params.id;
   //  const name = req.params.name;
   const {id, name} = req.params;
   res.send(`id = ${id} name= ${name}`);

})

//Header Parameter
app.get('/header', (req, res)=>{
    const id = req.header("id")
    const name = req.header("name")
   res.send(`id = ${id} name= ${name}`);

})


 app.use((req, res)=>{
    res.send("404! Page not Found!");
    res.end();
 });

module.exports = app;