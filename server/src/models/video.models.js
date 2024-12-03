
import mongoose from "mongoose"

const videoSchema = new mongoose.Schema(
    {
        videoFile: {
            type: String //cloudinary url 
        }
        
    },
    {timestamps:true}

)

export const video = mpngoose.model("video", videoSchema)