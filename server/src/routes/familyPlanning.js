import express from "express";
import { ProfileModel } from "../models/Profile.js";
import { MedicalRecordModel } from "../models/MedicalRecord.js";
import { ObstetricalHistoryModel } from "../models/ObstetricalHistory.js";
import { FamilyPlanningModel } from "../models/FamilyPlanning.js";
import { MedicalHistoryModel } from "../models/MedicalHistory.js";
import { FamilyPlanningAssessmentModel } from "../models/FamilyPlanningAssessment.js";

function getAge(date){
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;  
}

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

            const serviceInstance = new FamilyPlanningModel({...req.body, spouseAge: getAge(req.body.spouseDoB)});
            await serviceInstance.save();
            await FamilyPlanningModel.findOneAndUpdate(
                { _id: serviceInstance._id },
                {
                    obstetricalHistory: obstetricalInstance._id,
                    medicalHistory: medicalHistoryInstance._id
                }
            )

            const matRec = await MedicalRecordModel.create({
                service_id: serviceInstance._id,
                service_name: "FamilyPlanning",
                reference: "family_planning"
            })

            const profile = await ProfileModel.findOneAndUpdate(
                { _id: profId },
                {
                    $push: { medical_records: matRec._id }
                }
            )
            if(profile){
                return res.json("Family Planning Record Successfully Added");
            } else {
                return res.json("Error Occurred when adding to Profile");
            }
        }
        return res.json("Cannot Add Family Planning Record, Profile Not Found");
    } catch (error) {
        console.log(error);
    }
})

// ADD ASSESSMENT TO THE SPECIFIC INSTANCE
router.post("/add/assessment/:profid/:recordid", async (req, res) => {
    const recordid = req.params.recordid;
    const profid = req.params.profid;

    try {
        const findRecord = FamilyPlanningModel.findById({_id: recordid});
        if(findRecord){
            const fetchVS = await ProfileModel
            .findById({_id: profid})
            .populate('vital_signs');

            let listVS = fetchVS.vital_signs;
            let latestVS = listVS[listVS.length-1].id;

            const assessment = new FamilyPlanningAssessmentModel(
                { ...req.body , vitalSign: latestVS }
            );
            await assessment.save();
            const matHealthRec = await FamilyPlanningModel.findByIdAndUpdate(
                {_id: recordid},
                {
                    $push: { familyPlanningAssessment: assessment._id }
                }
            )
            if(matHealthRec){
                return res.json("Family Planning Assessment Record Successfully Added");
            } else {
                return res.json("Error Occurred when adding to Record");
            }
        }
        return res.json("Cannot Add Family Planning Assessment Record, Record Not Found");
    } catch (error) {
        res.json(error);
    }
})

// FETCH SPECIFIC RESIDENT WITH FAMILY PLANNING RECORDS
router.get("/:profid", async (req, res) => {
    const profid = req.params.profid;

    try {      
        const fetchprofiles = await ProfileModel
            .findById({_id: profid})
            .populate({
                path: "medical_records",
                populate: ({ 
                    path: "service_id", 
                    model: "family_planning",
                    populate: { path: "obstetricalHistory", model: "obstetrical_history" },

                }),
            })
            .populate({
                path: "medical_records",
                populate: ({ 
                    path: "service_id", 
                    model: "family_planning",
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
            const record = await FamilyPlanningModel
                .findOne({_id: recid})
                .populate("medicalHistory")
                .populate("obstetricalHistory")
                .populate("familyPlanningAssessment");
            res.json({resident, record});
        }
    } catch (error) {
        res.json(error);
    }
})

// FETCH SPECIFIC ASSESSMENT
router.get("/assessment/:recid", async (req, res) => {
    const recid = req.params.recid

    try {
        const assessmentInstance = await FamilyPlanningAssessmentModel.findById({_id: recid}).populate("vitalSign");
        res.json(assessmentInstance)
    } catch (error) {
        res.json(error)
    }
})


export { router as familyPlanningRouter };