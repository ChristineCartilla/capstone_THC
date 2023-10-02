import express from "express";
import { ProfileModel } from "../models/Profile.js";
import { MedicalRecordModel } from "../models/MedicalRecord.js";
import { HematologyModel } from "../models/Hematology.js";

const router = express.Router();

// ADDING INSTANCE IN AN EXISTING PROFILE
router.post("/add/:id", async (req, res) => {
    const profId = req.params.id;

    try {
        const findProfile = ProfileModel.findById({_id: profId});
        if(findProfile){
            const serviceInstance = new HematologyModel(req.body);
            await serviceInstance.save();

            const hemRec = await MedicalRecordModel.create({
                service_id: serviceInstance._id,
                service_name: "Hematology"
            })

            const profile = await ProfileModel.findOneAndUpdate(
                { _id: profId },
                {
                    $push: { medical_records: hemRec._id }
                }
            )
            if(profile){
                return res.json("Hematology Record Successfully Added");
            } else {
                return res.json("Error Occurred when adding to Profile");
            }
        }
        return res.json("Cannot Add Hematology Record, Profile Not Found");
    } catch (error) {
        console.log(error);
    }
})

export {router as hematologyRouter}