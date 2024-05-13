import mongoose from "mongoose";

const ConnectDb= async()=>{
    try {
        await   mongoose.connect("mongodb://127.0.0.1:27017/tastywheels") 
        console.log("Db connected")
    } catch (error) {
       console.log("Db not connected",error) 
    }

}

export default ConnectDb;