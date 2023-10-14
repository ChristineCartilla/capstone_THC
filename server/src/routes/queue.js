import express from "express";
import { AccountModel } from "../models/Accounts.js";
import { ProfileModel } from "../models/Profile.js";
import { QueueModel } from "../models/Queue.js";


function getServiceProvider(service){
    let returnServiceProviderType;
    switch (service) {
        case "Prenatal":
            returnServiceProviderType = "Midwife"
            break;
        case "Immunization":
            returnServiceProviderType = "Nurse"
            break;
        case "Dental":
            returnServiceProviderType = "Dentist"
            break;
        case "MedicalCheckup":
            returnServiceProviderType = "Doctor"
            break;
        case "FamilyPlanning":
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

function getSpecificQueue(queue){
    const specificQ = queue.filter((queueRec) => {
        const strdata = (queueRec.createdAt).toISOString().split('T')[0];
        const dateNow = new Date();
        const strdDateNow = dateNow.toISOString().split('T')[0];
        if(strdata == strdDateNow){
            return queueRec;
        }
    })

    return specificQ;
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
router.get("/fetchdoctorqueue", async (req, res) => {
    try {
        const queue = await QueueModel.find({serviceProvider_type: "Doctor", queueStat: true}).populate("profile_id");
        const todayQueue = getSpecificQueue(queue)
        res.json(todayQueue);
    } catch (error) {
        res.json(error);
    }
})

// FETCH ALL QUEUE FOR DENTIST
router.get("/fetchdentistqueue", async (req, res) => {
    try {
        const queue = await QueueModel.find({serviceProvider_type: "Dentist", queueStat: true}).populate("profile_id");
        const todayQueue = getSpecificQueue(queue)
        res.json(todayQueue);
    } catch (error) {
        res.json(error);
    }
})

// FETCH ALL QUEUE FOR MEDTECH
router.get("/fetchmedtechqueue", async (req, res) => {
    try {
        const queue = await QueueModel.find({serviceProvider_type: "Medtech", queueStat: true}).populate("profile_id");
        const todayQueue = getSpecificQueue(queue)
        res.json(todayQueue);
    } catch (error) {
        res.json(error);
    }
})

// FETCH ALL QUEUE FOR NURSE
router.get("/fetchmidwifequeue", async (req, res) => {
    try {
        const queue = await QueueModel.find({serviceProvider_type: "Midwife", queueStat: true}).populate("profile_id");
        const todayQueue = getSpecificQueue(queue)
        res.json(todayQueue);
    } catch (error) {
        res.json(error);
    }
})

// FETCH ALL QUEUE FOR NURSE
router.get("/fetchnursequeue", async (req, res) => {
    try {
        const queue = await QueueModel.find({serviceProvider_type: "Nurse", queueStat: true}).populate("profile_id");
        const todayQueue = getSpecificQueue(queue)
        res.json(todayQueue);
    } catch (error) {
        res.json(error);
    }
})

// ADD QUEUE
router.post("/addqueue/:profid", async (req, res) => {
    const profid = req.params.profid

    try {
        let ctr=0;
        const serviceProvider_type = getServiceProvider(req.body.service_name);
        const allQueue = await QueueModel.find({serviceProvider_type: serviceProvider_type});
        allQueue.filter((queueRec) => {
            const strdata = (queueRec.createdAt).toISOString().split('T')[0];
            const dateNow = new Date();
            const strdDateNow = dateNow.toISOString().split('T')[0];
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

// UPDATE QUEUE: DONE
router.patch("/done/:queueid", async (req, res) => {
    const queueid = req.params.queueid;

    try {
        const markDoneQueue = await QueueModel.findByIdAndUpdate(
            {_id: queueid},
            {
                status: "Done",
                queueStat: false
            }
        )
        if(markDoneQueue){
            res.json({message: "Queue Marked as Done"})
        } else {
            res.json({message: "Error in Updating Queue"})
        }
    } catch (error) {
        res.json(error);
    }
})

// REUPDATE QUEUE: WAITING
router.patch("/waiting/:queueid", async (req, res) => {
    const queueid = req.params.queueid;

    try {
        const markDoneQueue = await QueueModel.findByIdAndUpdate(
            {_id: queueid},
            {
                status: "Waiting",
                queueStat: True
            }
        )
        if(markDoneQueue){
            res.json({message: "Queue Marked as Done"})
        } else {
            res.json({message: "Error in Updating Queue"})
        }
    } catch (error) {
        res.json(error);
    }
})


export { router as queueRouter };