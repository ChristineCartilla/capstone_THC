import express from "express";
import { VitalSignModel } from "../models/VItalSigns.js";
import { ProfileModel } from "../models/Profile.js";

function getBmi(kg, cm){
    return kg/(cm*cm).toFixed(3);
}

const router = express.Router();

// ADDING VITAL SIGN TO AN EXISTING PROFILE
router.post("/add/:id", async (req, res) => {
    const profileId = req.params.id;
    
    try {
        const findProfile = await ProfileModel.findById({_id:profileId});
        if(findProfile){
            const currentBMI = getBmi(req.body.weight, req.body.height);
            const vitalSignInstance = new VitalSignModel({...req.body, bmi: currentBMI});
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

router.get("/getlatestrec/:profid", async (req, res) => {
    const profid = req.params.profid;

    try {      
        const fetchprofiles = await ProfileModel
            .findById({_id: profid})
            .populate('vital_signs');

        let vitalSigns = fetchprofiles.vital_signs;

        res.json(vitalSigns[vitalSigns.length-1]);
    } catch (error) {
        res.json(error);
    }
})

// HARD DELETE RECORD
router.delete("/delete/:profid/:recid", async (req, res) => {
    const profid = req.params.profid;
    const recid = req.params.recid;

    try {
        const findRec = await VitalSignModel.findById({ _id: recid });
        const findRes = await ProfileModel.findById({ _id: profid });
        if(!findRec && !findRes){
            return res.json("Error Occured in Deleting Record.");
        } else if(findRec && !findRes){
            return res.json("Deletion Error... Resident Not Found.");
        } else if(!findRec && findRes){
            return res.json("Deletion Error... Record Not Found.");
        } else {
            const delRec = await VitalSignModel.findByIdAndDelete({_id: recid});
            const delRecRes = await ProfileModel.findByIdAndUpdate(
                {_id : profid},
                {
                    $pull: {
                        vital_signs: recid
                    }
                }
            )

            if(delRec && delRecRes){
                return res.json("Record Deleted Successfully");
            } else {
                return res.json("Record Deleted Unsuccessful");
            }

        }
    } catch (error) {
        res.json(error);
    }
})

export { router as vitalSignRouter };