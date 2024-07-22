/* This util js file contains methods used for the both dashboard and station views */
import { dashboardAnalytics } from "./dashboard-analytics.js";
import { weatherStation } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";
import { stationAnalytics } from "./station-analytics.js";
import dayjs from "dayjs";

export const weatherstationAnalytics = {
  // This method is used to sort stations in alphabetical order https://www.youtube.com/watch?v=CTHhlx25X-U
  getSortedStations(stations) {
    let sortedStations = stations.sort((a, b) => a.title.localeCompare(b.title));
    console.log(stations);
    return sortedStations;
 },
  
  /* The method getStationData(station); is basically the same method as the reportStore.updateReport() one and 
  will make the latest station details show on the dashboard view (passing them through to the latter). 
  https://stackoverflow.com/questions/6439915/how-to-set-a-javascript-object-values-dynamically/6439954#6439954 */
  async getStationData(station) {
    // Retrieving the below object values/data from report-store.js 
    const reports = await reportStore.getReportsByStationId(station._id);
    if (reports.length > 0) {
      const temperature = dashboardAnalytics.getTemperature(station);
      const feelsLike = dashboardAnalytics.getFeelsLike(station);
      const humidity = dashboardAnalytics.getHumidity(station);
      const tempFar = dashboardAnalytics.getTempFar(station);
      const maxTemp = dashboardAnalytics.getMaxTemp(station);
      const minTemp = dashboardAnalytics.getMinTemp(station);
      const wind = dashboardAnalytics.getWind(station);
      const windDirect = dashboardAnalytics.getWindDirect(station);
      const windDir = dashboardAnalytics.getWindDir(station);
      const maxWindSpeed = dashboardAnalytics.getMaxWindSpeed(station);
      const minWindSpeed = dashboardAnalytics.getMinWindSpeed(station);
      const pressure = dashboardAnalytics.getPressure(station);
      const maxPressure = dashboardAnalytics.getMaxPressure(station);
      const minPressure = dashboardAnalytics.getMinPressure(station);
      const iconCode = dashboardAnalytics.getIconCode(station);
      const weatherType = dashboardAnalytics.getWeatherType(station);
      // Creating a new object 'newStation' and retrieving values 
      const newStation = {};
      newStation['temperature'] = temperature;
      newStation['feelsLike'] = feelsLike;
      newStation['humidity'] = humidity;
      newStation['tempFar'] = tempFar;
      newStation['maxTemp'] = maxTemp;
      newStation['minTemp'] = minTemp;
      newStation['wind'] = wind;
      newStation['windDirect'] = windDirect;
      newStation['windDir'] = windDir;
      newStation['maxWindSpeed'] = maxWindSpeed;
      newStation['minWindSpeed'] = minWindSpeed;
      newStation['pressure'] = pressure;
      newStation['maxPressure'] = maxPressure;
      newStation['minPressure'] = minPressure;
      newStation['iconCode'] = iconCode;
      newStation['weatherType'] = weatherType;
      console.log(newStation + iconCode);
      console.log("Updating station data for " + station.title);
      /* The below action calls a new method 'weatherStation.updateStationDetails' and passes 
      both the original stations and the updated ones into the station-store.js model, which then
      will enable the dashboard-view to render them */
      weatherStation.updateStationDetails(station, newStation);
   }
  }
};