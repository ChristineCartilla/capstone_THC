import express from "express";
import { ProfileModel } from "../models/Profile.js";
import { MedicalRecordModel } from "../models/MedicalRecord.js";
import { OralHealthModel } from "../models/OralHealth.js";
import { MedicalHistoryModel } from "../models/MedicalHistory.js";

const router = express.Router();

// ADDING INSTANCE IN AN EXISTING PROFILE
router.post("/add/:id", async (req, res) => {
    const profId = req.params.id;

    try {
        const findProfile = ProfileModel.findById({_id: profId});
        if(findProfile){
            const medicalHis = new MedicalHistoryModel(req.body);
            await medicalHis.save();

            const serviceInstance = new OralHealthModel({...req.body, medicalHistory: medicalHis._id});
            await serviceInstance.save();

            const oralHealthRec = await MedicalRecordModel.create({
                service_id: serviceInstance._id,
                service_name: "OralHealth",
                reference: "oral_health"
            })

            const profile = await ProfileModel.findOneAndUpdate(
                { _id: profId },
                {
                    $push: { medical_records: oralHealthRec._id }
                }
            )
            if(oralHealthRec){
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

// FETCH SPECIFIC RESIDENT WITH ORAL HEALTH RECORDS
router.get("/:profid", async (req, res) => {
    const profid = req.params.profid;

    try {      
        const fetchprofiles = await ProfileModel
            .findById({_id: profid})
            .populate({
                path: "medical_records",
                populate: { path: "service_id", model: "oral_health" }
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
            const record = await OralHealthModel.findOne({_id: recid}).populate('medicalHistory');
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
        const record = await OralHealthModel.findByIdAndUpdate(
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
        const findRec = await OralHealthModel.findById({ _id: recid });
        const findRes = await ProfileModel.findById({ _id: profid });
        if(!findRec && !findRes){
            returnResponseVal = "Error Occured in Deleting Record.";
        } else if(findRec && !findRes){
            returnResponseVal = "Deletion Error... Resident Not Found.";
        } else if(!findRec && findRes){
            returnResponseVal = "Deletion Error... Record Not Found.";
        } else {
            const delRec = await OralHealthModel.findByIdAndDelete({_id: recid});
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

export {router as oralHealthRouter}