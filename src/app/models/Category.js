import mongoose, { Schema } from 'mongoose'

const CategorySchema=new Schema({
    catTitle:{
        type:String,
        required:true,
    },
    catDesc:{
        type:String,
        required:true,
    }
})

const Category=mongoose.models.categoryModel || mongoose.model("categoryModel", CategorySchema)
export default Category;