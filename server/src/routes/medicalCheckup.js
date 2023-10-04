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
                service_name: "MedicalCheckUp",
                reference: "medical_checkup"
            })

            const profile = await ProfileModel.findOneAndUpdate(
                { _id: profId },
                {
                    $push: { medical_records: medRec._id },
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

// FETCH SPECIFIC RECORD OF SPECIFIC RESIDENT
router.get("/getrecord/:profid/:recid", async (req, res) => {
    const profid = req.params.profid;
    const recid = req.params.recid;

    try {
        if(profid && recid){
            const resident = await ProfileModel.findById({_id: profid});
            const record = await MedicalCheckupModel.findOne({_id: recid});
            res.json({resident, record});
        }
    } catch (error) {
        res.json(error);
    }
})

// FETCH SPECIFIC RESIDENT WITH MEDICAL RECORDS
router.get("/:profid", async (req, res) => {
    const profid = req.params.profid;

    try {      
        const fetchprofiles = await ProfileModel
            .findById({_id: profid})
            .populate({
                path: "medical_records",
                populate: { path: "service_id", model: "medical_checkup" }
            })
            .exec();

        // console.log(fetchprofiles)
        res.json(fetchprofiles);
    } catch (error) {
        res.json(error);
    }
})

// // FETCH ALL RECORDS HAVING MEDICAL RECORD
// router.get("/", async (req, res) => {

//     try {
//         let medRecId = [];
//         const fetchAllMedRecs = await MedicalRecordModel.find();
//         const fetchMedCheckMedRecs = fetchAllMedRecs.filter(function(medCheckRec){
//             if(medCheckRec.service_name == "MedicalCheckUp"){
//                 medRecId.push(medCheckRec._id);
//             }
//         });
        
//         const fetchprofiles = await ProfileModel.find();

//         const res = fetchprofiles.filter((prof) => {
//             return prof.medical_records.some((mr) =>{
//               return medRecId.map((rec)=>{
//                 return rec == mr
//               })
//             })
//         })
//         console.log(res)
//         res.json(medRecId);
//     } catch (error) {
//         res.json(error);
//     }
// })


export { router as medicalCheckupRouter };