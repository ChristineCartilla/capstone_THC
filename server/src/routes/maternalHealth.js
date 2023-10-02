import express from "express";
import { ProfileModel } from "../models/Profile.js";
import { MedicalRecordModel } from "../models/MedicalRecord.js";
import { MaternalHealthModel } from "../models/MaternalHealth.js";

const router = express.Router();

// ADDING INSTANCE IN AN EXISTING PROFILE
router.post("/add/:id", async (req, res) => {
    const profId = req.params.id;

    try {
        const findProfile = ProfileModel.findById({_id: profId});
        if(findProfile){
            const serviceInstance = new MaternalHealthModel(req.body);
            await serviceInstance.save();

            const hemRec = await MedicalRecordModel.create({
                service_id: serviceInstance._id,
                service_name: "Prenatal"
            })

            const profile = await ProfileModel.findOneAndUpdate(
                { _id: profId },
                {
                    $push: { medical_records: hemRec._id }
                }
            )
            if(profile){
                return res.json("Maternal Health Record Successfully Added");
            } else {
                return res.json("Error Occurred when adding to Profile");
            }
        }
        return res.json("Cannot Add Maternal Health Record, Profile Not Found");
    } catch (error) {
        console.log(error);
    }
})

// ADD OBSTETRICAL HISTORY TO THE SPECIFIC INSTANCE (not final)
router.post("/addobstetrical/:recordid", async (req, res) => {
    const recordid = req.params.recordid;

    try {
        const findRec = await MaternalHealthModel.findById({_id: recordid});
        if(findRec){
            res.json("found");
        } else {
            res.json("not found");
        }
    } catch (error) {
        res.json(error);
    }
})

export {router as maternalHealthRouter}