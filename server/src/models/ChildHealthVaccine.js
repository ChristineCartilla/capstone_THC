import mongoose from "mongoose";

const ChildHealthVaccineSchema = new mongoose.Schema({
    vaccine_name: {
        type: String,
        enum: ["BCG", "HEP BV", "PCV 1", "PCV 2", "PCV 3", "OPV 1", "OPV 2", "OPV 3", "AMV", "PENTA 1", "PENTA 2", "PENTA 3", "MMR"],
    },
    dateGiven: { type: Date },
    recordStat : { type: Boolean, default: true }
},{
    timestamps: true
})

export const ChildHealthVaccineModel = mongoose.model("child_health_vaccines", ChildHealthVaccineSchema);