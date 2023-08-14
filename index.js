const express = require('express')
const app = express()
const port = 3000

//start recive data from html file using body parser 
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/triangle',(req, res)=>{
   res.sendFile(__dirname + "/triangle.html");
});

app.post('/triangle', (req, res)=>{
   const base = req.body.base;
   const height = req.body.height;
   const triangle = (base*height)/2;
   res.send(`The Area of the Triangle is ${triangle}`);
});


app.get('/circle',(req, res)=>{
    res.sendFile(__dirname + "/circle.html");
 });
 
 app.post('/circle', (req, res)=>{
    const radius = req.body.radius;
    // const pi = 3.1416;
    const pi = Math.PI;
    const circle  = (pi*radius*radius);
    
    res.send(`The Area of the circle  is ${circle}`);
 });
app.listen(port, () => {
  console.log(`Server is Rumming:http://localhost:${port}`);
})