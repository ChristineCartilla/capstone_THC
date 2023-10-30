import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import CryptoJS from 'crypto-js';
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

function encryptCRPYTO(passwordPlainText){
    var secretKey = "THC2023CAPSTONEproject"
    var ciphertext = CryptoJS.AES.encrypt(passwordPlainText, secretKey).toString();
    return ciphertext;
}

function decryptCRPYTO(ciphertext){
    var secretKey = "THC2023CAPSTONEproject"
    var bytes  = CryptoJS.AES.decrypt(ciphertext, secretKey);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
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

// GETTING SPECIFIC ACCOUNT
router.get("/specaccount/:accid", async (req, res) => {
    const accid = req.params.accid;

    try {
        const data = await AccountModel.find({_id:accid});
        const decryptPassword = decryptCRPYTO(data[0].password);
        // res.json({a:data[0].password, b:decryptPassword})
        res.json([{ ...data[0]._doc, password: decryptPassword }]);
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

//GETTING ACCOUNT ID FROM PROVIDED PROFILE ID
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
            if(user.acc_type === "Worker" || user.acc_type === "Superadmin"){
                const isPasswordValid = decryptCRPYTO(user.password) == loginPassword;
                if(!isPasswordValid){
                    retValMsg = "Incorrect Password... Try Again";
                } else{
                    return res.json({accountId: user._id, profileId: user.profile[0]._id, workerType: user.profile[0].user_type});    
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
                password: encryptCRPYTO("THC2023Talambandefaultpassword")
            }
        )
        

        res.json(accdata);
    } catch (error) {
        
    }
})

// DELETE ALL DOCUMENTS IN A COLLECTION (MONGO DB)
router.delete("/deleteall", async (req,res) => {
    try {
        await AccountModel.deleteMany({});
        res.json("deleted all");
    } catch (error) {
        res.json(error)
    }
})

// ENCRYPTION TESTING
router.get("/encrypt", async (req, res) => {
    var key = 'THC2023CAPSTONE2023';
    var plaintext = 'AAVe/UG1eMzisQZKHh6Dorc+6GQOUY45qgdhRuRM8Ijw';
    var buffer = Buffer.from(plaintext);
    
    // var encryptedPlainText = aes256.encrypt(key, plaintext);
    var decryptedPlainText = aes256.decrypt(key, plaintext);

    res.json({decryptedPlainText})
})
export { router as accountRouter };