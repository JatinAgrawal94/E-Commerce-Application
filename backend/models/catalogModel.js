import mongoose from 'mongoose';

const catalogSchema=mongoose.Schema({
    type:{type:String,required:true},
    image:{type:String,required:true}
},
{
    timestamps:true
}
);

const Catalog=mongoose.model('Catalog',catalogSchema);
export default Catalog;