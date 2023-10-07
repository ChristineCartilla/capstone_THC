import mongoose from "mongoose";

const MaternalHealthAssessmentSchema = new mongoose.Schema({
    dateOfVisitation: { type: Date },
    aog: { type: Number },
    fundalHeart: { type: Number },
    fetalHeartBeat: { type: Number },
    findings: { type: String },
    nuresesNotes: { type: String },
    serviceProvider: { type: String },

},{
    timestamps: true
})

export const MaternalHealthAssessmentModel = mongoose.model("maternal_health_assessment", MaternalHealthAssessmentSchema);