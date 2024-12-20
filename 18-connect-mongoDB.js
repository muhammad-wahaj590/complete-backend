// ------------ connect mongoDB with node.JS -------------- 

// const {MongoClient} = require('mongodb');
// const url = "mongodb://localhost:27017"   // (1)
// const client = new MongoClient(url);       // (2)
// const database = "e-comm"                 // (3)

// // (5)
// async function getData(){
//     let result = await client.connect();    //(4)
//     let db = result.db(database);           //(6)
//     let collection = db.collection('products');  //(7)
//     let response = await collection.find({}).toArray();  //(8)
//     console.log(response);
// }

// getData()




// (1) ab mongodb ka hamen path dena local me agar use kar rahy to woh same hi rahy ga lkn agar online use kar rahy to woh different ho sakta hai  | taky mongodb ko samagh asaky k ahmen is waly url se data fetch kar k lana hai 
// (2) client hi kyon rakha hamne var name , ham kuch bhi rakh sakty hain lkn abhi hamara data clinet se araha matlab mongodb se araha is liye client rakha , ham name kuch bhi rakh sakty wese 
// (3) jis collection k database pe kaam kar rahy us ka name pehlay hi define kardia uper 
// (4) client se connect karo or result me store karwao 
// (5) database se connect karty to wait karna par sakta is liye async await use kia 
// (6) ab bht sary database hain hamary to hamne db variable me database initialize karwaya jo hamne use karna hai 
// (7) ab ek databse me bht sari collection hain to hamne batana hoga k hamne database k konsi collection ko use karna 
// (8) ab ham us collection ko dekhna chahty console pe to us k liye .find({}) is ka ndar object pass kardena hota kyon k wahan db me data object me story hai or agy .toArray() se woh collection console pe array format me achy se show ho jati 



// -------------- interview quiestion ----------- 

// kia ham do database ko ek sath connect kar sakty hain ?
// yes ham isi tarah ek or connection banayen ge 



// agar single data chhaiye ho to find me ese karen ge 

const {MongoClient} = require('mongodb');
const url = "mongodb://localhost:27017"   // (1)
const client = new MongoClient(url);       // (2)
const database = "e-comm"                 // (3)


async function getData(){
    let result = await client.connect();    
    let db = result.db(database);           
    let collection = db.collection('products');  
    let response = await collection.find({name: "Note30"}).toArray();    //yahan alag se field deden ge bas 
    console.log(response);
}

getData()