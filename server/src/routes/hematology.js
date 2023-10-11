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
                service_name: "Hematology",
                reference: "hematology_lab"
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

// FETCH SPECIFIC RESIDENT WITH HEMATOLOGY RECORDS
router.get("/:profid", async (req, res) => {
    const profid = req.params.profid;

    try {      
        const fetchprofiles = await ProfileModel
            .findById({_id: profid})
            .populate({
                path: "medical_records",
                populate: { path: "service_id", model: "hematology_lab" }
            })
            .exec();

        // console.log(fetchprofiles)
        res.json(fetchprofiles);
    } catch (error) {
        res.json(error);
    }
})

// FETCH SPECIFIC RECORD OF SPECIFIC RESIDENT
router.get("/getrecord/:profid/:recid", async (req, res) => {
    const profid = req.params.profid;
    const recid = req.params.recid;

    try {
        if(profid && recid){
            const resident = await ProfileModel.findById({_id: profid});
            const record = await HematologyModel.findOne({_id: recid});
            res.json({resident, record});
        }
    } catch (error) {
        res.json(error);
    }
})

// SOFT DELETE RECORD
router.patch("/delete/:recid", async (req, res) => {
    const recid = req.params.recid;

    try {
        const record = await HematologyModel.findByIdAndUpdate(
            {_id: recid},
            {
                recordStat: false
            }
            )
        if(record){
            res.json("Record Status: FALSE");
        } else {
            res.json("Updating Record Unsuccessful");
        }
    } catch (error) {
        res.json(error);
    }
})

// HARD DELETE RECORD
router.delete("/hdelete/:profid/:recid", async (req, res) => {
    const profid = req.params.profid;
    const recid = req.params.recid;

    try {
        let returnResponseVal;
        const findRec = await HematologyModel.findById({ _id: recid });
        const findRes = await ProfileModel.findById({ _id: profid });
        if(!findRec && !findRes){
            returnResponseVal = "Error Occured in Deleting Record.";
        } else if(findRec && !findRes){
            returnResponseVal = "Deletion Error... Resident Not Found.";
        } else if(!findRec && findRes){
            returnResponseVal = "Deletion Error... Record Not Found.";
        } else {
            const delRec = await HematologyModel.findByIdAndDelete({_id: recid});
            const delMedRec = await MedicalRecordModel.findOneAndDelete({service_id: delRec._id});
            const delRecRes = await ProfileModel.findByIdAndUpdate(
                {_id : profid},
                {
                    $pull: {
                        medical_records: delMedRec._id
                    }
                }
            )
            if(delRec._id && delMedRec._id && delRecRes._id){
                returnResponseVal = "Record Deleted Successfully";
            } else {
                returnResponseVal ="Record Deleted Unsuccessful";
            }

        }
        return res.json(returnResponseVal)
    } catch (error) {
        res.json(error);
    }
})

export {router as hematologyRouter}