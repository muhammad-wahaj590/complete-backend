// ------------- template engine ------------ 

const express = require('express')
const path = require('path')

const publicPath = path.join(__dirname, 'public')
const app = express()

app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.sendFile(`${publicPath}/index.html`)
})
app.get('/profile', (req, res) => {

    const data = {
        name: 'wahaj',
        age: 21,
        email: 'wahaj@gmail.com',
        skills: ['html', 'css', 'js', 'react', 'nodejs']
    }
    res.render('profile', {data})  //dynamic data k liye render method use karty hain 
})

app.get('/login', (_, res) => {
    res.render('login')
})

app.listen(3000)













// template engine dynamic page banany me kaam aty hain yeh bhi npm k package hoty hain or inhy install karna parta hai 

// dynamic page kia hota hai ?
// abhi hamne jo static page banaya is me database se koi lena dena nhi hai lkn agar hamary pas data DB se araha to woh ek dynamic page hai 

// view folder hi kyon banaty ?
// jab bhi ham template engine use karty to ham view name ka hi folder banaty hain 

// app.set() main do params hoty hain pehla 'view engine' yeh i likhna hota hai pehlay param me  or dosra jo hamne package use kia hai jese 'ejs' 