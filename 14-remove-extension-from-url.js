// ------------ remove extension from url and 404 page ------------- 

// abhi tak hamne jitna kaam kia hai usme hamne jab static page ko load karwaya to us me index.html likha , ab .html ko remove karna pary ga kyon k ham viewers ko nhi dikhana chahty k ham ne kis technology pe yeh sab banaya hai or security purpose k liye bhi yeh extension hatana zaruri hota 

const express = require('express')
const path = require('path')

const publicPath = path.join(__dirname, 'public')
const app = express()



app.get('', (req, res) => {
    res.sendFile(`${publicPath}/index.html`)   //(1)
})
app.get('/help', (_, res) => {                 //(2)
    res.sendFile(`${publicPath}/help.html`)
})
app.get('/about', (_, res) => {
    res.sendFile(`${publicPath}/about.html`)
})
app.get('*', (_, res) => {        // (3) * dal dene se ab galat url pe 404 page pe route hoga  
    res.sendFile(`${publicPath}/nopage.html`)
})


app.listen(3000)

// (1) last video me hamne app.use ko use kia tha lkn yahan pe hamne app.get ko use kia or static content ko bhi bina extension k load karwa dia
// (2) ab agar  ham req ko use nhi karne way to ham req ki jagah _ bhi laga sakty hain  
// (3) ab agar user ne galat url dal dia to route ho jaye kisi ek page pe bajaye is k k woh can't get page dikahye 

// get method me file ko kese load karwa sakty hain ?
// sendFile k through file ko load karwa sakty hain