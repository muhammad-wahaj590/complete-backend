const express = require('express')
require('./config')
const Products = require('./products')
const app = express()
app.use(express.json())

app.get('/search/:key', async (req, res) => {
    // console.log(req.params.key)    data console pe check kar sakty 
    let data = await Products.find({
        "$or": [
            {"name" : {$regex : req.params.key}},
            {"brand" : {$regex: req.params.key}},
            {"category" : {$regex: req.params.key}}
        ]   
    })
    
    console.log(data);
    res.send(data)
})

app.listen(3000)


// ab search yani find k liye ham use karen ge regex , or regex use karty hain is tarah se 
// $or means yeh multiple fields me bhi ho sakta hai 


// Agar price ka search karna zaruri hai, to numeric search ke liye alag logic lagana hoga (regex numeric pe kaam nahi karta).

// agar sirf ek filed search karni ho to array me sirf ek key pass karden ge regex ki 