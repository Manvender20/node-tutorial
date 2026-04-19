const express = require('express');
const mongoose = require('mongoose');

const Product  = require('./models/product.models.js');
const ProductRoutes = require('./routes/product.routes.js');
const app = express();

app.use(express.json());
app.use('/api/products', ProductRoutes);
app.get('/',(req,res)=>{
    res.send("Hello world from express");
});



mongoose.connect("mongodb+srv://manvenderpratapsingh2_db_user:27KtgFjUrN4b0edW@cluster1.mrbeol5.mongodb.net/?appName=Cluster1")
.then(()=>{
    console.log("Connected to database");
    app.listen(3000,()=>{
    console.log("Server is running on port 3000");
  });
})

.catch(()=>{
    console.log("Error");
});


