const express = require('express')
const connectDB = require("./config/connectDb")
const Product = require("./models/Product")
connectDB()

const app = express()
app.use(express.json())
/*const addProduct = async () => {
    try {
        const newProduct = new Product({ price: 5000, name: "HP", age: 45 })
        //fakeInstance={...newProduct}
        //console.log(fakeInstance instanceof Product);
        newProduct.save()
    } catch (error) {
        console.log(error);
    }
}

addProduct()
*/


app.use("/products",require('./routes/prodcutRoutes'))
const port = 5000

app.listen(port, () => console.log(`Example app listening on port ${port}!`))