import express from "express";
import { ProfileModel } from '../models/Profile.js';
import { ChildHealthVaccineModel } from "../models/ChildHealthVaccine.js";
import { MedicalRecordModel } from "../models/MedicalRecord.js";
import { DispensingModel } from "../models/Dispensing.js";
import { FamilyPlanningAssessmentModel } from "../models/FamilyPlanningAssessment.js";


const router = express.Router();

// AGE: PERCENTAGE OF BABIES IN THE TOTAL COUNT
router.get("/age/percentage/babies", async (req,res) => {
    try {
        const totalprofile = await ProfileModel.find().count();
        const totalbabies = await ProfileModel.find({age:{$lte: 0}}).count();

        const percentage = ((totalbabies/totalprofile)*100).toFixed(2);
        res.json({count:totalbabies,percentage})
    } catch (error) {
        res.json(error);
    }
})

// AGE: PERCENTAGE OF CHILDREN IN THE TOTAL COUNT
router.get("/age/percentage/children", async (req,res) => {
    try {
        const totalprofile = await ProfileModel.find().count();
        const totalchildren = await ProfileModel.find({age:{$gte: 1, $lte: 12}}).count();

        const percentage = ((totalchildren/totalprofile)*100).toFixed(2);
        res.json({count: totalchildren, percentage})
    } catch (error) {
        res.json(error);
    }
})

// AGE: PERCENTAGE OF TEENAGERS IN THE TOTAL COUNT
router.get("/age/percentage/teens", async (req,res) => {
    try {
        const totalprofile = await ProfileModel.find().count();
        const totalteens = await ProfileModel.find({age:{$gte: 13, $lte: 17}}).count();

        const percentage = ((totalteens/totalprofile)*100).toFixed(2);
        res.json({count:totalteens, percentage})
    } catch (error) {
        res.json(error);
    }
})

// AGE: PERCENTAGE OF ADULTS IN THE TOTAL COUNT
router.get("/age/percentage/adults", async (req,res) => {
    try {
        const totalprofile = await ProfileModel.find().count();
        const totaladults = await ProfileModel.find({age:{$gte: 18, $lte: 64}}).count();

        const percentage = ((totaladults/totalprofile)*100).toFixed(2);
        res.json({count: totaladults, percentage})
    } catch (error) {
        res.json(error);
    }
})

// AGE: PERCENTAGE OF SENIORS IN THE TOTAL COUNT
router.get("/age/percentage/seniors", async (req,res) => {
    try {
        const totalprofile = await ProfileModel.find().count();
        const totalseniors = await ProfileModel.find({age:{$gte: 65}}).count();

        const percentage = ((totalseniors/totalprofile)*100).toFixed(2);
        res.json({count: totalseniors, percentage})
    } catch (error) {
        res.json(error);
    }
})

// VACCINE: COUNT NUMBER OF EVERY VACCINES
router.get("/vaccine/count/", async (req, res) => {
    try {
        const data = await ChildHealthVaccineModel.aggregate([
            {
                $group: {
                _id: '$vaccine_name',
                count: { $sum: 1 }
                }
            }
        ])
    
        res.json(data)
    } catch (error) {
        console.log(error)
    }
    
})

// VACCINE: COUNT NUMBER OF CHILD BEING VACCINATED IN THE PAST MONTH
router.get("/vaccine/count/month", async (req, res) => {
    try {
        const today = new Date(); 
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setMonth(today.getMonth() - 1);

        const data = await ChildHealthVaccineModel.find({dateGiven: {$gte: oneMonthAgo}})
        res.json(data.length);
    } catch (error) {
        res.json(error);
    }
})

// VACCINE: COUNT NUMBER OF CHILD BEING VACCINATED IN THE PAST YEAR
router.get("/vaccine/count/year", async (req, res) => {
    try {
        const today = new Date(); // Get the current date
        const oneYearAgo = new Date(today);
        oneYearAgo.setFullYear(today.getFullYear() - 1); // Calculate 1 year ago

        const data = await ChildHealthVaccineModel.find({dateGiven: {$gte: oneYearAgo}})
        res.json(data.length);
    } catch (error) {
        res.json(error);
    }
})

// VACCINE: PERCENTAGE OF EVERY VACCINES
router.get("/vaccine/percentage/", async (req, res) => {
    try {
        var totalvac=0;
        const today = new Date(); 
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setMonth(today.getMonth() - 1); 

        const data = await ChildHealthVaccineModel.aggregate([
            {
                $match: { 
                    dateGiven: {
                        $gte: oneMonthAgo
                    }
                }  
            },
            {
                $group: {
                _id: '$vaccine_name',
                count: { $sum: 1 }
                }
            }
        ])
        data.map((data) => { totalvac += data.count })

        const getPercentagePerVaccine = data.filter((data) => {
            return data.count = ((data.count/totalvac)*100).toFixed(2);
        })
    
        res.json(getPercentagePerVaccine)
        
    } catch (error) {
        console.log(error)
    }
    
})

// DISPENSE: TOTAL NUMBER OF DISPENSING
router.get("/dispense/count", async (req, res) => {
    try {
        const dispenseData = await DispensingModel.find({});
        res.json(dispenseData.length)
    } catch (error) {
        res.json(error);
    }
}) 

// DISPENSE: TOP DISPENSED MEDICATION
router.get("/medicaldispensing", async (req,res) => {
    try {
        var totalvac=0;
        const data = await DispensingModel.aggregate([
            {
                $match: { 
                    dispenseStat: true
                }  
            },
            {
                $group: {
                _id: '$medicationName',
                count: { $sum: 1 }
                }
            },
            {
                $sort: { count: -1 }
            },
        ])
        data.map((data) => { totalvac += data.count })
        const getPercentage = ((data[0].count/totalvac)*100).toFixed(0);

        res.json({medication: data[0]._id, count: data[0].count, percentage: getPercentage});
    } catch (error) {
        res.json(error);
    }
})

// BMI: AVERAGE OF BMI
router.get("/bmi/average/month", async (req, res) => {
    try {
        const today = new Date(); 
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setMonth(today.getMonth() - 1);
        
        const profiles = await ProfileModel.find({}).populate('vital_signs');
        const latestBMIs = [];

        for (const profile of profiles) {
            const vitalSigns = profile.vital_signs;

            if (vitalSigns.length > 0) {
                vitalSigns.sort((a, b) => b.createdAt - a.createdAt);
                if(vitalSigns[0].createdAt >= oneMonthAgo){
                    latestBMIs.push({
                        profileId: profile._id,
                        latestBMI: vitalSigns[0].bmi,
                    });
                }
                
            }
        }
        const totalBMI = latestBMIs.reduce((total, profile) => total + profile.latestBMI, 0);
        const averageBMI = (totalBMI / latestBMIs.length).toFixed(2);
        
        res.json(averageBMI);
    } catch (error) {
        res.json(error);
    }
})

// BMI: NUMBER OF UNDERWEIGHT IN THE PAST MONTH
router.get("/bmi/count/underweight/month", async (req, res) => {
    try {
        const today = new Date(); 
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setMonth(today.getMonth() - 1);
        
        const profiles = await ProfileModel.find({}).populate('vital_signs');
        const latestBMIs = [];

        for (const profile of profiles) {
            const vitalSigns = profile.vital_signs;

            if (vitalSigns.length > 0) {
                vitalSigns.sort((a, b) => b.createdAt - a.createdAt);
                if(vitalSigns[0].createdAt >= oneMonthAgo && vitalSigns[0].bmi < 18.5){
                    latestBMIs.push({
                        profileId: profile._id,
                        latestBMI: vitalSigns[0].bmi,
                    });
                }
                
            }
        }
        res.json(latestBMIs.length);
    } catch (error) {
        res.json(error);
    }
})

// BMI: NUMBER OF NORMAL WEIGHT IN THE PAST MONTH
router.get("/bmi/count/normalweight/month", async (req, res) => {
    try {
        const today = new Date(); 
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setMonth(today.getMonth() - 1);
        
        const profiles = await ProfileModel.find({}).populate('vital_signs');
        const latestBMIs = [];

        for (const profile of profiles) {
            const vitalSigns = profile.vital_signs;

            if (vitalSigns.length > 0) {
                vitalSigns.sort((a, b) => b.createdAt - a.createdAt);
                if(vitalSigns[0].createdAt >= oneMonthAgo && vitalSigns[0].bmi >= 18.5 && vitalSigns[0].bmi < 25){
                    latestBMIs.push({
                        profileId: profile._id,
                        latestBMI: vitalSigns[0].bmi,
                    });
                }
                
            }
        }
        res.json(latestBMIs.length);
    } catch (error) {
        res.json(error);
    }
})

// BMI: NUMBER OF OVERWEIGHT IN THE PAST MONTH
router.get("/bmi/count/overweight/month", async (req, res) => {
    try {
        const today = new Date(); 
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setMonth(today.getMonth() - 1);
        
        const profiles = await ProfileModel.find({}).populate('vital_signs');
        const latestBMIs = [];

        for (const profile of profiles) {
            const vitalSigns = profile.vital_signs;

            if (vitalSigns.length > 0) {
                vitalSigns.sort((a, b) => b.createdAt - a.createdAt);
                if(vitalSigns[0].createdAt >= oneMonthAgo && vitalSigns[0].bmi >= 25 && vitalSigns[0].bmi < 30){
                    latestBMIs.push({
                        profileId: profile._id,
                        latestBMI: vitalSigns[0].bmi,
                    });
                }
                
            }
        }
        res.json(latestBMIs.length);
    } catch (error) {
        res.json(error);
    }
})

// BMI: NUMBER OF OVERWEIGHT IN THE PAST MONTH
router.get("/bmi/count/obese/month", async (req, res) => {
    try {
        const today = new Date(); 
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setMonth(today.getMonth() - 1);
        
        const profiles = await ProfileModel.find({}).populate('vital_signs');
        const latestBMIs = [];

        for (const profile of profiles) {
            const vitalSigns = profile.vital_signs;

            if (vitalSigns.length > 0) {
                vitalSigns.sort((a, b) => b.createdAt - a.createdAt);
                if(vitalSigns[0].createdAt >= oneMonthAgo && vitalSigns[0].bmi >= 30){
                    latestBMIs.push({
                        profileId: profile._id,
                        latestBMI: vitalSigns[0].bmi,
                    });
                }
                
            }
        }
        res.json(latestBMIs.length);
    } catch (error) {
        res.json(error);
    }
})

// RECORDS: TOTAL NUMBER OF PRENATAL
router.get("/medicalrec/count/prenatal", async (req,res) => {
    try {
        let medRecCtr = 0;

        const today = new Date(); 
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setMonth(today.getMonth() - 1);

        const medrec = await MedicalRecordModel
        .find({service_name: "Prenatal"})
        .populate({
            path: 'service_id',
            model: 'maternal_health_record',
            match: {recordStat: true},
        });

        medrec.map((rec) => {
            (rec.service_id != null)? medRecCtr++ : null;
        })

        res.json(medRecCtr);
    } catch (error) {
        res.json(error);
    }
})

// RECORDS: NUMBER OF PRENATAL NEWLY ADDED IN THE PAST MONTH
router.get("/medicalrec/count/prenatal/month", async (req,res) => {
    try {
        let medRecCtr = 0;

        const today = new Date(); 
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setMonth(today.getMonth() - 1);

        const medrec = await MedicalRecordModel
        .find({service_name: "Prenatal"})
        .populate({
            path: 'service_id',
            model: 'maternal_health_record',
            match: {
                recordStat: true,
                createdAt: {
                    $gte: oneMonthAgo
                }
            },
            // populate: {
            //     path: 'maternalHealthAssessment',
            //     model: 'maternal_health_assessment',
            //     match: {
            //         recordStat: true, 
            //         createdAt: {
            //             $lte: oneMonthAgo
            //         }}
            // }
        });

        medrec.map((rec) => {
            (rec.service_id != null)? medRecCtr++ : null;
        })

        res.json(medRecCtr);
    } catch (error) {
        res.json(error);
    }
})

// RECORDS: NUMBER OF PRENATAL ASSESSMENT ADMINISTERED TODAY
router.get("/medicalrec/count/prenatal/assessment/today", async (req,res) => {
    try {
        let medRecCtr = 0;

        const today = new Date(); 
        today.setHours(0,0,0,0);

        const medrec = await MedicalRecordModel
        .find({service_name: "Prenatal"})
        .populate({
            path: 'service_id',
            model: 'maternal_health_record',
            match: {
                recordStat: true,
            },
            populate: {
                path: 'maternalHealthAssessment',
                model: 'maternal_health_assessment',
                match: {
                    recordStat: true, 
                    createdAt: {
                        $gte: today,
                        $lte: new Date()
                    }}
            }
        });

        medrec.map((rec) => {
            rec.service_id.maternalHealthAssessment.map((assessment) =>{
                (assessment.createdAt>=today)? medRecCtr++ : null;
            })
        })

        res.json(medRecCtr);
    } catch (error) {
        res.json(error);
    }
})

// RECORDS: TOTAL NUMBER OF IMMUNIZATION
router.get("/medicalrec/count/immunization", async (req,res) => {
    try {
        let medRecCtr = 0;

        const today = new Date(); 
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setMonth(today.getMonth() - 1);

        const medrec = await MedicalRecordModel
        .find({service_name: "Immunization"})
        .populate({
            path: 'service_id',
            model: 'child_health_records',
            match: {recordStat: true},
        });

        medrec.map((rec) => {
            (rec.service_id != null)? medRecCtr++ : null;
        })

        res.json(medRecCtr);
    } catch (error) {
        res.json(error);
    }
})

// RECORDS: NUMBER OF IMMUNIZATION NEWLY ADDED IN THE PAST MONTH
router.get("/medicalrec/count/immunization/month", async (req,res) => {
    try {
        let medRecCtr = 0;

        const today = new Date(); 
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setMonth(today.getMonth() - 1);

        const medrec = await MedicalRecordModel
        .find({service_name: "Immunization"})
        .populate({
            path: 'service_id',
            model: 'child_health_records',
            match: {
                recordStat: true,
                createdAt: {
                    $gte: oneMonthAgo
                }
            },
        });

        medrec.map((rec) => {
            (rec.service_id != null)? medRecCtr++ : null;
        })

        res.json(medRecCtr);
    } catch (error) {
        res.json(error);
    }
})

// RECORDS: NUMBER OF IMMUNIZATION ASSESSMENT ADMINISTERED TODAY
router.get("/medicalrec/count/immunization/assessment/today", async (req,res) => {
    try {
        let medRecCtr = 0;

        const today = new Date(); 
        today.setHours(0,0,0,0);

        const medrec = await MedicalRecordModel
        .find({service_name: "Immunization"})
        .populate({
            path: 'service_id',
            model: 'child_health_records',
            match: {
                recordStat: true,
            },
            populate: {
                path: 'childHealthAssessment',
                model: 'child_health_assessments',
                match: {
                    recordStat: true, 
                    createdAt: {
                        $gte: today,
                        $lte: new Date()
                    }}
            }
        });

        medrec.map((rec) => {
            rec.service_id.childHealthAssessment.map((assessment) =>{
                (assessment.createdAt>=today)? medRecCtr++ : null;
            })
        })

        res.json(medRecCtr);
    } catch (error) {
        res.json(error);
    }
})

// RECORDS: NUMBER OF FAMILY PLANNING ADMINISTERED IN THE PAST MONTH
router.get("/medicalrec/count/familyplanning/month", async (req,res) => {
    try {
        const today = new Date(); 
        const oneMonthAgo = new Date(today);
        oneMonthAgo.setMonth(today.getMonth() - 1);

        const data = await FamilyPlanningAssessmentModel.aggregate([
            {
                $match: { 
                    createdAt: {
                        $gte: oneMonthAgo
                    }
                }  
            },
            {
                $group: {
                _id: '$methodAccepted',
                count: { $sum: 1 }
                }
            }
        ])

        res.json(data);
    } catch (error) {
        res.json(error);
    }
})


export { router as dashboardRouter };