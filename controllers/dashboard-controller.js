import { weatherStation } from "../models/station-store.js";

export const dashboardController = {
  async index(request, response) {
    const viewData = {
      title: "Forecast Stations Dashboard",
      stations: await weatherStation.getAllStations(),
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },
  async addStation(request, response) {
    const newWeatherStation = {
      title: request.body.title,
    };
    console.log(`adding station ${newWeatherStation.title}`);
    await weatherStation.addStation(newWeatherStation);
    response.redirect("/dashboard");
  },
};
