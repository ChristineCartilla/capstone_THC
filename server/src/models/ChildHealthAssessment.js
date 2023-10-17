import mongoose from "mongoose";

const ChildHealthAssessmentSchema = new mongoose.Schema({
    weight: { type: String },
    height: { type: String },
    temp: { type: String },
    findings: { type: String },
    notes: { type: String },
    serviceProvider: { type: String },
    recordStat : { type: Boolean, default: true }
},{
    timestamps: true
})

export const ChildHealthAssessmentModel = mongoose.model("child_health_assessments", ChildHealthAssessmentSchema);