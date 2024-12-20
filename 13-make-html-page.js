// 12 lecture me hamne html page banaye hain lkn ham ek string me kitne ese tags use kar sakty hain to us tareeqe se page banana sahi tareeqa nhi hai is liye ham yahan seekhen ge k kese html page bana sakty hain 

// ----------- Make Html Page ------------

const express = require('express')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname, 'public')
app.use(express.static(publicPath))

app.listen(3000)

// ab agar root page banana hai to public folder me index.html page banaden ge 


// ------ INTERVIEW QUESTIONS ------ 
// path module kis kaam ata hai ?
// yeh hamary project me folder or files ko access karne k liye kaam ata 

// app.use(express.static(publicPath)) is me static method kia karta hai ?
// static pages ko load karta hai ya static content ko load karta hai 

// kia static content me directly css or images load karwa sakty ho ?
// nhi (kyon k path hamara index.js file nhi ho k araha balky nodejs se load ho k araha to directly nhi kar sakty acess )



