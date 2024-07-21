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
  
  // getTitle(station) {
  //   let title = null;
  //   if (station.reports>0) {
  //   title = station.reports[0];
  //   }
  //   return title;
  // },

  
//   // https://stackoverflow.com/questions/6439915/how-to-set-a-javascript-object-values-dynamically/6439954#6439954
//   getStationData(station) {
//   //  let station = null;
//    // for (const i = 0; i<station.reports.length; i++) {
      
//       const maxTemp = dashboardAnalytics.getMaxTemp(station);
//       const minTemp = dashboardAnalytics.getMinTempReport(station);
//       const maxWindSpeed = dashboardAnalytics.getMaxWindSpeed(station);
//       const minWindSpeed= dashboardAnalytics.getMinWindSpeed(station);
//       const maxPressure = dashboardAnalytics.getMaxPressure(station);
//       const minPressure = dashboardAnalytics.getMinPressure(station);
//       const iconCode = dashboardAnalytics.getIconCode(station);
//       const weatherType = dashboardAnalytics.getWeatherType(station); 
//       station[maxTemp] = maxTemp;
//       station[minTemp] = minTemp;
//       station[maxWindSpeed] = maxWindSpeed;
//       station[minWindSpeed] = minWindSpeed;
//       station[maxPressure] = maxPressure;
//       station[minPressure] = minPressure;
//       station[iconCode] = iconCode;
//       station[weatherType] = weatherType; 
    
  
//   }
// So in, weatherstation-analytics.js
// 4:43
// This is your new getStationData method:
// 4:43
//  // https://stackoverflow.com/questions/6439915/how-to-set-a-javascript-object-values-dynamically/6439954#6439954
//   getStationData(station) {
//    const reports = reportStore.getReportsByStationId(station._id);
//    if (reports) {
//       const maxTemp = dashboardAnalytics.getMaxTemp(station);
//       const minTemp = dashboardAnalytics.getMinTemp(station);
//       const maxWindSpeed = dashboardAnalytics.getMaxWindSpeed(station);
//       const minWindSpeed= dashboardAnalytics.getMinWindSpeed(station);
//       const maxPressure = dashboardAnalytics.getMaxPressure(station);
//       const minPressure = dashboardAnalytics.getMinPressure(station);
//       const iconCode = dashboardAnalytics.getIconCode(station);
//       const weatherType = dashboardAnalytics.getWeatherType(station);
//       const newStation = {};
//       newStation['maxTemp'] = maxTemp;
//       newStation['minTemp'] = minTemp;
//       newStation['maxWindSpeed'] = maxWindSpeed;
//       newStation['minWindSpeed'] = minWindSpeed;
//       newStation['maxPressure'] = maxPressure;
//       newStation['minPressure'] = minPressure;
//       newStation['iconCode'] = iconCode;
//       newStation['weatherType'] = weatherType;
//       console.log(newStation);
//       console.log("Updating station data for " + station.title);
//       weatherStation.updateStationDetails(station, newStation);
//    }
//   }
// 4:44
// At the end of it, it calls a new method: weatherStation.updateStationDetails and passes it both the original station, and an updated one. (edited) 


// Andrea Nardinocchi
//   4:44 PM
// ok, give me one second


// Wolfgang Helnwein
//   4:45 PM
// You'll also need these two imports on top:
// import { weatherStation } from "../models/station-store.js";
// import { reportStore } from "../models/report-store.js";
// :white_check_mark:
// 1



// Andrea Nardinocchi
//   4:46 PM
// yep that makes sense


// Wolfgang Helnwein
//   4:46 PM
// Got that part done?
// 4:46
// With the imports?


// Andrea Nardinocchi
//   4:46 PM
// yes


// Wolfgang Helnwein
//   4:47 PM
// Ok, next, in station-store.js, we'll create that method:
// 4:47
//   async updateStationDetails(station, newStation) {
//     station.title = station.title;
//     station._id = station._id;
//     station.userid = station.userid;
//     station.latitude = station.latitude;
//     station.longitude = station.longitude;
//     station.maxTemp = newStation.maxTemp;
//     station.minTemp = newStation.minTemp;
//     station.maxPressure = newStation.maxPressure;
//     station.minPressure = newStation.minPressure;
//     station.maxWindSpeed = newStation.maxWindSpeed
//     station.minWindSpeed = newStation.maxWindSpeed
//     station.weatherType = newStation.weatherType;
//     station.weatherIcon = newStation.weatherIcon;
//     await db.write();
//   }
// 4:47
// It's basically the same as the reportStore.updateReport() method.
// 4:48
// So it's just adapted from the code John gave us.


// Andrea Nardinocchi
//   4:48 PM
// yep
// 4:48
// but you also added station.title = station.title;
//     station._id = station._id;


// Wolfgang Helnwein
//   4:48 PM
// Do you see what it's doing?


// Andrea Nardinocchi
//   4:49 PM
// yes, this for updating the station details


// Wolfgang Helnwein
//   4:49 PM
// And it will write into stations.json


// Andrea Nardinocchi
//   4:49 PM
// correct
// 4:49
// yeah


// Wolfgang Helnwein
//   4:49 PM
// Now, let's test this part.
// 4:50
// In station-controller.js
// :white_check_mark:
// 1

// 4:50
// Add this import:
// import { weatherstationAnalytics } from "../utils/weatherstation-analytics.js";
// :white_check_mark:
// 1

// 4:50
// In the index, where you're setting all the consts, add one more line before the viewData object.
// 4:50
// weatherstationAnalytics.getStationData(station);
// 4:51
// What you're doing there is telling the station-view to run the getStationData method for that station, each time you load the page.
// :white_check_mark:
// 1









// Andrea Nardinocchi
//   4:51 P


 
//   async getIconCode(station) {
//    //const reports = await reportStore.getReportsByStationId(station._id);
//    if (station.reports.length > 0) {
//       const iconCode = stationAnalytics.getIconCodeReport(station);
//       for (let i = 0; i < station.reports.length; i++) {
//          iconCode = station.reports[0];
//          console.log(iconCode);
//       }
//       return iconCode; 
      
//    }
      
//   },


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