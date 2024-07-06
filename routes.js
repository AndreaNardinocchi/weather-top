import { reportController } from "./controllers/report-controller.js";
import { accountsController } from './controllers/accounts-controller.js';
import { stationController } from "./controllers/station-controller.js";
import express from "express";
import { dashboardController } from "./controllers/dashboard-controller.js";
import { aboutController } from "./controllers/about-controller.js";
import { lifestyleController } from "./controllers/lifestyle-controller.js";
import { newsController } from "./controllers/news-controller.js";
import { summaryController } from "./controllers/summary-controller.js";
import { userController } from "./controllers/user-controller.js";


export const router = express.Router();

// router.get("/", dashboardController.index);
router.get("/dashboard", dashboardController.index);
router.get("/summary", summaryController.index);
router.get("/about", aboutController.index);
router.get("/lifestyle", lifestyleController.index);
router.get("/news", newsController.index);
router.post("/dashboard/addstation", dashboardController.addStation);
router.get("/station/:id", stationController.index);
router.post("/station/:id/addreport", stationController.addReport);
router.get("/dashboard/deletestation/:id", dashboardController.deleteStation);
router.get("/station/:stationid/deletereport/:reportid", stationController.deleteReport);
router.get("/", accountsController.index);
router.get("/login", accountsController.login);
router.get("/signup", accountsController.signup);
router.get("/logout", accountsController.logout);
router.get("/account", accountsController.account);
router.post("/register", accountsController.register);

router.post("/authenticate", accountsController.authenticate);
router.get("/station/:stationid/editreport/:reportid", reportController.index);
router.post("/station/:stationid/updatereport/:reportid", reportController.update);

// router.get("/account/:userid/edituser/:userid", accountsController.account);
// router.post("/account/:userid/updateuser/:userid", accountsController.update);
router.get("/user/:id", accountsController.account);
router.get("/station/:stationid/edituser/:userid", userController.index);
router.post("/station/:stationid/updateuser/:userid", userController.update);

// router.get("/account/edituser/:userid", accountsController.account);
// router.post("/user/:userid/updateuser/:userid", accountsController.update);
//router.post("/register", accountsController.account);
// router.get("/station/:stationid/edituser/:userid", accountsController.index);
// router.post("/station/:stationid/updateuser/:userid", accountsController.update);
//router.post("/account/adduser", accountsController.addUser);






