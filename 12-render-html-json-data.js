// ---------- render html and json data ------------
// pages k uper html or json data ko kese display karwa sakty hain

// json data (api k liye imp hai)
// html data (web k liye imp hai)

const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send(`
    <h1>welcome to home page</h1>
    <a href="/about" >goto about-us page</a>
  `);
});

// page pe input kese le sakty hain
app.get("/about", (req, res) => {
  res.send(`
        <input type=text placeholder='enter value' value=${req.query.name} />
        <button>click me</button>
        <a href="/" >goto home page</a>
    `);
});

//agar json data dikhana ho
app.get("/contact", (req, res) => {
  res.send([
    { name: "wahaj", age: 21 },
    { name: "ali", age: 25 }
  ]);
});

app.listen(3000);


// ----------- INTERVIEW QUESTIONS -------------
// paramter se value kese get karo ge nodejs k andar ? query params bhi kehty hain isy 
// to ham ne about waly code pe value dedi query params ki - is tarah se ho sakta hai yeh kaam 