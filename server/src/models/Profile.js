import mongoose from "mongoose"

const ProfileSchema = new mongoose.Schema({
    prof_status: {
        type: String,
        enum: ["Pending", "Active", "Inactive"],
        default: "Pending",
        required: true
    },
    relationship: {
        type: String,
        required: true
    },
    user_type: {
        type: String, 
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    middle_name: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        enum: ["Male", "Female"],
        required: true
    },
    age: {
        type: Number,
    },
    birthDate: {
        type: Date,
        required: true
    },
    birthPlace: {
        type: String,
        required: true
    },
    educAttain: {
        type: String,
    },
    occupation: {
        type: String,
    },
    contactNo: {
        type: String,
        required: true
    },
    civilStatus: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    barangay: {
        type: String,
        required: true
    },
    municipality: {
        type: String,
        required: true
    },
    zipCode: {
        type: Number,
        required: true
    },
    vital_signs:[{type: mongoose.SchemaTypes.ObjectId, ref:"vital_signs"}],
    medical_records: [{type: mongoose.SchemaTypes.ObjectId, ref: "medical_record"}],
}, {
    timestamps: true
})

export const ProfileModel = mongoose.model("profiles", ProfileSchema)
