import mongoose, { isObjectIdOrHexString } from "mongoose";

let isConnected =false

export const connectToDB = async()=>{
    mongoose.set('strictQuery', true)
    if(isConnected){
        console.log("MongoDB is already connected");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:'promptGPT',
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        isConnected=true;
    } catch (error) {
        console.log(error)
    }
}