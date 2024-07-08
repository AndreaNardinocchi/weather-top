import { accountsController } from "./accounts-controller.js";
import { stationController } from "./station-controller.js";
import { weatherStation } from "../models/station-store.js";
import { dashboardAnalytics } from "../utils/dashboard-analytics.js";
import { reportStore } from "../models/report-store.js";


import dayjs from "dayjs";
import { stationAnalytics } from "../utils/station-analytics.js";

export const dashboardController = {
  
  async index(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);

   
    
    const viewData = {
      title: "Forecast Stations Dashboard",
      stations: await weatherStation.getStationsByUserId(loggedInUser._id),

    
    
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },
  
  async addStation(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const station = await weatherStation.getStationsByUserId(loggedInUser._id);
    const newStation = {
      title: request.body.title,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      userid: loggedInUser._id,
    };
    console.log(`adding station ${newStation.title}`);
    await weatherStation.addStation(newStation);
    response.redirect("/dashboard");
  }, 
  
  async deleteStation(request, response) {
    const stationId = request.params.id;
    console.log(`Deleting Station ${stationId}`);
    await weatherStation.deleteStationById(stationId);
    response.redirect("/dashboard");
  },

};

