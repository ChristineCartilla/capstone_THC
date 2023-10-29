import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv';

import { accountRouter } from './routes/accounts.js';
import { profileRouter } from './routes/profiles.js';
import { medicalCheckupRouter } from './routes/medicalCheckup.js';
import { vitalSignRouter } from './routes/vitalsigns.js';
import { oralHealthRouter } from './routes/oralHealth.js';
import { hematologyRouter } from './routes/hematology.js';
import { maternalHealthRouter } from './routes/maternalHealth.js';
import { childHealthRouter } from './routes/childHealth.js';
import { urinalysisRouter } from './routes/urinalysis.js';
import { familyPlanningRouter } from './routes/familyPlanning.js';
import { queueRouter } from './routes/queue.js';
import { dispensingRouter } from './routes/dispensing.js';
import { dashboardRouter } from './routes/dashboard.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use("/account", accountRouter);
app.use("/profile", profileRouter);
app.use("/vitalsign", vitalSignRouter);
app.use("/medicalcheckup", medicalCheckupRouter);
app.use("/oralhealth", oralHealthRouter);
app.use("/hematology", hematologyRouter);
app.use("/childhealth", childHealthRouter);
app.use("/maternalhealth", maternalHealthRouter);
app.use("/urinalysis", urinalysisRouter);
app.use("/familyplanning", familyPlanningRouter);
app.use("/queue", queueRouter);
app.use("/dispensing", dispensingRouter);
app.use("/dashboard", dashboardRouter);
dotenv.config();

const PORT = process.env.WEB_APP_API_PORT;

mongoose.connect(process.env.MONGO_DB_CONNECTION)
.then(()=> {
    console.log("CONNECTED TO DATABASE");
    app.listen(PORT, () => {
        console.log(`SERVER STARTED! RUNNING ON PORT: ${PORT}`);
    })
})
.catch((err) => console.log(err))