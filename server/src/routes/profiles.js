import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { ProfileModel } from "../models/Profile.js";
import { AccountModel } from "../models/Accounts.js";

const router = express.Router();

// ADDING PROFILE IN AN EXISTING ACCOUNT
router.post("/addprofile/:id", async (req, res) => {
    const accId = req.params.id;
    // const {status, relationship, user_type, first_name, last_name, middle_name, gender, birthDate, birthPlace, educAttain, occupation, contactNo, civilStatus, nationality, street, barangay, municipality, zipCode} = req.body;
    
    try {
        const findAcc = await AccountModel.findById({_id: accId});
        // CHECK IF ACCOUNT EXIST
        if(findAcc != null){
            const user = new ProfileModel(req.body);
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