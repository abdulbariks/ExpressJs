const express = require("express");
const userRouter = require("./routes/user.route");
const app = express();


//start recive data from html file using body parser 
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/register',(req, res)=>{
   res.sendFile(__dirname + "/index.html");
});

app.post('/register', (req, res)=>{
   const fullName = req.body.fullName;
   const age = req.body.age;
   res.send(`<h1>Name is : ${fullName}, Age is ${age}</h1>`);
});

//end recive data from html file using body parser 

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