// is post api ko ham mongoose k sath banayen ge or is me schema or model bhi use karen ge 

const express = require('express')
require('./config')    //import config file 
const Products = require('./products')   //import products model
const app = express()
app.use(express.json())                 //(1)


// POST 
// app.post('/create', async (req, res) => {
//     const data = new Products(req.body)   //(2)
//     const result = await data.save()     //(3)
//     console.log(result);              //(1)
//     res.send("done")
// })


//GET
// app.get('/list', async(req, res) =>{
//     const data = await Products.find()
//     res.send(data)

// })


// DELETE   (delete me masla araha yeh akar dekhna hai)
app.delete('/delete/:_id', async (req, res) => {
    console.log(req.params) 
    const data = await Products.deleteOne(req.params)
    console.log(data)
    res.send(data)
})


// PUT
app.put('/update/:_id', async (req, res) => {
    const data = await Products.updateOne(
        req.params,
        {$set: req.body}
    )
    res.send(data)
    console.log(data);
})

app.listen(4000)


// (1) data string me ata hai postman se to usy json me convert karna hota hai to woh ham ese karty hain app.use(express.json())
// (2) products me hamne new keyword use karna hota hai or usi k andar req.query bhi pass kardena hota hai
// (3) data ko save karwaty hoye yeh async function banana zaruri hai kyon k yeh promise return karta hai data.save() 

// is tarah se ham databse me model or schemas bana kar entry karwa sakty hain ab  agar me is me khud se koi or data dalna chahun jo schmea me defien nhi hai to data enter nhi hoga 


// put or delete query param me bhejo ge ya direct delete kardo ge ?
// query param me bhejen ge 