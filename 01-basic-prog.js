// Import the module
let d = require('./02-import-var-func.js')

// Variable operations
var a = 1;
var b = 2;
var c = a + b;
// console.log(c);   // simple basic program console

console.log(d.b);    //export data  console
console.log(d.c());  //export function calling

// ------ Filter Function use ---------- 
const arr = [1,2,3,4,5,2,4,1,5,7,8]
let res = arr.filter((item) =>{
    return item % 2 === 0
})
console.log(res);