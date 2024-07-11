import { accountsController } from "./accounts-controller.js";
import { stationController } from "./station-controller.js";
import { weatherStation } from "../models/station-store.js";
import { stationAnalytics } from "../utils/station-analytics.js";
import { reportStore } from "../models/report-store.js";
import { weatherstationAnalytics } from "../utils/weatherstation-analytics.js";
import { dashboardAnalytics } from "../utils/dashboard-analytics.js";


import dayjs from "dayjs";


export const dashboardController = {
  
  async index(request, response) {
  //  const station = await weatherStation.getStationById(request.params.id);
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const stations = await weatherStation.getStationsByUserId(loggedInUser._id);
    const sortedStations = weatherstationAnalytics.getSortedStations(stations);
    
    // const maxTempReport = stationAnalytics.getMaxTempReport(station);
    // const minTempReport = stationAnalytics.getMinTempReport(station);
    // const maxWindSpeedReport = stationAnalytics.getMaxWindSpeedReport(station);
    // const minWindSpeedReport= stationAnalytics.getMinWindSpeedReport(station);
    // const maxPressureReport = stationAnalytics.getMaxPressureReport(station);
    // const minPressureReport = stationAnalytics.getMinPressureReport(station);
    // const iconCodeReport = stationAnalytics.getIconCodeReport(station);
    // const weatherTypeReport = stationAnalytics.getWeatherTypeReport(station);

    
    const viewData = {
      title: "Forecast Stations Dashboard",
      stations: sortedStations,
      
      // maxTempReport: maxTempReport,
      // minTempReport: minTempReport,
      // maxWindSpeedReport: maxWindSpeedReport,
      // minWindSpeedReport: minWindSpeedReport,
      // maxPressureReport: maxPressureReport,  
      // minPressureReport: minPressureReport,
      // iconCodeReport: iconCodeReport,
      // weatherTypeReport: weatherTypeReport,
     
    };
  
    console.log("dashboard rendering");
    response.cookie("weathertop", loggedInUser._id);
    response.render("dashboard-view", viewData);
  },
  
   async addReport(request, response) {
    const station = await weatherStation.getStationById(request.params.id);
    const newReport = {
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windSpeed: Number(request.body.windSpeed),
      windDirection: request.body.windDirection,
      windSpeed: Number(request.body.windSpeed),
      pressure: Number(request.body.pressure),
      currentHour: dayjs().format("YYYY-MM-DD HH:mm:ss") // Adding current time
    };
    console.log(`adding report ${newReport.code}`);
    await reportStore.addReport(station._id, newReport);
    response.redirect("/station/" + station._id);
  },
  


  async addStation(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);

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

