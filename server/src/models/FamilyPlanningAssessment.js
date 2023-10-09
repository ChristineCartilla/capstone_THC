import mongoose from "mongoose";

const FamilyPlanningAssessmentSchema = new mongoose.Schema({
    findings: { type: String },
    methodAccepted: { type: String },
    serviceProvider: { type: String },
    dateOfFollowUpVisit: { type: String },
    vitalSign: { type: mongoose.SchemaTypes.ObjectId, ref: "vital_signs" },
    recordStat : { type: Boolean, default: true }
},{
    timestamps: true
})

export const FamilyPlanningAssessmentModel = mongoose.model("family_planning_assessment", FamilyPlanningAssessmentSchema);