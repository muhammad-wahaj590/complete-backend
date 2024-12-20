// mongoose basic intro | schemas  | modals 

const mongoose = require('mongoose')

const main = async () => {
    await mongoose.connect('mongodb://localhost:27017/e-comm')  //(1)
    const productSchema = new mongoose.Schema({                 // (2)
        name: String,
        price: Number
    })
    const productsModel = mongoose.model('products', productSchema)  // (3)
    let data = new productsModel({name: "S6", price: 25000})                       // (4)  (5)
    let result = await data.save()
    console.log(result);
}

main()



// (1) yeh connect karwata hai mongoose ko databse se 
// (2) yahan hamne schema banaya hai field matlab , or is me hamen name field hi rakhi hai ab user agar is k ilawa bhi koi filed add karna chahy to woh add nhi hogi 
// (3) ab hamne yahan models create karna hai or us me 2 params hoty hain pehla databse ka name or dosra schema 
// (4) ab jab ham new instance lety hain koi entry karty hain to hamen uska yahan pe instace banana hota hai 
// (5) ab agar me name k bad koi or field bhi add karna chahu to woh add nhi kar sakta main jab tak schema me us filed ko rakhun na 
