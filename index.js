const express = require('express')
const app = express()
const port = 3000

//start recive data from html file using body parser 
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get('/fahrenheit',(req, res)=>{
   res.sendFile(__dirname + "/fahrenheit.html");
});

app.post('/fahrenheit', (req, res)=>{
   const celsius = req.body.celsius;
   const fahrenheit = celsius*9/5+32;
   res.send(`${celsius} Celsius =  ${fahrenheit} Fehrenheit`);
});


app.get('/celsius',(req, res)=>{
    res.sendFile(__dirname + "/celsius.html");
 });
 
 app.post('/celsius', (req, res)=>{
    const fahrenheit = req.body.fahrenheit;
    const celsius = 5/9*(fahrenheit-32);
    
    res.send(`${fahrenheit} Fehrenheit =  ${celsius} Celsisus`);
 });
app.listen(port, () => {
  console.log(`Server is Rumming:http://localhost:${port}`);
})