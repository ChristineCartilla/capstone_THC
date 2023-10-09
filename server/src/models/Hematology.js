import mongoose from "mongoose";

const HematologySchema = new mongoose.Schema({
    hematocritLevel: { type: Number },
    hemoglobinMassConc: { type: Number },
    erythrocyteNumConc: { type: Number },
    LeukocyteNumConc: { type: Number },
    SegmenterNumFract: { type: Number },
    lymphocyteNumFract: { type: Number },
    MonocyeNumFrac: { type: Number },
    EosinophileNumFract: { type: Number },
    BasophileNumFract: { type: Number },
    stab: { type: Number },
    thrombocyteNumConc: { type: Number },
    retlculocyteNumFrac: { type: Number },
    remarks: { type: String },
    serviceProvider: { type: String },
    recordStat : { type: Boolean, default: true }
},{
    timestamps: true
})

export const HematologyModel = mongoose.model("hematology_lab", HematologySchema)