// ---------- CRUD with file system -----------

// Create File (in folder)
const fs = require('fs')
const { readFile } = require('fs/promises')
const path = require('path')

const dirPath = path.join(__dirname, "CRUD")
const fileName = `${dirPath}/Apple.txt`

// fs.writeFileSync(fileName, "this is apple file")


// Read File 
fs.readFile(fileName, 'utf8', (err, item) => {
    console.log(item);
})


//Update file
// fs.appendFile(fileName, " and file is Apple.txt", (err) => {
//     if(!err) console.log("file is updated")
// })

// append k third param me callback ata or sirf err dena hota item nhi agar isko dobara chala dia to phr se code add ho jaye ga 



// Rename File
// fs.rename(fileName, `${dirPath}/Orange.txt`, (err) => {
//     if(!err) console.log("file name is updated")
// })


// Delete File 
// fs.unlinkSync(`${dirPath}/Orange.txt`)





// ---------  INTERVIEW QUESTION ---------- 

// fs.readFile(fileName, 'utf8', (err, item) => {
//     console.log(item);

// is code main file ko read karty we agar main utf8 nhi likhta agar to mujhy output me buffer show hota hai 

// what is buffer ?
// buffer means ek temporary memory location, jab ham file create karty hain to nodejs ko small space chahiye hoti hai or usi ko ham kehty hain buffer 

// what is utf8 ?
// utf8 ek encoding format hai jo text ko readable format me convert karta hai.

// Agar tum utf8 nahi likho, to fs.readFile default binary format (Buffer) me data read karega, jo human-readable nahi hota.