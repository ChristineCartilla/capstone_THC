import express from "express";
import { AccountModel } from "../models/Accounts.js";
import { ProfileModel } from "../models/Profile.js";
import { QueueModel } from "../models/Queue.js";


function getServiceProvider(service){
    let returnServiceProviderType;
    switch (service) {
        case "Prenatal":
            returnServiceProviderType = "Nurse"
            break;
        case "Immunization":
            returnServiceProviderType = "Nurse"
            break;
        case "Dental":
            returnServiceProviderType = "Dentist"
            break;
        case "Medical Checkup":
            returnServiceProviderType = "Doctor"
            break;
        case "Family Planning":
            returnServiceProviderType = "Nurse"
            break;
        case "Hematology":
            returnServiceProviderType = "Medtech"
            break;
        case "Urinalysis":
            returnServiceProviderType = "Medtech"
            break;
    }
    return returnServiceProviderType;
}


const router = express.Router();

// FETCH ALL QUEUE
router.get("/", async (req, res) => {
    try {
        const queue = await QueueModel.find({}).populate("profile_id");
        res.json(queue);
    } catch (error) {
        res.json(error);
    }
})

// FETCH ALL QUEUE FOR DOCTOR
router.get("/fetchdoctorque", async (req, res) => {
    try {
        const queue = await QueueModel.find({serviceProvider_type: "Doctor"}).populate("profile_id");
        const todayQueue = queue.filter((queueRec) => {
            const strdata = (queueRec.createdAt).toISOString().split('T')[0];
            const dateNoew = new Date();
            const strdDateNow = dateNoew.toISOString().split('T')[0];
            if(strdata == strdDateNow){
                return queueRec;
            }
        })
        res.json(todayQueue);
    } catch (error) {
        res.json(error);
    }
})

// FETCH ALL QUEUE FOR DENTIST
router.get("/fetchdentistque", async (req, res) => {
    try {
        const queue = await QueueModel.find({serviceProvider_type: "Denist"}).populate("profile_id");
        const todayQueue = queue.filter((queueRec) => {
            const strdata = (queueRec.createdAt).toISOString().split('T')[0];
            const dateNoew = new Date();
            const strdDateNow = dateNoew.toISOString().split('T')[0];
            if(strdata == strdDateNow){
                return queueRec;
            }
        })
        res.json(todayQueue);
    } catch (error) {
        res.json(error);
    }
})

// FETCH ALL QUEUE FOR MEDTECH
router.get("/fetchmedtechque", async (req, res) => {
    try {
        const queue = await QueueModel.find({serviceProvider_type: "Medtech"}).populate("profile_id");
        const todayQueue = queue.filter((queueRec) => {
            const strdata = (queueRec.createdAt).toISOString().split('T')[0];
            const dateNoew = new Date();
            const strdDateNow = dateNoew.toISOString().split('T')[0];
            if(strdata == strdDateNow){
                return queueRec;
            }
        })
        res.json(todayQueue);
    } catch (error) {
        res.json(error);
    }
})

// FETCH ALL QUEUE FOR NURSE
router.get("/fetchnurseque", async (req, res) => {
    try {
        const queue = await QueueModel.find({serviceProvider_type: "Nurse"}).populate("profile_id");
        const todayQueue = queue.filter((queueRec) => {
            const strdata = (queueRec.createdAt).toISOString().split('T')[0];
            const dateNoew = new Date();
            const strdDateNow = dateNoew.toISOString().split('T')[0];
            if(strdata == strdDateNow){
                return queueRec;
            }
        })
        res.json(todayQueue);
    } catch (error) {
        res.json(error);
    }
})

router.post("/addqueue/:profid", async (req, res) => {
    const profid = req.params.profid

    try {
        let ctr=0;
        const serviceProvider_type = getServiceProvider(req.body.service_name);
        const allQueue = await QueueModel.find({serviceProvider_type: serviceProvider_type});
        allQueue.filter((queueRec) => {
            const strdata = (queueRec.createdAt).toISOString().split('T')[0];
            const dateNoew = new Date();
            const strdDateNow = dateNoew.toISOString().split('T')[0];
            if(strdata == strdDateNow){
                ctr++
            }
        })

        const data = await QueueModel.create(
            {
                profile_id: profid,
                service_name: req.body.service_name,
                serviceProvider_type: serviceProvider_type,
                que_number: ++ctr,
            }
        )
        if(data){
            res.json({data, message: "Resident Successfully Added to Queue"})
        } else {
            res.json({message: "Error in Adding to Queue"})
        }
    } catch (error) {
        res.json(error)
    }
})


export { router as queueRouter };