
import mongoose, { trusted } from "mongoose"
// IMPORT MONGOOSE,{Schema} from "mongoose"
const userSchema = new mongoose.Schema(
    {
        username:{ 
        type :  String,
        required :  true,
        unique : true,
        lowercase :true,
        trim : true,//whitespaces will be removed 
        index : true  
        },

        email: { 
            type :  String,
            required :  true,
            unique : true,
            lowercase :true
            },
        
        fullname:{ 
            type :  String,
            required :  true,
            lowercase :true,
            trim : true,
            index : true  
            },
        
        avatar:{
            type : String,//cloudinary url
            required: true
        },
            
        password : { 
            type :  String,
            required :  [true, "password is required"],
            },

        watchHistory : [
            {
                type: Schema.Types.ObjectId,
                ref:"Video"    
            }    
         ],

    refreshToken : {
        type : String

    }


    },
    {
        timestamps:true
    }

)


export const User = mpngoose.model("User", userSchema)
