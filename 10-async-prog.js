// synchronous task 
// console.log("ali");
// console.log("mazhar");
// console.log("huzaifa");



// asynchronous task 
// console.log("start");
// setTimeout(() => {
//     console.log("middle");
// }, 2000)
// console.log("end");



// drawback of async prog 
// const a = 5;
// let b = 7

// setTimeout(() => {
//     b = 10;
// }, 2000);

// console.log(a+b);

//ab is uper drawback me yeh hai k agar hamari b ki value update nhi hoi hai or output me 12 araha k jab k hamne b ko update kardia tha to is case ko ham handle kar sakty hain promises k through 


const a = 5;
const b = 0;

let waitingData = new Promise((res, rej) => {
    setTimeout(() => {
        res(5)
    }, 2000);
})
.then((data) => {
    console.log(a+data)
})