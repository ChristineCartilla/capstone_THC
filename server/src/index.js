import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

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

const app = express();

const PORT = process.env.PORT || 8001;

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

mongoose.connect("mongodb+srv://20102632:thc2023@talambanhealthconnectdb.v5hhcqh.mongodb.net/TalambanHealthConnectDB?retryWrites=true&w=majority")
.then(()=> {
    console.log("CONNECTED TO DATABASE");
    app.listen(PORT, () => {
        console.log("SERVER STARTED!");
    })
})
.catch((err) => console.log(err))