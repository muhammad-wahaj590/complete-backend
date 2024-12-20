// ---------- Get Api With MongoDB -----------

const express = require('express')
const dbConnect = require('./19-mongoDB-config')
const app = express()

app.get('/', async (req, res) => {
    let data =await dbConnect()
    data = await data.find().toArray()
    // console.log(data);
    res.send(data)
})



app.listen(3000)


// get method ko kab use kia jata hai ?
// jab hamen api ko read karna hota hai to ham GET method ko use karty hain 

// get or post me ham same url de sakty hain koi issue nhi hota 