const express = require('express');
const app = express();
const port = 3030;
const path = require('path');

app.use(express.static('public'));

app.listen(port, () => {
  console.log('Servidor corriendo en puerto 3030');
});

app.get('/',(req, res)=>{
  res.sendFile(path.join(__dirname,'/views/home.html'))
});

app.get('/benners-lee',(req, res)=>{
    res.sendFile(path.join(__dirname, '/views/benners-lee.html'))
});

app.get('/babbage',(req, res)=>{
  res.sendFile(path.join(__dirname, '/views/babbage.html'))
});

app.get('/lovelace',(req, res)=>{
  res.sendFile(path.join(__dirname, '/views/lovelace.html'))
});

app.get('/hamilton',(req, res)=>{
  res.sendFile(path.join(__dirname, '/views/hamilton.html'))
});
app.get('/hopper',(req, res)=>{
  res.sendFile(path.join(__dirname, '/views/hopper.html'))
});

app.get('/clarke',(req, res)=>{
  res.sendFile(path.join(__dirname, '/views/clarke.html'))
});

app.get('/turing',(req, res)=>{
  res.sendFile(path.join(__dirname, '/views/turing.html'))
});