import mongoose from "mongoose";

const MedicalCheckupSchema = new mongoose.Schema({
    findings: {
        type: String,
    },
    recommendation: {
        type: String,
    },
    serviceProvider: {
        type: String,
        required:true
    },
    recordStat : { type: Boolean, default: true }
},{
    timestamps: true
})

export const MedicalCheckupModel = mongoose.model("medical_checkup", MedicalCheckupSchema);