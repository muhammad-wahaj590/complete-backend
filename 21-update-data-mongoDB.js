const dbConnect = require('./19-mongoDB-config')

const updateData = async function(){
    let data = await dbConnect()
    let result =await data.updateOne(
        {name: "Spark"}, 
        {$set: {brand: "Techno-Spark", price: 23}}
    )
    console.log(result);

    if(result.acknowledged){
        console.log("data updated");
    }
}

updateData()


//updateOne ya updateMany main do params hoty hain pehlay object condition object hota hai us me condition likhi jati or dosra object pe value set ki jati hai 

// agar condition ko 5 data satisfied kar rahy or hamne update kia hai jese brand to konsi wala data update ho 5 me se ? 
// pehla wala 

// single record ko kese update karoge ?
// updateOne se 

