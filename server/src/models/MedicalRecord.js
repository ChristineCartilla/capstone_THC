import mongoose from "mongoose";

const MedicalRecordSchema = new mongoose.Schema({
    service_id: {
        type: mongoose.SchemaTypes.ObjectId,
        refPath: 'reference',
    },
    service_name: {
        type: String,
        enum: ["Prenatal","Immunization","OralHealth", "MedicalCheckUp", "FamilyPlanning", "Hematology", "Urinalysis", "VitalTesting"],
        required: true
    },
    reference:{
        type: String,
        enum: ["maternal_health_record","child_health_records","oral_health", "medical_checkup", "family_planning", "hematology_lab", "urinalysis_lab", "vital_signs"],
        required: true
    },
    recordStat : { type: Boolean, default: true }
},{
    timestamps: true
});

export const MedicalRecordModel = mongoose.model("medical_record", MedicalRecordSchema);