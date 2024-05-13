import mongoose, { Schema } from 'mongoose'
import Category from './Category'

const CraveCrafterSchmea=new Schema({
    title:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true,
    },

    category:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:Category
    },
    price:{
        type:Number,
        required:true,
    },
    discountPrice:{
        type:Number,
    },

    status:{
        type:Boolean,
        
    },
    coverImage:{
        type:String,
        required:true
    },
},{timestamps:true})
const Food=mongoose.models.CraveCrafter || mongoose.model("CraveCrafter", CraveCrafterSchmea)
export default Food