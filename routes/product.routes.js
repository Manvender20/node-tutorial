const express = require('express');
const router = express.Router();
const Product = require('../models/product.models');
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../constrollers/controller.product.js');

router.get("/",getProducts);
router.get("/:id",getProductById);
router.post("/",createProduct);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);

module.exports = router;