import express from 'express';
import productApi from './api/productApi.js';
import categoryApi from './api/categoryApi.js';
import cartApi from './api/cartApi.js';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userApi from './api/userApi.js';
import orderApi from './api/orderApi.js';
const app=express();

dotenv.config();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:false}));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/benign',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});

app.get('/',(req,res)=>{
    res.send();
})

app.get('/profile',(req,res)=>{
    res.send();
})

app.get('/login',(req,res)=>{
    res.send();
})

app.get('/cart',(req,res)=>{
    res.send();
})

app.post('/cart/:type/:id',(req,res)=>{
    res.send();
})

app.use('/category',categoryApi);
app.use('/api/category',productApi);
app.use('/api/cart',cartApi);
app.use('/api/users',userApi);
app.use('/api/orders',orderApi);

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server is listening at ${PORT}`);
})

