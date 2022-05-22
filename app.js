//Usando objeto express
const express = require('express');
//App de Express
const app = express();
//Puerto en que vamos a ver nuestra aoo: localhost:3000
const port = 3000;

//path inicial, responderá a la url localhost:3000
app.get('/', (req, res) => {
    res.send('Hello world');
})

//Respondiendo texto
//localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchx');
})

//Regresando un objeto
//localhost:300/explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Hello"}
    res.send(explorer);
})

//Query Params: Recibir parámetros por la url
//http://localhost:3000/explorers/carlo
//req.params = {"explorerName": "Carlo"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

//Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})