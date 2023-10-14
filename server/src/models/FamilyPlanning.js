import mongoose from "mongoose";

const FamilyPlanningSchema = new mongoose.Schema({
    nameSpouse: {type: String },
    spouseDoB: { type: Date },
    spouseAge: { type: Number  },
    spouseOccupation: { type: String },
    noLivingChild: { type: Number},
    planAddChild: { type: Boolean },
    aveMonthIncome: { type: Number },
    pe_skin: { type: String },
    pe_conjunctiva: { type: String },
    pe_neck: { type: String },
    pe_breast: { type: String },
    pe_abdomen: { type: String },
    pe_extremities: { type: String },
    pe_pelvicExam: { type: String },
    recordStat : { type: Boolean, default: true },
    obstetricalHistory: { type: mongoose.SchemaTypes.ObjectId, ref: "obstetrical_history"},
    medicalHistory: { type: mongoose.SchemaTypes.ObjectId, ref: "medical_history"},
    familyPlanningAssessment: [{ type: mongoose.SchemaTypes.ObjectId, ref: "family_planning_assessment"}],
    recordStat : { type: Boolean, default: true }
},{
    timestamps: true
})

export const FamilyPlanningModel = mongoose.model("family_planning", FamilyPlanningSchema);