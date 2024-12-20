// ------------ post api with mongodb ----------- 

// post API method kia hota hai ?
// jab bhi hamen databse me koi new data save karwana hota hai API k through to ham POST api ka use karty hain 

// question: postman se data ko send kar k nodejs me data ko get kese kar sakty hain ?
// answer: sabs e pehlay postman k post waly pe click kar k neechy ek row hogi us me body pe click kar k neechay ek or row aye gi jis me raw likha hoga usko click kar k or json me convert kar k side se ham json data likh sakty hain postman me , most of the time json me hi send kia jata data postman se 

// (1) ab postman se matlab request se yahan data get karna hota us k liye ham likhty hain app.use(express.json()) yani hamne data ko convert kardia json me taky woh avilable ho jaye 

// (2) ab is data ko mongoDB me kese save karwayen ge 
// jese pehlay insert kia tha usi function ko yahan wapis bana kar insert karwaden ge 

const express = require('express')
const dbConnect = require('./19-mongoDB-config')
const app = express()

app.use(express.json());  //(1)

app.post('', async (req, res) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body);

    res.send(result);
    console.log("Request Body:", req.body);
    console.log("Insert Result:", result);

    if (!result.insertCount > 0) {
        console.log("Failed to insert data");
    } 
});

app.listen(3000)


// (3) req.body : jo bhi data postman ya react ya angular se send karty hain  

// request se body get karne k liye kia karoge ?
// middleware use kia or us me app.use(express.json())  k bad req.body parse karna hita 
