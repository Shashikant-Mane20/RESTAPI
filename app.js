const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const app = express();

mongoose.connect("mongodb://localhost:27017/sample").then(()=>{
console.log("Connect with MongoDB")
}).catch((err)=>{
    console.log(err)

})

// mongoose.connect('mongodb://localhost:27017/products')

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

const productSchema = new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
})

const Product = new mongoose.model("Product",productSchema);

//Create Product

app.post("/api/v1/product/new",async(req,res)=>{

    const product = await Product.create(req.body);

    res.status(200).json({
        successs:true,
        product
    })

})


//Read Product 

app.get("/api/v1/products",async(req,res)=>{
    const products = await Product.find(req.query);

    if(!products){
        return res.status(404),json({
            success:false,
            message:"Product not found"
        })
    }

    res.status(200).json({
        success:true,
        products
    })
})

//Update Product

app.put("/api/v1/products/:id",async(req,res)=>{
    let product = await Product.findById(req.params.id);

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true,
        useFindAndModify:false,
        runValidators:true})

        res.status(200).json({
            success:true,
            product
        })
})

// Delete Product 

app.delete("/api/v1/products/:id",async(req,res)=>{
    const product = await Product.findByIdAndDelete(req.params.id);

    if(!product){
        return res.status(404).json({
            success:false,
            message:"Product not found"
        })
    }

    res.status(200).json({
        success:true,
        message:"Product deleted successfully"
    })
})




app.listen(4500,()=>{
    console.log("Server is working http://localhost:4500")
});

