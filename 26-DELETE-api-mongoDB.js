const express = require('express')
const dbConnect = require('./19-mongoDB-config')
const mongoDB = require('mongodb')  //(2)
const app = express()

app.delete('/:id', async (req, res) => {
    res.send(req.params.id)
    const data = await dbConnect()
    const result = await data.deleteOne({_id: new mongoDB.ObjectId(req.params.id) })  //(1)
    console.log(result);
    console.log("done");      //id de ga 
}) 

app.listen(3000)


// (1) data sirf simpel way me delete nhi hota usy instance banana hota hai id de kar to yeh tareeqa hai 
// (2) yahan se mongodb ka instance require kia hai 