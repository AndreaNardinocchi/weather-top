import { stationAnalytics } from "../utils/station-analytics.js";
import { reportStore } from "../models/report-store.js";
import { weatherStation } from "../models/station-store.js";
import { userStore } from "../models/user-store.js";
import dayjs from "dayjs";

export const stationController = {
  async index(request, response) {
    const station = await weatherStation.getStationById(request.params.id);
    const fastestWindReport = stationAnalytics.getFastestWindReport(station);
    const maxTempReport = stationAnalytics.getMaxTempReport(station);
    const minTempReport = stationAnalytics.getMinTempReport(station);
    const maxWindSpeedReport = stationAnalytics.getMaxWindSpeedReport(station);
    const minWindSpeedReport= stationAnalytics.getMinWindSpeedReport(station);
    const maxPressureReport = stationAnalytics.getMaxPressureReport(station);
    const minPressureReport = stationAnalytics.getMinPressureReport(station);
    const iconCodeReport = stationAnalytics.getIconCodeReport(station);
    const weatherTypeReport = stationAnalytics.getWeatherTypeReport(station);
    
    const viewData = {
      title: "Station",
      station: station,
      fastestWindReport: fastestWindReport,
      maxTempReport: maxTempReport,
      minTempReport: minTempReport,
      maxWindSpeedReport: maxWindSpeedReport,
      minWindSpeedReport: minWindSpeedReport,
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
  
   async deleteReport(request, response) {
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    console.log(`Deleting Report ${reportId} from Station ${stationId}`);
    await reportStore.deleteReport(request.params.reportId);
    response.redirect("/station/" + stationId);
  },
};