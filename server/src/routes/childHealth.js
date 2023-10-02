import express from "express";
import { ProfileModel } from "../models/Profile.js";
import { MedicalRecordModel } from "../models/MedicalRecord.js";
import { ChildHealthRecordModel } from "../models/ChildHealthRecord.js";
import { ChildHealthAssessmentModel } from "../models/ChildHealthAssessment.js";
import { ChildHealthVaccineModel } from "../models/ChildHealthVaccine.js";

const router = express.Router();

// ADDING INSTANCE IN AN EXISTING PROFILE
router.post("/add/:id", async (req, res) => {
    const profId = req.params.id;

    try {
        const findProfile = ProfileModel.findById({_id: profId});
        if(findProfile){
            const serviceInstance = new ChildHealthRecordModel(req.body);
            await serviceInstance.save();

            const childRec = await MedicalRecordModel.create({
                service_id: serviceInstance._id,
                service_name: "Immunization"
            })

            const profile = await ProfileModel.findOneAndUpdate(
                { _id: profId },
                {
                    $push: { medical_records: childRec._id }
                }
            )
            if(profile){
                return res.json("Child Health Record Successfully Added");
            } else {
                return res.json("Error Occurred when adding to Profile");
            }
        }
        return res.json("Cannot Add Child Health Record, Profile Not Found");
    } catch (error) {
        console.log(error);
    }
})

// ADDING ASSESSMENT IN AN EXISTING INSTANCE
router.post("/addassessment/:recordid", async (req, res) => {
    const recordid = req.params.recordid;

    try {
        const childRec = ChildHealthRecordModel.findById({_id: recordid});
        if(childRec){
            const serviceInstanceAssessment = new ChildHealthAssessmentModel(req.body);
            await serviceInstanceAssessment.save();

            const childRecAssessment = await ChildHealthRecordModel.findOneAndUpdate(
                { _id: recordid },
                {
                    $push: { childHealthAssessment: serviceInstanceAssessment._id }
                }
            )
            if(childRecAssessment){
                return res.json("Child Health Assessment Record Successfully Added");
            } else {
                return res.json("Error Occurred when adding to Profile");
            }
        }
        return res.json("Cannot Add Child Health Assessment Record, Profile Not Found");
    } catch (error) {
        console.log(error);
    }
})

// ADDING VACCINE IN AN EXISTING INSTANCE
router.post("/addvaccine/:recordid", async (req, res) => {
    const recordid = req.params.recordid;

    try {
        const childRec = ChildHealthRecordModel.findById({_id: recordid});
        if(childRec){
            const serviceInstanceVaccine = new ChildHealthVaccineModel(req.body);
            await serviceInstanceVaccine.save();

            const childRecAssessment = await ChildHealthRecordModel.findOneAndUpdate(
                { _id: recordid },
                {
                    $push: { childHealthVaccine: serviceInstanceVaccine._id }
                }
            )
            if(childRecAssessment){
                return res.json("Child Health Vaccine Record Successfully Added");
            } else {
                return res.json("Error Occurred when adding to Profile");
            }
        }
        return res.json("Cannot Add Child Health Vaccine Record, Profile Not Found");
    } catch (error) {
        console.log(error);
    }
})

// FETCHING SPECIFIC RECORD WITH ASSESSMENTS AND VACINES
router.get("/:recordid", async(req, res) => {
    const recordid = req.params.recordid;

    try {
        const childRec = await ChildHealthRecordModel
            .findById({_id: recordid})
            .populate('childHealthVaccine')
            .populate('childHealthAssessment');
        res.json(childRec);
    } catch (error) {
        res.json(error);
    }
})

// FETCHING SPECIFIC ASSESSMENT
router.get("/:recordid", async(req, res) => {
    const recordid = req.params.recordid;

    try {
        const childRec = await ChildHealthAssessmentModel.findById({_id: recordid})
        res.json(childRec);
    } catch (error) {
        res.json(error);
    }
})

// FETCHING SPECIFIC VACCINE
router.get("/:recordid", async(req, res) => {
    const recordid = req.params.recordid;

    try {
        const childRec = await ChildHealthVaccineModel.findById({_id: recordid})
        res.json(childRec);
    } catch (error) {
        res.json(error);
    }
})

export {router as childHealthRouter}