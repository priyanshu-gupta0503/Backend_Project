import mongoose from "mongoose";
import { DB_Name } from "../consatants.js";

const connectDB= async()=>    //DATABASE IS IN OTHER CONTINENT
{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
        console.log(`\n MongoDB connectd !! DB HOST :${connectionInstance.connection.host}`);//Console LOG AND SEE CONNECTION INSTANCE
        
    } catch (error) {
        console.log("MONGODB CONNECTION ERROR",error);
        process.exit(1) //READ ABOUT THIS
        
    }
}

export default connectDB
