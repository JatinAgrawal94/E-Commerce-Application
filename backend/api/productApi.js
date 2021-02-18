import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Catalog from '../models/catalogModel.js';
import Product  from '../models/productModel.js';
import {productData} from '../data/productSpecificData.js';
const router=express.Router();


// data sending routes
router.get('/data',expressAsyncHandler(async(req,res)=>{
    const categoryData=await Catalog.find({});
    res.send(categoryData);
}));

// sending sample data to mongodb
router.get('/seed',expressAsyncHandler(async (req,res)=>{
    const data=await Product.insertMany(productData);
    res.send({data});
}));


router.get('/:id',expressAsyncHandler(async (req,res)=>{
    const productTypeData=await Product.find({type:req.params.id})
    res.send(productTypeData);
}))

router.get('/:type/:id',expressAsyncHandler(async (req,res)=>{
    const productData=await Product.findOne({type:req.params.type,_id:req.params.id});
    res.send(productData);
}))


router.get('/cart/:type/:id',(req,res)=>{
    let t=req.params.type;
    let g=req.params.id;
    t=eval(t);
})



export default router;