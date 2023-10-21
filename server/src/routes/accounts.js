import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { AccountModel } from "../models/Accounts.js";
import { ProfileModel } from "../models/Profile.js";


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

// GETTING ALL ACCOUNTS
router.get("/", async (req, res) => {
    try {
        const data = await AccountModel.find({}).populate("profile");
        res.json(data);
    } catch (error) {
        res.json(error);
    }
})

// GETTING ALL WORKER ACCOUNTS WITH PROFILES
router.get("/fetchworker", async (req, res) => {
    try {
        const data = await AccountModel.find({acc_type : "Worker"}).populate("profile");
        res.json(data);
    } catch (error) {
        res.json(error);
    }
})

// GETTING ALL RESIDENT ACCOUNTS WITH PROFILES
router.get("/fetchresident", async (req, res) => {
    try {
        const data = await AccountModel.find({acc_type : "Resident"}).populate("profile");
        res.json(data);
    } catch (error) {
        res.json(error);
    }
})

// GETING ALL FAMILY MEMBER OF A RESIDENT/WORKER ACCOUNT
router.get("/fetchmember/:accid", async (req, res) => {
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

//GETTING ACCOUNT ID FROM PROVIDEC PROFILE ID
router.get("/fetchaccount/:profid", async (req, res) => {
    const profid = req.params.profid;

    try {
        const getAccount = await AccountModel
        .find({})
        .populate({
            path: 'profile',
            match: { _id: profid }
        })
        const specificAccount = getAccount.filter((acc) =>{
            return acc.profile[0] != null;
        })
        res.json(specificAccount[0]._id);
        
    } catch (error) {
        res.json(error);
    }
})

// ADDING NEW ACCOUNT TOGETHER WITH A FIRST PROFILE
router.post("/register", async (req, res) => {
    const age = getAge(req.body.birthDate);
    const {
        acc_type, email, phone, password, acc_status,
        prof_status, relationship, user_type, first_name, last_name, middle_name, gender, birthDate, birthPlace, educAttain, occupation, contactNo, civilStatus, nationality, street, barangay, municipality, zipCode
    } = req.body;
    
    try {
        const user = await AccountModel.findOne({ email });
        if(user){
            return res.json({message: "Account Already exist"});
        }
        const newProf = new ProfileModel({prof_status, relationship, user_type, first_name, last_name, middle_name, gender, age, birthDate, birthPlace, educAttain, occupation, contactNo, civilStatus, nationality, street, barangay, municipality, zipCode});
        await newProf.save()

        const profId = newProf._id;
        const newAcc = new AccountModel({acc_type, email, phone, password, acc_status, profile: profId});
        await newAcc.save();

        res.json({message: "Account Successfully Created"});
    } catch (error) {
        console.log(error);
    }
})

// ADDING NEW ACCOUNT TOGETHER WITH A FIRST PROFILE FOR WORKER
router.post("/worker/register", async (req, res) => {
    const age = getAge(req.body.birthDate);
    const {
        acc_type, email, phone, acc_status,
        prof_status, relationship, user_type, first_name, last_name, middle_name, gender, birthDate, birthPlace, educAttain, occupation, contactNo, civilStatus, nationality, street, barangay, municipality, zipCode
    } = req.body;
    
    try {
        const user = await AccountModel.findOne({ email });
        if(user){
            return res.json({message: "Account Already exist"});
        }
        const newProf = new ProfileModel({prof_status:"Active", relationship:"Worker", user_type, first_name, last_name, middle_name, gender, age, birthDate, birthPlace, educAttain, occupation, contactNo, civilStatus, nationality, street, barangay, municipality, zipCode});
        await newProf.save()

        const profId = newProf._id;
        const newAcc = new AccountModel({acc_type:"Worker", email, phone, password: "THC2023Talambandefaultpassword", acc_status:"Active", profile: profId});
        await newAcc.save();

        res.json({message: "Account Successfully Created"});
    } catch (error) {
        console.log(error);
    }
})

// LOGIN ACCOUNT
router.post("/login", async (req, res) => {
    const {loginEmail, loginPassword} = req.body;
    let retValMsg;

    try {
        const user = await AccountModel.findOne({email: loginEmail, acc_status: "Active"}).populate("profile");
        if(!user){
            retValMsg = "Account Not Found";
        } else{
            if(user.acc_type === "Worker"){
                const isPasswordValid = user.password == loginPassword;
                if(!isPasswordValid){
                    retValMsg = "Incorrect Password... Try Again";
                } else{
                    return res.json({accountId: user._id, profileId: user.profile[0]._id});    
                }
            } else {
                retValMsg = "Unauthorized Account";
            }
        }
        return res.json(retValMsg);
    } catch (error) {
        res.json(error);
    }
})

// DEFAULT PASSWORD
router.patch("/setdefault/:profid", async (req, res) => {
    const profid = req.params.profid;

    try {
        const accdata = await AccountModel.findOneAndUpdate(
            {profile: profid},
            {
                password: "THC2023Talambandefaultpassword"
            }
        )
        

        res.json(accdata);
    } catch (error) {
        
    }
})

export { router as accountRouter };