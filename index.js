const express = require('express')
const app = express();
const cors =require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000


app.use(cors());
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ukbkis1.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run(){

    try{
        await client.connect()
        console.log('databasea connected bro')

    }
    finally{

    }
}

run().catch(console.dir)


app.get('/', (req, res) => {
  res.send('Hello from it iscoll !')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})