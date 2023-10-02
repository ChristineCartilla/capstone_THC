import mongoose from "mongoose";

const VitalSignSchema = new mongoose.Schema({
    height:{ type: Number, required:true },
    weight:{ type: Number, required:true },
    temp:{ type: Number, required:true },
    pulseRate:{ type: Number, required:true },
    bmi:{ type: Number, required:true }
},{
    timestamps:true
})

export const VitalSignModel = mongoose.model("vital_signs", VitalSignSchema)