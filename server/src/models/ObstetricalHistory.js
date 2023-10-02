import mongoose from "mongoose";

const ObstetricalHistorySchema = new mongoose.Schema({
    numGravida: { type: Number },
    numPara: { type: Number },
    numFullterm: { type: Number },
    numPremature: { type: Number },
    lastMenstrualPeriod: { type: Date },
    menstrualFlow: { type: String },
    numBornAlive: { type: Number },
    numOfLivingChild: { type: Number },
    numOfAbortion: { type: Number },
    numOfStillBirth: { type: Number },
    typeOfLastDelivery: { type: String },
    dateOfLastDelivery: { type: String },
    numberOfLargeBabies: { type: Number },
    diabetes: { type: String },
    dysmenorrhea: { type: String },
    hydatidiformMole: { type: String },
    ectopicPregnancy: { type: String },
})

export const ObstetricalHistoryModel = mongoose.model("obstetrical_history", ObstetricalHistorySchema);