const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/e-comm')

const productSchema = new mongoose.Schema({  //schema bana lia alag se function k bahar 
    name: String,
    brand: String,
    price: Number,
    category: String
})

const saveInDB = async () => {
    const productsModel = mongoose.model('products', productSchema)   //model bana lia 
    let data = new productsModel({
        name: "Ultra Edge",
        brand: "Samsung",
        price: 1544300,
        category: "mobile"
    })
    let result = await data.save()
    console.log(result);
}

// Update 
const updateInDB = async () => {
    const productsModel = mongoose.model('products', productSchema)  //(1)
    let data = await productsModel.updateOne(
        {name: "Ultra Edge"},
        {$set: {name: "Ultra Pro Edge", price: 1500 }}
    )
    console.log(data);
}
// updateInDB()


// Delete 
const deleteInDB = async () => {
    const productModel = mongoose.model('products', productSchema)
    let data = await productModel.deleteOne({name: "Ultra Edge"})
    console.log(data);
    
    if(data.deletedCount > 0){
        console.log("data deleted");
    }
}
// deleteInDB()

const FindInDB = async () => {
    const productModel = mongoose.model('products', productSchema)
    let data = await productModel.find()
    console.log(data);
}
FindInDB()


// (1) phr se model banana hoga yahan pe bhi connect karne k liye 
// (2) data khud bhi promise return karta is liye async aawait use kia 
// (3) find k andar condition lagaden ge or data mil jaye ga 