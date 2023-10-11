import mongoose from "mongoose"

const UrinalysisSchema = new mongoose.Schema({
    color: { type: String },
    character: { type: String },
    reangentStrip: { type: String },
    glucosLevel: { type: Number },
    bilirubin: { type: Number },
    ketoneLevel: { type: Number },
    specificGravity: { type: Number },
    bloodLevel: { type: Number },
    phLevel: { type: Number },
    proteinLevel: { type: Number },
    urobilinogenLevel: { type: Number },
    nitrate: { type: Number },
    leukocyteLevel: { type: String },
    redBloodCellLevel: { type: String },
    pusLevel: { type: String },
    calciumOxaletes: { type: String },
    amorphousUrates: { type: String },
    uricAcid: { type: Number },
    amorphousPhosphates: { type: String },
    triplePhosphate: { type: String },
    squamousEpithelialCells: { type: String },
    roundEpithelialCells: { type: String },
    bacteria: { type: String },
    mucusThreads: { type: String },
    yeastCells: { type: String },
    remarks: { type: String },
    serviceProvider: { type: String },
    recordStat : { type: Boolean, default: true }
},{
    timestamps: true
})

export const UrinalysisModel = mongoose.model("urinalysis_lab", UrinalysisSchema);