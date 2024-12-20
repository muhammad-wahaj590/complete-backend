// ------- Getting input from Command Line -------- 

// console.log("wahaj");

// is argv me jo process se ata us me do params fix hoty hain pehla yeh batata hai k nodejs kahan install hai or dosra yeh batata hai k yeh file folder kahan save hai or us k bad ham jo params dena chahen woh is k agy add hoty jayen ge 
// or in me argv array form me show hoty hain 
// console.log(process.argv); 


// or is me agar hamen koi specific value chahiye to ese kar sakty hain access index k through 
// console.log(process.argv[3]);


// ab ham is command k input k through ek file create karty, us me filename dety hain , or us me kuch text add karty hain 
// const fs = require('fs')

// const input = process.argv
// fs.writeFileSync(input[2], input[3])  //first 2 params fix hoty is liye 2 se start kia 


// ab is prog se ham file add or remove dono kar sakty hain 
const fs = require('fs')

const input = process.argv
if(process.argv[2] == "add"){
    fs.writeFileSync(input[3], input[4])
}else if(process.argv[2] == "remove"){
    fs.unlinkSync(input[3])   // unlinkSync se file remove hoti 
}else{
    console.log("invalid input");
}
