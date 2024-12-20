// abhi tak hamne 17-route-level or 17-seperate-middleware pe kaam kia tha lkn agar hamen group route level middleware banana ho to us k liye yeh good practice nhi k main har app.get me middleware function ko as a aram use karun us k liye ham ese karen ge yeh wala kaam 
// woh tareeqa ek do pages k liye theek hai lkn multiples pages pe sahi nhi hai 


const express = require('express')
const route = express.Router()   //importing this 
const reqFilter = require('./17-seperate-middleware-file')  //importuing seperate file middleware
const app = express()

route.use(reqFilter)        //(1)

app.get('', (req, res) => {
    res.send("welcome to home page")
})
app.get('/about', (req, res) => {
    res.send("welcome to about page")
})
app.get('/contact', (req, res) => {
    res.send("welcome to conatct page")
})
route.get('/help', (req, res) => {
    res.send("welcome to help page")
})
route.get('/login', (req, res) => {
    res.send("welcome to login page")
})

app.use(route)

app.listen(3000)


// (1)  yahan route pe ham middleware function pass karden ge 