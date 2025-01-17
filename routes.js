import { reportController } from "./controllers/report-controller.js";
import { accountsController } from './controllers/accounts-controller.js';
import { stationController } from "./controllers/station-controller.js";
import express from "express";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { lifestyleController } from "./controllers/lifestyle-controller.js";
import { newsController } from "./controllers/news-controller.js";


export const router = express.Router();

router.get("/dashboard", dashboardController.index);
router.get("/about", aboutController.index);
router.get("/lifestyle", lifestyleController.index);
router.get("/news", newsController.index);
router.post("/dashboard/addstation", dashboardController.addStation);
router.get("/station/:id", stationController.index);
router.post("/station/:id/addmanualreport", stationController.addManualReport);
router.post("/station/:id/addautoreport", stationController.addAutoReport);
router.post("/station/:id/addchartreport", stationController.addChartReport);
router.get("/dashboard/deletestation/:id", dashboardController.deleteStation);
router.get("/station/:stationid/deletereport/:reportid", stationController.deleteReport);
router.get("/", accountsController.index);
router.get("/login", accountsController.login);
router.get("/signup", accountsController.signup);
router.get("/logout", accountsController.logout);
router.post("/register", accountsController.register);
router.post("/authenticate", accountsController.authenticate);
router.get("/station/:stationid/editreport/:reportid", reportController.index);
router.post("/station/:stationid/updatereport/:reportid", reportController.update);
router.get("/account/", accountsController.account);
router.get("/account/edituser/", accountsController.account);
router.post("/account/updateuser/", accountsController.update);








