import express from "express";
import { ProfileModel } from "../models/Profile.js";
import { MedicalCheckupModel } from "../models/MedicalCheckup.js";
import { MedicalRecordModel } from "../models/MedicalRecord.js";

const router = express.Router();

// ADDING INSTANCE IN AN EXISTING PROFILE
router.post("/add/:id", async (req, res) => {
    const profId = req.params.id;

    try {
        const findProfile = ProfileModel.findById({_id: profId});
        if(findProfile){
            const serviceInstance = new MedicalCheckupModel(req.body);
            await serviceInstance.save();

            const medRec = await MedicalRecordModel.create({
                service_id: serviceInstance._id,
                service_name: "MedicalCheckUp"
            })

            const profile = await ProfileModel.findOneAndUpdate(
                { _id: profId },
                {
                    $push: { medical_records: medRec._id }
                }
            )
            if(profile){
                return res.json("Medical Checkup Record Successfully Added");
            } else {
                return res.json("Error Occurred when adding to Profile");
            }
        }
        return res.json("Cannot Add Medical Checkup Record, Profile Not Found");
    } catch (error) {
        console.log(error);
    }
})

export { router as medicalCheckupRouter };