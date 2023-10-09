import mongoose from "mongoose";

const ChildHealthRecordSchema = new mongoose.Schema({
    birthWeight: { type: Number },
    placeOfDelivery: { type: String },
    typeOfFeeding: {
        type: String,
        enum: ["DBF", "P&F", "FF", "SFF"] // Direct breastfeeding (DBF), pumping and bottle feeding (P&F), formula feeding (FF), solid food feeding (SFF)
    },
    dateOfNewbornScreening: { type: Date },
    childHealthVaccine: [{ 
        type: mongoose.SchemaTypes.ObjectId,
        ref: "child_health_vaccines" 
    }],
    childHealthAssessment: [{ 
        type: mongoose.SchemaTypes.ObjectId,
        ref: "child_health_assessments" 
    }],
    recordStat : { type: Boolean, default: true }
},{
    timestamps: true
})

export const ChildHealthRecordModel = mongoose.model("child_health_records", ChildHealthRecordSchema);