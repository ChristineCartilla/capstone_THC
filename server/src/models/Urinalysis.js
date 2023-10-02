import mongoose from "mongoose"

const UrinalysisSchema = new mongoose.Schema({
    color: { type: String },
    character: { type: String },
    reangentStrip: { type: String },
    glucosLevel: { type: String },
    bilirubin: { type: String },
    ketoneLevel: { type: String },
    specificGravity: { type: String },
    bloodLevel: { type: String },
    phLevel: { type: String },
    proteinLevel: { type: String },
    urobilinogenLevel: { type: String },
    leukocyteLevel: { type: String },
    redBloodCellLebel: { type: String },
    pusLevel: { type: String },
    calciumOxaletes: { type: String },
    amorphousUrates: { type: String },
    uricAcid: { type: String },
    amorphousPhosphates: { type: String },
    triplePhosphate: { type: String },
    squamousEpithelialCells: { type: String },
    roundEpithelialCells: { type: String },
    bacteria: { type: String },
    mucusThreads: { type: String },
    yeastCells: { type: String },
    remarks: { type: String },
    serviceProvider: { type: String },
})

export const UrinalysisModel = mongoose.model("urinalysis_lab", UrinalysisSchema)