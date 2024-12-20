// is file me hamne packages ko install kia tha project me or unhy use kia tha 

// color package ko use karna 
var colors = require('colors')
console.log("hello world".yellow)

console.log("my name is wahaj".bgRed)




// Node.js Single-Threaded Ka Matlab:
// Node.js ek single thread par JavaScript code execute karta hai.
// Iska main thread JavaScript ko execute karta hai aur asynchronous operations ko manage karta hai, jaise:
// File reading/writing
// Network requests
// Database queries
// Toh Node.js kaise multiple kaam karta hai?
// Node.js event loop aur libuv library ka use karke asynchronous tasks ko handle karta hai.
// Jab koi I/O operation (e.g., file read) initiate hota hai, toh Node.js is task ko thread pool me daal deta hai (jo multi-threaded hai).
// Jab task complete hota hai, uska result callback ke zariye main thread ko wapas milta hai.