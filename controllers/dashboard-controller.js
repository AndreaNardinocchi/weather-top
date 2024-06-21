import { accountsController } from "./accounts-controller.js";
import { weatherStation } from "../models/station-store.js";

export const dashboardController = {
 /* async index(request, response) {
    const viewData = {
      title: "Forecast Stations Dashboard",
      stations: await weatherStation.getAllStations(),
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  }, */
  
  async index(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const viewData = {
      title: "Forecast Stations Dashboard",
      stations: await weatherStation.getStationsByUserId(loggedInUser._id),
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },
  
 /* async addStation(request, response) {
    const newWeatherStation = {
      title: request.body.title,
    };
    console.log(`adding station ${newWeatherStation.title}`);
    await weatherStation.addStation(newWeatherStation);
    response.redirect("/dashboard");
  },
 */
  async addStation(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const newStation = {
      title: request.body.title,
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
