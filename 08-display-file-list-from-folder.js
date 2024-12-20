// -------- dispaly file list from folder ------- 

// ab agar me chahta hun k me ek sath multiple files create kar sakun to woh kese ho saky ga | or ek folder banaon ga k sari files usi folder me create hon 

// ab sab se pehlay ham folder bana len ge phr path bhi uska set karen ge phr loop laga kar sari files create kar sakty hain 

const fs = require('fs');
const path = require('path')

const dirPath = path.join(__dirname, 'files')
console.log(dirPath);

for(let i=0; i<5; i++){
    fs.writeFileSync(dirPath + `/hello${i}.txt`, "file created with loop")  
}


// ab is files ko read kar k list karwayen ge (list banany k liye directory ka sue hota or file read karne k liye readdir)

fs.readdir(dirPath, (err, files) => {
    console.log(files);  //is se files array form me ayen gi individual files k liye foreach use karen ge 
    files.forEach((item) => {
        console.log(item)
    })
})







// fs.writeFileSync(dirPath + `/hello${i}.txt`, "file created with loop")
// is me i is liye rakah kyon k mujhy iteation karwani hai multiple files bana kar bina i k mere pas ek hi file create hogi or woh 5 times update hoti rahegi bas lkn multiple files nhi bane gi or dirPath se jis path ko hamne banaya tah wahan file create ho jayen gi sari 



// --------- INTERVIEW ------------
// kia is path se ham kisi or drive ki files ko yahan se access kar sakty hain ? esa possible hai ?
// nhi (kyon k jab aap ek folder me nodejs ki file ko run karty ho to woh apny aap me ek web server ban jata hai matlab ek khud ka environmet ban jata hai or aap us k baha usy access nhi kar sakty)

// readdir() 
// is me do params hoty hain pehla filepath jese hamne dirPath dia us me folder ka path tha or dosra paramter hota hai callback function us k andar se ham loop laga k sari files k names ko console pe read kar sakty hain 