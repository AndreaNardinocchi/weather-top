import { accountsController } from './controllers/accounts-controller.js';
import { stationController } from "./controllers/station-controller.js";
import express from "express";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";

export const router = express.Router();

// router.get("/", dashboardController.index);
router.get("/dashboard", dashboardController.index);
router.get("/about", aboutController.index);
router.post("/dashboard/addstation", dashboardController.addStation);
router.get("/station/:id", stationController.index);
router.post("/station/:id/addtrack", stationController.addTrack);
router.get("/dashboard/deletestation/:id", dashboardController.deleteStation);
router.get("/station/:stationid/deletetrack/:trackid", stationController.deleteTrack);
router.get("/", accountsController.index);
router.get("/login", accountsController.login);
router.get("/signup", accountsController.signup);
router.get("/logout", accountsController.logout);
router.post("/register", accountsController.register);
router.post("/authenticate", accountsController.authenticate);