import mongoose from "mongoose";

const MaternalHealthAssessmentSchema = new mongoose.Schema({
    dateOfVisitation: { type: String },
    aog: { type: String },
    fundalHeart: { type: String },
    fetalHeartBeat: { type: String },
    findings: { type: String },
    nuresesNotes: { type: String },
    serviceProvider: { type: String },

})

export const MaternalHealthAssessmentModel = mongoose.model("maternal_health_Assessment", MaternalHealthAssessmentSchema);