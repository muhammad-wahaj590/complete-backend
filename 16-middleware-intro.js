// ------------ middleware ----------- 

// -----------------------------------------------------------------------------

// ------ basic middleware example -------- 

// const express = require('express')

// const app = express()

// // middleware function
// const reqFilter = (req, res, next) => {
//     console.log("reqfilter");
//     next();   //agar yeh next call nhi karty to yeh route kabhi work nhi karta load hota rehta 
// }

// app.use(reqFilter)

// app.get('', (req, res) => {
//     res.send('home page')
// })
// app.get('/users', (req, res) => {
//     res.send('users page')
// })

// app.listen(3000)



// ----------------------------------------------------------------------------- 

// ab main middleware se actual use karun ga k agar user ki age 18 se ziada hai tab hi woh access kar saky otherwise woh access na kar saky 

const express = require('express')

const app = express()

// is tarah se ham middleware use kar sakty hain or bhi tareeqe hain woh agy dekhen ge 
const reqFilter = (req, res, next) => {
    if(!req.query.age){
        res.send("Please provide age")
    }
    else if(req.query.age < 18){
        res.send("you are not access to this page")
    }
    else{
        next();
    }
}

// yeh application  level middle laye bana deta 
app.use(reqFilter)

app.get('', (req, res) => {
    res.send("welcome to home page")
})
app.get('/users', (req, res) => {
    res.send("welcome to users page")
})

app.listen(3000)