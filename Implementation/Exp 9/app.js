const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');
const bodyParser = require('body-parser'); 

const app = express();
const uri = 'mongodb://localhost:27017';
const PORT = 3000;

app.use(bodyParser.json());

// Connect to MongoDB and return the client
async function connectToMongoDB() {
    try {
        const client = new MongoClient(uri);
        await client.connect();
        console.log('Connected to MongoDB');
        return client;
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

// Insert a new record
app.post('/items', async (req, res) => {
    try {
        const client = await connectToMongoDB();
        const db = client.db('User_DB');
        const collection = db.collection('students');
        const result = await collection.insertOne(req.body);
        res.status(201).send(result.ops[0]);
        client.close(); 
    } catch (error) {
        res.status(500).send(error);
    }
});

// Retrieve all records
app.get('/items', async (req, res) => {
    try {
        const client = await connectToMongoDB();
        const db = client.db('User_DB');
        const collection = db.collection('students');
        const documents = await collection.find({}).toArray();
        res.send(documents);
        client.close(); 
    } catch (error) {
        res.status(500).send(error);
    }
});

// Update record
app.put('/items/:id', async (req, res) => {
    try {
        const client = await connectToMongoDB();
        const db = client.db('User_DB');
        const collection = db.collection('students');
        const filter = { username: req.body.username };
        const update = { $set: {bool : false} }; 
        const result = await collection.updateOne(filter, update);
        res.send(result.modifiedCount ? 'Record updated successfully' : 'Record not found');
        client.close(); 
    } catch (error) {
        res.status(500).send(error);
    }
});

// Delete record
app.delete('/items/:id', async (req, res) => {
    try {
        const client = await connectToMongoDB();
        const db = client.db('User_DB');
        const collection = db.collection('students');
        const filter = { username: req.body.username };
        const result = await collection.deleteOne(filter);
        res.send(result.deletedCount ? 'Record deleted successfully' : 'Record not found');
        client.close(); 
    } catch (error) {
        res.status(500).send(error);
    }
});

// Start server after MongoDB connection
async function startServer() {
    await connectToMongoDB(); // Connect to MongoDB

    app.listen(PORT, () => {
        console.log(`Server started at port : ${PORT}`);
    });
}

startServer();
