import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { AccountModel } from "../models/Accounts.js";
import { ProfileModel } from "../models/Profile.js";

const router = express.Router();

// GETTING ALL ACCOUNTS
router.get("/", async (req, res) => {
    try {
        const data = await AccountModel.find({});
        res.json(data);
    } catch (error) {
        res.json(error);
    }
})

// GET ALL FAMILY MEMBER OF A SPECIFIC ACCOUNT
router.get("/:accid", async (req, res) => {
    const accId = req.params.accid;

    try {
        const data = await AccountModel
        .findOne({_id: accId})
        .populate('profile');
        
        res.json(data);
    } catch (error) {
        res.json(error);
    }
})

// ADDING NEW ACCOUNT TOGETHER WITH A FIRST PROFILE
router.post("/register", async (req, res) => {
    const {
        acc_type, email, phone, password, acc_status,
        prof_status, relationship, user_type, first_name, last_name, middle_name, gender, birthDate, birthPlace, educAttain, occupation, contactNo, civilStatus, nationality, street, barangay, municipality, zipCode
    } = req.body;
    
    try {
        const user = await AccountModel.findOne({ email });
        if(user){
            return res.json({message: "Account Already exist"});
        }
        const newProf = new ProfileModel({prof_status, relationship, user_type, first_name, last_name, middle_name, gender, birthDate, birthPlace, educAttain, occupation, contactNo, civilStatus, nationality, street, barangay, municipality, zipCode});
        await newProf.save()

        const profId = newProf._id;
        const newAcc = new AccountModel({acc_type, email, phone, password, acc_status, profile: profId});
        await newAcc.save();

        res.json({message: "Account Successfully Created"});
    } catch (error) {
        console.log(error);
    }
})


export { router as accountRouter };