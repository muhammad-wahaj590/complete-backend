// ---------- file upload in nodejs -------------- 
// is k liye ham multer package ko use karen ge 
// is k andar post route bany ga 


const express = require('express')
const multer = require('multer')
const app = express()

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb)=>{
            cb(null, "files")
        },
        filename: (req, file, cb) => {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single("user_file")

app.post('/upload', upload, (req, res) => {
    res.send("file uploaded")
})

app.listen(3000)

// -----upload funcion -------
// ab file upload karne ka ek funcion banaty hain 
// const upload = multer()
// or is multer k function k andar ek object jaye ga  storage , or staorage apny aap me ek multer ka function ka hota hai or us k andar likhty hian multer.diskStorage() yeh bhi apny aap me ek object leta hai or is k andar ham use karty hain destination or is destionation me hamary pas ek function hota hai value me jis me 3 params hoty hain function(req, file, cb) cb means callback , or phr is function k andar ham cb(null, "foldername") phr diskStoarge k andar dosra function hota hai filename jis me ham likhty hain function(req,filename,cb) phr cb ko callback use karen ge cb(null, file.fieldname + "-" + Date.now() , .jpg)

// a is function k bad yeh mangta hai k file single save karwao ge ya multiple 
// to abhi hamne single hi save karwana hai 

// ab yeh jo upload ka function bana hai yeh as a middleware hai or isko ham post k 2nd params me pass karen ge 


// kia bina multer function k file upload kar sakty hain ?
// yes lkn code thora ziada karna hoga 