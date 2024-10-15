
//Env file ahould be the first to be imorted in the project because we want that our project should get all its enviroment variables as soon as possible
// require('dotenv').config({path:'./.env'})//This is a 100 percent correct code but this inconsistent because sometimes we are using import and here we are using require so here is the solution 

import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({path:'./.env'})

connectDB()

/*
WAY 1 to connect to database but in this way the index.js file is very polutted

SO WE WILL SEE THE BETTER APPROACH ABOVE

import express from "express";
const app =express()

/*
function connectDb(){}
connectDb()
We can use this approach also to connect to database but we will use IIFE
*/

//IIFE

/*
(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
       app.on("error",(error)=>//TO HANDLE ERROR FROM EXPRESS
    {
        console.log("Error",error);
        throw error
        
    })
    app.listen(process.env.PORT,()=>
    {
        console.log(`App is listening on ${process.env.PORT}`);
        
    })
        
    } catch (error) {
        console.log("Error:",error);
        throw err
        
    }
})()//generally people write semicolon at the start of IIFE because professional believe that there is a possibility that a person has not given semicolon at the end of "mongoose" a good practice
//try catch is always mandatory
*/