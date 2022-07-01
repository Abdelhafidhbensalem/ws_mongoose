const express = require('express')
const Product = require("../models/Product")

const router = express.Router()

router.get("/", (req, res) => {
    res.send("test product")
})


router.post("/addProduct", async (req, res) => {
    try {
        const existProduct = await Product.find({ name: req.body.name })
        if (existProduct) {
            return res.status(400).send({ msg: "name must be unique" })
        }
        const newProduct = new Product({ ...req.body })
        await newProduct.save()
        const allProducts = await Product.find({})
        res.send({ msg: "product added success", allProducts })
    } catch (error) {
        console.log(error)
    }
})
module.exports = router