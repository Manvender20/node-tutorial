
const Product = require('../models/product.models.js');

const getProducts = async(req,res)=>{
    try{
        const products = await Product.find();
        res.status(200).json({message:'Products fetched',data:products});
    }
    catch(error){
        res.status(500).json({message:'Error',error:error.message});
    }
    
};

const getProductById = async(req,res)=>{
    try{
    const products = await Product.findById(req.params.id);
    if(!products){
        return res.status(404).json({message:"Product not found"});
    }
    res.status(200).json({message:'Product fetched',data:products});
    }
    catch(error){
        res.status(500).json({message:'Error',error:error.message});
    }
};

const createProduct = async(req,res)=>{
    try{
      const product = await Product.create(req.body);
      res.status(201).json({message:'Product created',data: product});
    }
    catch(error){
        res.status(500).json({message:'Error',error:error.message});
    }
    
};

const updateProduct = async(req,res)=>{
    try{
       const product  = await Product.findByIdAndUpdate(req.params.id,req.body);
         if(!product){
          return res.status(404).json({message:"Product not found"});
         }

         const updatedProduct = await Product.findById(req.params.id);
         res.status(200).json({message:"Product updated",data:updatedProduct});

    }
    catch(error){
        res.status(500).json({message:"Error",error:error.message});
    }
};

const deleteProduct = async(req,res)=>{
    try{
       const product = await(Product.findByIdAndDelete(req.params.id));
       if(!product){
        return res.status(404).json({message:"Product not found"});
       }
       res.status(200).json({message:"Product deleted"});
    }
    catch(error){
        res.status(500).json({message:"Error",error:error.message});
    }
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};

