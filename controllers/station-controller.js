import { stationAnalytics } from "../utils/station-analytics.js";
import { reportStore } from "../models/report-store.js";
import { weatherStation } from "../models/station-store.js";
import { userStore } from "../models/user-store.js";
import { weatherstationAnalytics } from "../utils/weatherstation-analytics.js";
import dayjs from "dayjs";

export const stationController = {
  async index(request, response) {
   
   // const stations = await weatherStation.getStationsByUserId(loggedInUser._id);
   // const reports = await reportStore.getReportsByStationId(request.params.id);
    const station = await weatherStation.getStationById(request.params.id);
    weatherstationAnalytics.getStationData(station);
//    const sortedReport = stationAnalytics.getSortedReports(reports);
    const fastestWindReport = stationAnalytics.getFastestWindReport(station);
    const temperatureReport = stationAnalytics.getTemperatureReport(station);
    const tempFarReport = stationAnalytics.getTempFarReport(station);
    const maxTempReport = stationAnalytics.getMaxTempReport(station);
    const minTempReport = stationAnalytics.getMinTempReport(station);
    const maxWindSpeedReport = stationAnalytics.getMaxWindSpeedReport(station);
    const minWindSpeedReport= stationAnalytics.getMinWindSpeedReport(station);
    const windDirection = stationAnalytics.getWindDirectionReport(station);
    const windReport = stationAnalytics.getWindReport(station);
    const pressureReport = stationAnalytics.getPressureReport(station);
    const maxPressureReport = stationAnalytics.getMaxPressureReport(station);
    const minPressureReport = stationAnalytics.getMinPressureReport(station);
    const iconCodeReport = stationAnalytics.getIconCodeReport(station);
    console.log(iconCodeReport);
    const weatherTypeReport = stationAnalytics.getWeatherTypeReport(station);
    //const maxDate = stationAnalytics.getLatestReport(stations);
   // console.log(maxDate);
    
    const viewData = {
      title: "Station",
      station: station,
    //  sortedReport: sortedReport,
      fastestWindReport: fastestWindReport,
      temperatureReport: temperatureReport,
      tempFarReport: tempFarReport,
      maxTempReport: maxTempReport,
      minTempReport: minTempReport,
      windReport: windReport,
      maxWindSpeedReport: maxWindSpeedReport,
      minWindSpeedReport: minWindSpeedReport,
      windDirection: windDirection,
      pressureReport: pressureReport,
      maxPressureReport: maxPressureReport,  
      minPressureReport: minPressureReport,
      iconCodeReport: iconCodeReport,
      weatherTypeReport: weatherTypeReport,
    
    };
    response.render("station-view", viewData);
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
  
  
   async update(request, response) {
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    const updatedReport = {
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windSpeed: Number(request.body.windSpeed),
      windDirection: request.body.windDirection,
      windSpeed: Number(request.body.windSpeed),
      pressure: Number(request.body.pressure),
    };
    console.log(`Updating Report ${reportId} from Station ${stationId} `);
    const report = await reportStore.getReportById(reportId);
    await reportStore.updateReport(report, updatedReport);
    response.redirect("/station/" + stationId);
  },
  
  
   async deleteReport(request, response) {
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    console.log(`Deleting Report ${reportId} from Station ${stationId}`);
    await reportStore.deleteReport(reportId);
    response.redirect("/station/" + stationId);
  },
  
  //     async deleteData(request, response) {   request.params.
  //   const stationId = request.params.stationid;
  //   const dataId = request.params.dataid;
  //   console.log(`Deleting data ${dataId} from Station ${stationId}`);
  //   await dataStore.deleteData(dataId);
  //   await response.redirect("/station/" + stationId);
  // },
};