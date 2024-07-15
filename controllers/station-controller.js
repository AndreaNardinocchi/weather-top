import {dashboardAnalytics} from "../utils/dashboard-analytics.js";
import { stationAnalytics } from "../utils/station-analytics.js";
import { reportStore } from "../models/report-store.js";
import { weatherStation } from "../models/station-store.js";
import { userStore } from "../models/user-store.js";
import { weatherstationAnalytics } from "../utils/weatherstation-analytics.js";
import dayjs from "dayjs";
import axios from "axios";

// const apiKey = "YOUR API KEY HERE";
// const weatherRequestUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tramore,Ireland&units=metric&appid=c3e26a0b5387b001f6f548f5710c0baf`;



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
    //const station = await weatherStation.getStationById(request.params.id);
    console.log("rendering new report");
    let report = {};
    const lat = request.body.lat || "52.2502793";
    const lng = request.body.lng || "-7.1177689";
    const latLongRequestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=c3e26a0b5387b001f6f548f5710c0baf`;
    const result = await axios.get(latLongRequestUrl);
    if (result.status == 200) {

      // const currentWeather = result.data;
      // report.currentHour = dayjs().format("YYYY-MM-DD HH:mm:ss");
      // report.title = currentWeather.name;
      // report.longitude = currentWeather.coord.lon;
      // report.latitude = currentWeather.coord.lat;
      // report.code = currentWeather.weather[0].id;
      // report.iconCodeReport = currentWeather.weather[0].icon;
      // report.weatherTypeReport = currentWeather.weather[0].main;
      // report.weatherDescReport = currentWeather.weather[0].description;
      // report.temperatureReport = currentWeather.main.temp;
      // report.tempFarReport = (currentWeather.main.temp* 1.8) + 32;
      // report.maxTempReport = currentWeather.main.temp_max;
      // report.minTempReport = currentWeather.main.temp_min;
      // report.feelsLikeReport = currentWeather.main.feels_like;
      // report.humidityReport = currentWeather.main.humidity;
      // report.windReport = currentWeather.wind.speed;
      // report.pressureReport = currentWeather.main.pressure;
      // report.windDirection = currentWeather.wind.deg;

      report.tempTrend = [];
      report.trendLabels = [];
      const trends = result.data.list;
      for (let i=0; i<10; i++) {
        report.tempTrend.push(trends[i].main.temp);
        report.trendLabels.push(trends[i].dt_txt);
      }
    }



      // const currentWeather = result.data;
      // report.currentHour = dayjs().format("YYYY-MM-DD HH:mm:ss");
      // report.title = currentWeather.name;
      // report.longitude = currentWeather.coord.lon;
      // report.latitude = currentWeather.coord.lat;
      // report.code = currentWeather.weather[0].id;
      // report.iconCodeReport = currentWeather.weather[0].icon;
      // report.weatherTypeReport = currentWeather.weather[0].main;
      // report.weatherDescReport = currentWeather.weather[0].description;
      // report.temperatureReport = currentWeather.main.temp;
      // report.tempFarReport = (currentWeather.main.temp* 1.8) + 32;
      // report.maxTempReport = currentWeather.main.temp_max;
      // report.minTempReport = currentWeather.main.temp_min;
      // report.feelsLikeReport = currentWeather.main.feels_like;
      // report.humidityReport = currentWeather.main.humidity;
      // report.windReport = currentWeather.wind.speed;
      // report.pressureReport = currentWeather.main.pressure;
      // report.windDirection = currentWeather.wind.deg;
    // }
    console.log(report);
    const viewData = {
      title: "Weather Autogenerated Report | Weather Top App",
      station: report,
      
      currentHour: dayjs().format("YYYY-MM-DD HH:mm:ss") // Adding current time
    };
   // await reportStore.addReport(station._id, newReport);
   // response.redirect("/station/" + station._id);
   //response.cookie("weathertop", report);
   response.render("stationreading-view", viewData);
  //  const newReport = {
  //   code: Number(request.body.code),
  //   temperature: Number(request.body.temperature),
  //   windSpeed: Number(request.body.windSpeed),
  //   windDirection: request.body.windDirection,
  //   windSpeed: Number(request.body.windSpeed),
  //   pressure: Number(request.body.pressure),
  //   currentHour: dayjs().format("YYYY-MM-DD HH:mm:ss") // Adding current time
  // };
  // console.log(`adding report ${newReport.code}`);
  // await reportStore.addReport(station._id, newReport);
  // response.redirect("/station/" + station._id);

 },

 // await reportStore.addReport(station._id, newReport);
  //   response.redirect("/station/" + station._id);

  // async addReport(request, response) {
  //  const station = await weatherStation.getStationById(request.params.id);
    
//           let report = {};
//     const lat = await dashboardAnalytics.getLatitude(station) || "52.2502793";
//     console.log(lat);
//     const lng = await dashboardAnalytics.getLongitude(station) || "-7.1177689";
//     console.log(lng);
//     const latLongRequestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=c3e26a0b5387b001f6f548f5710c0baf`;
//     const result = await axios.get(latLongRequestUrl);
//     if (result.status == 200) {
//       report.tempTrend = [];
//       report.trendLabels = [];
//       const trends = result.data.list;
//       for (let i=0; i<10; i++) {
//         report.tempTrend.push(trends[i].main.temp);
//         report.trendLabels.push(trends[i].dt_txt);
//        }
//     }
//     console.log(report);
//     const viewData = {
//       title: "Weather Report",
//       reading: report,
//     };
//     response.render("station-view", viewData);
//   },
    
  //   const newReport = {
  //     code: Number(request.body.code),
  //     temperature: Number(request.body.temperature),
  //     windSpeed: Number(request.body.windSpeed),
  //     windDirection: request.body.windDirection,
  //     windSpeed: Number(request.body.windSpeed),
  //     pressure: Number(request.body.pressure),
  //     currentHour: dayjs().format("YYYY-MM-DD HH:mm:ss") // Adding current time
  //   };
  //   console.log(`adding report ${newReport.code}`);
  //   await reportStore.addReport(station._id, newReport);
  //   response.redirect("/station/" + station._id);
  // },
  
  
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
  
};