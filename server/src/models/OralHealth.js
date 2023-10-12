import mongoose from "mongoose";

const OralHealthSchema = new mongoose.Schema({
    dentalCaries: { type: Boolean },
    gingivitis: { type: Boolean },
    periodontalDisease: { type: Boolean },
    debris: { type: Boolean },
    calculus: { type: Boolean },
    abnormalGrowth: { type: Boolean },
    cleftLip: { type: Boolean },
    no_permTeethPres: { type: Number },
    no_permSoundTeeth: { type: Number },
    no_permDecayedTeeth: { type: Number },
    no_permMissingTeeth: { type: Number },
    no_permFilledTeeth: { type: Number },
    totalDMFTeeth: { type: Number },
    no_tempTeethPres: { type: Number },
    no_tempSoundTeeth: { type: Number },
    no_tempDecayedTeeth: { type: Number },
    no_tempFilledTeeth: { type: Number },
    totalDFTeeth: { type: Number },
    sugarBvrgs: { type: Number },
    freq_alcohol: { type: Number },
    freq_tobacco: { type: Number }, 
    serviceProvider: { type: String },
    medicalHistory: { type: mongoose.SchemaTypes.ObjectId, ref:"medical_history" },
    recordStat : { type: Boolean, default: true }
},{
    timestamps: true
})

export const OralHealthModel = mongoose.model("oral_health", OralHealthSchema);