import express from "express";
import { ProfileModel } from "../models/Profile.js";
import { MedicalRecordModel } from "../models/MedicalRecord.js";
import { MaternalHealthModel } from "../models/MaternalHealth.js";
import { ObstetricalHistoryModel } from "../models/ObstetricalHistory.js";
import { MedicalHistoryModel } from "../models/MedicalHistory.js";
import { MaternalHealthAssessmentModel } from "../models/MaternalHealthAssessment.js";

const router = express.Router();

// ADDING INSTANCE IN AN EXISTING PROFILE
router.post("/add/:id", async (req, res) => {
    const profId = req.params.id;

    try {
        const findProfile = ProfileModel.findById({_id: profId});
        if(findProfile){
            const obstetricalInstance = new ObstetricalHistoryModel(req.body);
            await obstetricalInstance.save();

            const medicalHistoryInstance = new MedicalHistoryModel(req.body);
            await medicalHistoryInstance.save();

            const serviceInstance = new MaternalHealthModel(req.body);
            await serviceInstance.save();
            await MaternalHealthModel.findOneAndUpdate(
                { _id: serviceInstance._id },
                {
                    obstetricalHistory: obstetricalInstance._id,
                    medicalHistory: medicalHistoryInstance._id
                }
            )

            const matRec = await MedicalRecordModel.create({
                service_id: serviceInstance._id,
                service_name: "Prenatal",
                reference: "maternal_health_record"
            })

            const profile = await ProfileModel.findOneAndUpdate(
                { _id: profId },
                {
                    $push: { medical_records: matRec._id }
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
router.post("/add/obstetrical/:recordid", async (req, res) => {
    const recordid = req.params.recordid;
    const profId = "091wasd2";

    try {
        const findRec = await MaternalHealthModel.findById({_id: recordid});
        if(findRec){
            const obstetricalInstance = new ObstetricalHistoryModel(req.body);
            await obstetricalInstance.save();

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
        } else {
            return res.json("Cannot Add Child Health Assessment Record, Profile Not Found");
        }
    } catch (error) {
        res.json(error);
    }
})

router.post("/add/assessment/:recordid", async (req, res) => {
    const recordid = req.params.recordid;

    try {
        const findRecord = MaternalHealthModel.findById({_id: recordid});
        if(findRecord){
            const assessment = new MaternalHealthAssessmentModel(req.body);
            await assessment.save();

            const matHealthRec = await MaternalHealthModel.findByIdAndUpdate(
                {_id: recordid},
                {
                    $push: { maternalHealthAssessment: assessment._id }
                }
            )
            if(matHealthRec){
                return res.json("Maternal Health Assessment Record Successfully Added");
            } else {
                return res.json("Error Occurred when adding to Profile");
            }
        }
        return res.json("Cannot Add Maternal Health Assessment Record, Profile Not Found");
    } catch (error) {
        res.json(error);
    }
})

// FETCH SPECIFIC RESIDENT WITH MATERNAL HEALTH RECORDS
router.get("/:profid", async (req, res) => {
    const profid = req.params.profid;

    try {      
        const fetchprofiles = await ProfileModel
            .findById({_id: profid})
            .populate({
                path: "medical_records",
                populate: ({ 
                    path: "service_id", 
                    model: "maternal_health_record",
                    populate: { path: "obstetricalHistory", model: "obstetrical_history" },

                }),
            })
            .populate({
                path: "medical_records",
                populate: ({ 
                    path: "service_id", 
                    model: "maternal_health_record",
                    populate: { path: "medicalHistory", model: "medical_history" },

                }),
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
            const record = await MaternalHealthModel.findOne({_id: recid});
            res.json({resident, record});
        }
    } catch (error) {
        res.json(error);
    }
})

export {router as maternalHealthRouter}