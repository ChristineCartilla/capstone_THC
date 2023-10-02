import mongoose from "mongoose";

const MedicalRecordSchema = new mongoose.Schema({
    service_id: {
        type: mongoose.SchemaTypes.ObjectId
    },
    service_name: {
        type: String,
        enum: ["Prenatal","Immunization","OralHealth", "MedicalCheckUp", "FamilyPlanning", "Hematology", "Urinalysis", "VitalTesting"],
        required: true
    }
});

export const MedicalRecordModel = mongoose.model("medical_record", MedicalRecordSchema);