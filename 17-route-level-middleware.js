// -------- route level middleware ----------- 

// ------------------------------------------------------------------------------------------------------

// ab hamen sab me nhi lagana kisi single route pe hi middleware use karna hai to ham ese karen ge 

// single route middleware

// const express = require('express')

// const app = express()

// const reqFilter = (req, res, next) => {
//     if(!req.query.age){
//         res.send("Please provide age")
//     }
//     else if(req.query.age < 18){
//         res.send("you are not access to this page")
//     }
//     else{
//         next();
//     }
// }

// // app.use(reqFilter)   //isko use nhi karen ge route level pe

// app.get('', reqFilter, (req, res) => {
//     res.send("welcome to home page")
// })
// app.get('/users', (req, res) => {
//     res.send("welcome to users page")
// })
// app.get('/about', (req, res) => {
//     res.send("welcome to about page")
// })
// app.listen(3000)


// kia route level middleware ek se ziada route pe laga sakty hain ? 
// ans: yes bas middleware function ka refrence dena route pe wahan bhi lag jaye ga jese home pe lagaya hai 


// ------------------------------------------------------------------------------------------------------ 


// kia middleware ham seperate file pe bana sakty hain ?
// yes 


const express = require('express')
const reqFilter = require('./17-seperate-middleware-file')   //importing seperate middleware file 

const app = express()

app.get('', reqFilter, (req, res) => {
    res.send("welcome to home page")
})
app.get('/users', (req, res) => {
    res.send("welcome to users page")
})
app.get('/about', reqFilter , (req, res) => {
    res.send("welcome to about page")
})

app.listen(3000)