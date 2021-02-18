import express from 'express';
import Catalog from '../models/catalogModel.js';
import expressAsyncHandler from 'express-async-handler';
import data from '../data/categories-data.js';

const router=express.Router();


router.get('/seed',expressAsyncHandler(async (req,res)=>{
    const catalogData=await Catalog.insertMany(data);
    res.send({catalogData});
}))

export default router;