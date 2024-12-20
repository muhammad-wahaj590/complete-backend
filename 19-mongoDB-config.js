const {MongoClient} = require('mongodb')
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)
const database = 'e-comm'

// (1)
async function dbConnect(){
    const result = await client.connect()
    const db = result.db(database)
    return db.collection('products')
}

module.exports = dbConnect    // (2)






// (1) ab yeh code jo hai is me sirf database ki connection hai or yeh code promise return kar raha 
// (2) yahan isko call nhi karna function ko 
// jab bhi database se connect karna hota to is tarah se alag se file bana kar rakh dety connection ki or import karty rehty 