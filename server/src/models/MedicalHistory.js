import mongoose from "mongoose";

const MedicalHistorySchema = new mongoose.Schema({
    illness: { type: String },
    allergy: { type: String },
    hospitalization: { type: String },
    recordStat : { type: Boolean, default: true }
},{
    timestamps: true
})

export const MedicalHistoryModel = mongoose.model("medical_history", MedicalHistorySchema);