import mongoose from "mongoose";

const MaternalHealthAssessmentSchema = new mongoose.Schema({
    dateOfVisitation: { type: Date },
    aog: { type: Number },
    fundalHeart: { type: Number },
    fetalHeartBeat: { type: Number },
    findings: { type: String },
    nuresesNotes: { type: String },
    serviceProvider: { type: String },
    vitalSign: { type: mongoose.SchemaTypes.ObjectId, ref: "vital_signs" },
    recordStat : { type: Boolean, default: true }
},{
    timestamps: true
})

export const MaternalHealthAssessmentModel = mongoose.model("maternal_health_assessment", MaternalHealthAssessmentSchema);