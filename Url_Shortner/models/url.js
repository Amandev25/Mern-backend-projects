import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    shortId: {
        type : String,
        required : true,
        unique : true,
    },
    redirectURL: {
        type : String,
        required : true,
    },
    email: {
        type : String,
        unique :true,
        default :null, // Allows email as a null option also...
    },
    visitHistory: [{
        timestamp : { type: Number }
    }]
})

const URL = mongoose.model("url" , urlSchema);

export default URL ;