import mongoose from "mongoose";

const QueueSchema = new mongoose.Schema({
    profile_id: { type: mongoose.SchemaTypes.ObjectId, ref: "profiles" },
    service_name: { type: String },
    serviceProvider_type: { type: String },
    que_number: { type: Number },
    status: { 
        type: String,
        enum: ["Waiting", "Done"],
        default: "Waiting"
    },
    queueStat : { type: Boolean, default: true }
},{
    timestamps: true
})

export const QueueModel = mongoose.model("queuing", QueueSchema);