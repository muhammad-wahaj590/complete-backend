// ---------- read data from mongoDB -------------

// ab hamne last lec me database se connect karna seekha lkn hamne function k andar hi find kia hoa data ko , ab agar mujhy data ko read karna hai , us me kuch insert karna hai to kia main har bar connection banaon ga ? nhi , mujhhy chahiye k main ek bar function banalun connection tak ka or us k bad main insert ka find ka delete ka read ka alag alag se handle karlun to woh kaam mainay neechay kia hai 


// ------------------------------------------------------------ 
// const {MongoClient} = require('mongodb')
// const url = "mongodb://localhost:27017"
// const client = new MongoClient(url)
// const database = 'e-comm'

// // (1)
// async function dbConnect(){
//     const result = await client.connect()
//     const db = result.db(database)
//     return db.collection('products')
// }
// -------------------------------------------------------------

const dbConnect = require('./19-mongoDB-config')



// (2)  data hanlde (read) using promise method 
// dbConnect().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.log(data);
//     })
// })


// data handle (read) using async await method | modern way 
const main = async () => {
    let data = await dbConnect()
    data = await data.find().toArray()
    console.log((data));
}
main()



// (2) yahan is function me ham data ko read kar pa rahy .find() method k through or dobara .then() is liye lagaya kyon k .toArray() bhi promise return karta hai 
// (3) ab hamen connection wala data k function ko alag se file me rakhdena chaiye or usy yahan import karlena chahiye or is function ko hamne  19-mongoDB-config me rakha hai 


// (4) data me where kese laga sakty hain ?
// data = await data.find({name: "IPhone"}).toArray()