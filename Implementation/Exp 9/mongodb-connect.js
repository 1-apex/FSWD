const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const uri = 'mongodb://localhost:27017';
const PORT = 3000;

// connect to database
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

// insert document
async function insertDocument(client) {
    const db = client.db('User_DB');
    const collection = db.collection('students');
    const document = { name: 'Jacob', age: 35, city: 'New York' };
    const result = await collection.insertOne(document);
    console.log('Inserted document:', result);
}

// read documents 
async function readDocument(client) {
    const db = client.db('User_DB');
    const collection = db.collection('students');
    const documents = await collection.find({}).toArray();
    console.log('Retrieved documents:', documents);
}

// update document
async function updateDocument(client) {
    const db = client.db('User_DB');
    const collection = db.collection('students');
    const filter = {name : 'John'};
    const update = { $set: { age: 60 } };
    const result = await collection.updateOne(filter, update);
    console.log("Updated document: ", result); 
}

// delete document
async function deleteDocument(client) {
    const db = client.db('User_DB');
    const collection = db.collection('students');
    const filter = {name : 'John'};
    const result = await collection.deleteOne(filter);
    console.log("Deleted document: ", result);
}

// Start server after MongoDB connection
async function startServer() {
    const client = await connectToMongoDB();

    // await insertDocument(client);
    // await readDocument(client);
    // await updateDocument(client);
    // await deleteDocument(client);

    app.listen(PORT, () => {
        console.log(`Server started at port : ${PORT}`);
    });
}

startServer();
