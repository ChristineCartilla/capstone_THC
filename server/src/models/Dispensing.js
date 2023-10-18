import mongoose from "mongoose"

const DispensingSchema = new mongoose.Schema({
    dateGiven: { type: String, required: true }, 
    medicationName: { type: String, required: true },
    dosage: { type: String, required: true },
    bhwName: { type: String, required: true },
    prescription: { type: String, required: true },
    dispenseStat: { type: Boolean, default: true },
},{
    timestamps: true,
})

export const DispensingModel = mongoose.model("dispensing", DispensingSchema);