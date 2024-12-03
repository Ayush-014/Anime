import mongoose from "mongoose"

const userRatingSchema = new schema({
 Name :{
    type:mongoose.Schema.Types.ObjectId,
    ref: "User"
 }, 
 Title : String,
 Genere: String,

},{timestamp: true})