import mongoose from "mongoose"


const AccountSchema = new mongoose.Schema({
    acc_type: {
        type: String,
        enum: ["Resident", "Worker"],
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,

        required: true,
        min: 8
    },
    acc_status: {
        type: String,
        enum: ["Active", "Pending", "InActive", "Disapproved"],
        default: "Pending",
        required: true
    },
    profile: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'profiles'
    }]
},{
    timestamps: true
})

export const AccountModel = mongoose.model("accounts", AccountSchema);