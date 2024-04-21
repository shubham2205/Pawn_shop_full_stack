import mongoose from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';
const productSchema = mongoose.Schema({
    _id : Number,
    title : {
        type : String,
        required : [true,"Title is Required"],
        lowercase : true,
        trim : true
    },
    catnm : {
        type : String,
        required : [true,"Category Name is Required"],
        lowercase : true,
        trim : true
    },
    subcatnm : {
        type : String,
        required : [true,"Sub Category Name is Required"],
        lowercase : true,
        trim : true
    },
    description : {
        type : String,
        required : [true,"Description is Required"],
        lowercase : true,
        trim : true
    },
    proiconnm :{
        type : String,
        required : [true,"Product Icon is Required"],
        trim : true

    },
    uid : String,
    info : String
});
productSchema.plugin(mongooseUniqueValidator);
const ProductSchema = mongoose.model("product_collection",productSchema);
export default ProductSchema;