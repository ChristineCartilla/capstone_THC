import express from "express";
import { DispensingModel } from "../models/Dispensing.js";

const router = express.Router();

// ADD DISPENSING
router.post("/adddispensing", async (req, res) => {
    try {
        const data = new DispensingModel(req.body);
        await data.save();

        if(data){
            res.json("Successfully Added to Dispensing")
        }
    } catch (error) {
        res.json(error);
    }
})

// GET ALL ACTIVE DESPENSING
router.get("/", async (req, res) => {
    try {
        const data = await DispensingModel.find({dispenseStat: true});
        res.json(data);
    } catch (error) {
        res.json(error);
    }
})

// GET SPECIFIC DESPENSING
router.get("/:disid", async (req, res) => {
    const disid = req.params.disid;
    
    try {
        const data = await DispensingModel.find({_id: disid});
        res.json(data);
    } catch (error) {
        res.json(error);
    }
})

// SOFT DELETE DISPENSE INSNTANCE
router.patch("/delete/:disid", async (req, res) => {
    const disid = req.params.disid;

    try {
        const dispensedata = await DispensingModel.findByIdAndUpdate(
            {_id: disid},
            {
                dispenseStat: false 
            }
        )
        if(dispensedata){
            res.json("Successfully Deleted Dispensed Data");
        } else {
            res.json("Error Occurred in Deleting Dispensed Data");
        }
    } catch (error) {
        res.json(error);
    }
})


export { router as dispensingRouter };