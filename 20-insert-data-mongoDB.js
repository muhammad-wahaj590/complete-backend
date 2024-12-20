const dbConnect = require('./19-mongoDB-config')

// single data insert 
// const insertData = async function(){
//     let db = await dbConnect()
//     let result = await db.insertOne(
//         {name: "Spark", brand: "Techno", price: 66000, category: "mobile"}
//     )
//     console.log(result);

//     if(result.acknowledged){       //(1)
//         console.log("data inserted");
//     }
// }

// insertData()


// multiple data insert 
const insertData = async function(){
    let db = await dbConnect()
    let result = await db.insertMany(
        [
            {name: "123", brand: "Techno", price: 66000, category: "mobile"},
            {name: "111", brand: "Techno", price: 6000, category: "mobile"},
            {name: "S 60", brand: "Techno", price: 2000, category: "mobile"},
            {name: "rk 25", brand: "Techno", price: 3336000, category: "mobile"},
        ]
    )
    console.log(result);

    if(result.acknowledged){       //(1)
        console.log("data inserted");
    }
}

insertData()



// (1) ab hamen check karna hai k hamara data insert ho gaya to to acknwlegde lene k liye yeh if condition lagadi 