import express from "express";
import { VitalSignModel } from "../models/VItalSigns.js";
import { ProfileModel } from "../models/Profile.js";

const router = express.Router();

// ADDING VITAL SIGN TO AN EXISTING PROFILE
router.post("/add/:id", async (req, res) => {
    const profileId = req.params.id;
    
    try {
        const findProfile = await ProfileModel.findById({_id:profileId});
        if(findProfile){
            const vitalSignInstance = new VitalSignModel(req.body);
            await vitalSignInstance.save();

            const profile = await ProfileModel.findOneAndUpdate(
                { _id: profileId },
                {
                    $push: { vital_signs: vitalSignInstance._id }
                }
            )
            if(profile){
                return res.json("Vital Sign Successfully Added");
            } else {
                return res.json("Error Occurred when adding to Profile");
            }
        }
        return res.json("Cannot Add Vital Sign, Profile Not Found");
    } catch (error) {
        console.log(error);
    }
    
})

// FETCH SPECIFIC RESIDENT WITH MEDICAL RECORDS
router.get("/:profid", async (req, res) => {
    const profid = req.params.profid;

    try {      
        const fetchprofiles = await ProfileModel
            .findById({_id: profid})
            .populate('vital_signs')
            .exec();

        // console.log(fetchprofiles)
        res.json(fetchprofiles);
    } catch (error) {
        res.json(error);
    }
})

// FETCH SPECIFIC RECORD OF SPECIFIC RESIDENT
router.get("/getrecord/:recid", async (req, res) => {
    const recid = req.params.recid;

    try {      
        const getrec = await VitalSignModel
            .findById({_id: recid})
            .exec();

        // console.log(fetchprofiles)
        res.json(getrec);
    } catch (error) {
        res.json(error);
    }
})
export { router as vitalSignRouter };