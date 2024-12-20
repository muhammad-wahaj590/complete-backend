const dbConnect = require('./19-mongoDB-config')

const deleteData = async function(){
    let data = await dbConnect()
    let result = await data.deleteOne({name: "14 Pro"})

    if(result.acknowledged){
        console.log("data deleted");
    }
}

deleteData()


// agar apne koi data delete kia or woh data exist hi nhi karta to kia hoga ? error aye ga ? 
// nhi , error nhi aye ga , acknowledged = true hoga or deleteCount = 0 rahy ga 