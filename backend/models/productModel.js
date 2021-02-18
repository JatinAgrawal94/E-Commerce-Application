import mongoose from 'mongoose';


const productSchema=mongoose.Schema({
    category:{type:String,required:true},
    name:{type:String,required:true},
    image:{type:String,required:true},
    stock:{type:Number,required:true},
    price:{type:Number,required:true},
    description:{type:String,required:false},
    ratings:{type:Number,required:true},
    numReviews:{type:Number,required:true},
    type:{type:String,required:true},
    inCart:{type:Boolean},
    inCartQty:{type:Number,required:true}
},
{
    timestamps:true
});

const Product=mongoose.model('Product',productSchema);
export default Product;