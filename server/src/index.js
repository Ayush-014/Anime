import dotenv from "dotenv";
import connectDB from "./db/index.js";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";






dotenv.config({
    path: './env'
})

import express from "express";

const app = express()

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("ERRR", error)
        throw error;
    })
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`SERVER IS READY ON ${process.env.PORT}`)
    })
})
.catch((error)=>{
  console.log("Mongo db connectionnnnn error ")
})