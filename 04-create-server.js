// make basic server 
const http = require('http')

http.createServer((req, res) => {
    res.write("<h1>hello world</h1>");
    res.end();
}).listen(3000, () => {
    console.log("server is running");
})

// ---------- 2 -----------

// ham server in dono tareeqe se bana sakty hain alg se functiona bana kar bhi or ek sath bhi 

// const http = require('http')

// const createServer = (req, res) => {
//     res.write("<h1>hello world</h1>");
//     res.end();
// }
// http.createServer(createServer).listen(3000, () => {
//     console.log("server is running");
// })



// ---------- explanation ------------ 

// ye code ek Node.js HTTP server banata hai jo 3000 port par chal raha hai. Ab isme:

// http:
// Node.js ka module hai jo server banane ke liye use hota hai.

// req (Request):
// Client se jo bhi request aati hai, uska data handle karta hai.
// Jaise client ne kya URL hit kiya, kaunsa method (GET, POST) use kiya, yeh sab req object mein hota hai.
// user se kuch lena ho 


// res (Response):
// Server ka response handle karta hai.
// Jaise client ko kya HTML, text, ya data return karna hai, woh res object se bhejte hain.
// data send karna ho to 


// res.write()
// Jab bhi server kisi request ka response dena chahta hai, us response ke content ko res.write() ke zariye likha jata hai.
// Isme HTML, plain text ya JSON data bhej sakte hain.
// res.write() ka use res.end() se pehle kiya jata hai kyun ke res.end() response ko close kar deta hai.