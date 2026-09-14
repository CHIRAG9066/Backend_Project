import mongoose from "mongoose";
import mongooseAgregatePaginateV2 from "mongoose-aggregate-paginate-v2"; 
const VideoSchema = new mongoose.Schema({
    videoFile:{
        type: String, //cloudinary url
        required: true
    },
    thumbnail:{
        type: String, //cloudinary url
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    duration:{
        type: Number,
        required: true
    },
    views:{
        type: Number,
        default: 0
    },
    isPublihed:{
        type: Boolean,
        default: true
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},{
    timestamps: true
})

VideoSchema.plugin(mongooseAgregatePaginateV2);

export const Video = mongoose.model("Video", VideoSchema);