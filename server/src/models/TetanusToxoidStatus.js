import mongoose from "mongoose";

const TetanusToxoidStatusSchema = new mongoose.Schema({
    vaccine_name: { type: String, required: true },
    dateGiven: { type: Date, required: true }
}, {
    timestamps: true
});

export const TetanusToxoidStatusModel = mongoose.model("tetanus_toxoid_status", TetanusToxoidStatusSchema);