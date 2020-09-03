const {MongoClient} = require('mongodb');




const uri = "mongodb+srv://process.env.DB_USER:process.env.DB_PASS@reticent-cluster.oj7zz.mongodb.net/test?w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

