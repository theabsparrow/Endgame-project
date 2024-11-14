const { MongoClient, ServerApiVersion } = require('mongodb')
require('dotenv').config()

const uri = `mongodb://localhost:27017`;

const connectDB = async () => {
    try {
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });

        await client.connect();
        const db = client.db('GoWheels');
        console.log('MongoDB connected'); 
        return db;
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

module.exports = connectDB;