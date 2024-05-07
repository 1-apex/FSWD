const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).send("Hello world!!");
})

app.post('/register', (req, res) => {
    res.status(200).send("User registered using POST method..");
})

app.put('/user', (req, res)=>{
    res.status(200).send("Got a PUT request at /user");
})

app.delete('/user', (req, res)=>{
    res.status(200).send("Got a Delete request at /user");
})

const PORT = 5000;
app.listen(PORT, (req, res)=>{
    console.log(`server is running at port : ${PORT}`);
})