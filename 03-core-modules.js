// core modules
// kisi bhio programming k basic features core modules hoty hain 
// examples: 
// console.log("hello world"), file system (fs), api conection k liye  (http), data process (Buffer)

// global modules (isko import nhi karna parta hai)
console.log("hello world")


// non global modules (isko import karna parta hai)
const fs = require('fs')  //isy kahin bhi kar sakty use wese top pe karna chahiye 
fs.writeFileSync("test.txt", "hello world")


// ham yeh kaam ese bhi kar sakty hain 
const gs = require('gs').writeFileSync
gs("test2.txt", "How are you?")    


// code ki directory check karne k liye 
console.log("=>", __dirname);


// filename check karna ho to ese 
console.log("=>", __filename);