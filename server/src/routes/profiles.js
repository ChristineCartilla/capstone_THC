import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { ProfileModel } from "../models/Profile.js";
import { AccountModel } from "../models/Accounts.js";

function getAge(date){
    const today = new Date();
    const birthDate = new Date(date);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;  
}

const router = express.Router();

// ADDING PROFILE IN AN EXISTING ACCOUNT
router.post("/addprofile/:id", async (req, res) => {
    const accId = req.params.id;
    // const {status, relationship, user_type, first_name, last_name, middle_name, gender, birthDate, birthPlace, educAttain, occupation, contactNo, civilStatus, nationality, street, barangay, municipality, zipCode} = req.body;
    
    try {
        const findAcc = await AccountModel.findById({_id: accId});
        // CHECK IF ACCOUNT EXIST
        if(findAcc != null){
            const age = getAge(req.body.birthDate);
            
            const user = new ProfileModel({...req.body, age:age});
            await user.save();
            const updateAcc = await AccountModel.findOneAndUpdate(
                { _id: accId },
                {
                    $push: {
                        profile: user._id,
                    }
                })
            // CHECK IF ADDING IS SUCCESSFUL
            if(updateAcc != null){
                return res.json("Profile Successfully Added to an Existing Profile"); 
            }
        };
        return res.json("Account Does Not Exist");
        
    } catch (error) {
        console.log(error);
    }
    
})

// GET ALL PROFILE
router.get("/", async (req, res) => {
    try {
        const data = await ProfileModel.find({});
        res.json(data);
    } catch (error) {
        res.json(error);
    }
})

// GET ALL RESIDENT PROFILE
router.get("/fetchresident", async (req, res) => {
    try {
        const data = await ProfileModel.find({relationship: "Resident"});
        res.json(data);
    } catch (error) {
        res.json(error);
    }
})

// GET ALL WORKER PROFILE
router.get("/fetchworker", async (req, res) => {
    try {
        const data = await ProfileModel.find({relationship: "Worker"});
        res.json(data);
    } catch (error) {
        res.json(error);
    }
})

// GET SPECIFIC PROFILE
router.get("/:id", async (req, res) => {
    const profId = req.params.id;
    try {
        const data = await ProfileModel.findOne({_id: profId});
        res.json(data);
    } catch (error) {
        res.json(error);
    }
})

// UPDATE SPECIFIC PROFILE DETAILS
router.patch("/updateprofile/:id", async (req, res) => {
    const profId = req.params.id;
    try {
        const data = await ProfileModel.findOneAndUpdate({_id: profId}, req.body, {new:true});
        res.json({data, message: "Profile Successfuly Updated"});
    } catch (error) {  
        res.json(error);
    }
})

// UPDATE SPECIFIC WORKER STATUS
router.patch("/worker/edit/:profid", async (req, res) => {
    const profId = req.params.profid;

    try {
        const data = await ProfileModel.findOneAndUpdate({_id: profId, prof_status: req.body.prof_status});
        res.json({message: "Worker Successfuly Updated"})
    } catch (error) {
        res.json(error);
    }
})

// UPDATE SPECIFIC RESIDENT STATUS: APPROVE
router.patch("/resident/approve/:profid", async (req, res) => {
    const profid = req.params.profid

    try {
        const data = await ProfileModel.findByIdAndUpdate({_id: profid},{prof_status: "Active"});
        res.json({message: "Resident Successfuly Activated"})
    } catch (error) {
        res.json(error)
    }
})

// UPDATE SPECIFIC RESIDENT STATUS: DISAPPROVE
router.patch("/resident/disapprove/:profid", async (req, res) => {
    const profid = req.params.profid

    try {
        const data = await ProfileModel.findByIdAndUpdate({_id: profid},{prof_status: "Inactive"});
        res.json({message: "Resident Successfuly Disapproved/Inactivated"})
    } catch (error) {
        res.json(error)
    }
})

// HARD DELETE PROFILE
router.delete("/deleteprofile/:id/:accid", async (req, res) => {
    const accId = req.params.accid
    const profId = req.params.id;

    try {
        const profile = await ProfileModel.findByIdAndDelete({_id: profId});
        if(profile){
            await AccountModel
            .findOneAndUpdate(
                {_id: accId},
                {
                    $pull: {profile: {$in: [profId]}}
                }
            );
        }
        
        res.json("Profile Successfully Deleted");
    } catch (error) {
        res.json(error);
    }
})

// // SOFT DELETE PROFILE
// router.get("/deleteprofile/:id/:accid", async (req, res) => {
//     const accId = req.params.accid
//     const profId = req.params.id;

//     try {
//         const profile = await ProfileModel.findByIdAndUpdate(
//             {_id: profId},
//             {

//             });

//         if(profile){
//             await AccountModel
//             .findOneAndUpdate(
//                 {_id: accId},
//                 {
//                     $pull: {profile: {$in: [profId]}}
//                 }
//             );
//         }
        
//         res.json("Profile Successfully Deleted");
//     } catch (error) {
//         res.json(error);
//     }
// })

export { router as profileRouter };