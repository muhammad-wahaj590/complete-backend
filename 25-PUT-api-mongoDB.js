// put api mean jahan pe apko api data me kuch update karna hota usy ham kehty hain put api 


const express = require('express')
const dbConnect = require('./19-mongoDB-config')
const app = express()
app.use(express.json())

// normal upodate postman k through 
app.put('', async (req, res) => {
    // console.log(req.body);
    const data = await dbConnect()
    const result = await data.updateOne(
        {name: req.body.name},
        {$set: req.body }
    )
    console.log(result);
    res.send({update: "result"})
})


app.listen(3000)








// kia post methid k hrough data ko update nhi karwa sakty ?
// yes,  but recommended or standard tareeqa PUT wala hai 