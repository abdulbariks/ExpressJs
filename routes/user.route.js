const express = require('express');
const router = express.Router();


 router.get('/login', (req, res)=>{
    res.send("This is Login Page");
    res.end();
 });
 router.get('/resister', (req, res)=>{
    res.send("This is Resister Page");
    res.end();
 });
 router.get('/about', (req, res)=>{
    res.send("This is About Page");
    res.end();
 });
 router.get('/contact', (req, res)=>{
    res.send("This is Contact Page");
    res.end();
 });




module.exports = router;