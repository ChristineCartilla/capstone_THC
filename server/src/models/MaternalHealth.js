import mongoose from "mongoose";

const MaternalHealthSchema = new mongoose.Schema({
    expectedDeliveryDate: { type: Date },
    pregnancyTerminatedDate: { type: Date },
    outcome: { type: String },
    childBirthWeight: { type: Number },
    placeOfDelivery: { type: String },
    attendedBy: { type: String },
    obstetricalHistory: { type: mongoose.SchemaTypes.ObjectId }
})

export const MaternalHealthModel = mongoose.model("maternal_health_record", MaternalHealthSchema);