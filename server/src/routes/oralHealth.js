import express from "express";
import { ProfileModel } from "../models/Profile.js";
import { MedicalRecordModel } from "../models/MedicalRecord.js";
import { OralHealthModel } from "../models/OralHealth.js";

const router = express.Router();

// ADDING INSTANCE IN AN EXISTING PROFILE
router.post("/add/:id", async (req, res) => {
    const profId = req.params.id;

    try {
        const findProfile = ProfileModel.findById({_id: profId});
        if(findProfile){
            const serviceInstance = new OralHealthModel(req.body);
            await serviceInstance.save();

            const oralHealthRec = await MedicalRecordModel.create({
                service_id: serviceInstance._id,
                service_name: "OralHealth"
            })

            const profile = await ProfileModel.findOneAndUpdate(
                { _id: profId },
                {
                    $push: { medical_records: oralHealthRec._id }
                }
            )
            if(profile){
                return res.json("Oral Health Record Successfully Added");
            } else {
                return res.json("Error Occurred when adding to Profile");
            }
        }
        return res.json("Cannot Add Oral Health Record, Profile Not Found");
    } catch (error) {
        console.log(error);
    }
})

export {router as oralHealthRouter}