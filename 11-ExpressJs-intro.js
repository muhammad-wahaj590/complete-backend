// ----------- Express.JS Intro ------------- 

const express = require('express')
const app = express()  //yeh app se code executable bany ga 


// is app k code me hamne req or resp ko dekha hai 
// localhost:3000?name=wahaj kia matlab query ki hai client side se matlab request ki hai 
// or yahan se response hamne dia hai 
app.get('', (req, res) => {
    console.log("request sent by browser", req.query.name)
    res.send("Welcome to home page " + req.query.name)
})

app.get('/aboutus', (req, res) => {
    res.send("About-Us page")
})

app.get('/contactus', (req, res) => {
    res.send("Contact-Us page")
})

app.listen(3000)




// get method route provide karta hai page k or is se ham page bhi bana sakty hain 


// Express.js ek minimal aur fast framework hai jo Node.js ke upar kaam karta hai.

// Kya hota hai?
// Express.js ek backend web framework hai jo HTTP requests handle karne ke liye use hota hai.

// Node.js me iska use?
// Routing: Different URLs ke liye request/response handle karta hai.
// Middleware: Code ko easily manage aur modify karne ke liye layers provide karta hai.
// API Development: RESTful APIs banana simple banata hai.
// Simplifies Server Creation: Node.js ka "http" module use karne ki zarurat nahi hoti, Express simple aur readable syntax deta hai.
