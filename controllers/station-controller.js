import {dashboardAnalytics} from "../utils/dashboard-analytics.js";
import {accountsController} from "../controllers/accounts-controller.js";
import { stationAnalytics } from "../utils/station-analytics.js";
import { reportStore } from "../models/report-store.js";
import { weatherStation } from "../models/station-store.js";
import { userStore } from "../models/user-store.js";
import { weatherstationAnalytics } from "../utils/weatherstation-analytics.js";
import dayjs from "dayjs";
import axios from "axios";

//const apiKey = "YOUR API KEY HERE";
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
    const windDir = stationAnalytics.getWindDir(station);
    const windReport = stationAnalytics.getWindReport(station);
    const pressureReport = stationAnalytics.getPressureReport(station);
    const maxPressureReport = stationAnalytics.getMaxPressureReport(station);
    const minPressureReport = stationAnalytics.getMinPressureReport(station);
    const iconCodeReport = stationAnalytics.getIconCodeReport(station);
    console.log(iconCodeReport);
    const weatherTypeReport = stationAnalytics.getWeatherTypeReport(station);
   const feelsLikeReport = stationAnalytics.getFeelsLikeReport(station);
   const humidityReport = stationAnalytics.getHumidityReport(station);
   // const weatherDescReport = stationAnalytics.getWeatherDescReport(station);
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
      windDir: windDir,
      pressureReport: pressureReport,
      maxPressureReport: maxPressureReport,  
      minPressureReport: minPressureReport,
      iconCodeReport: iconCodeReport,
      weatherTypeReport: weatherTypeReport,
      feelsLikeReport: feelsLikeReport,
      humidityReport: humidityReport,
      //weatherDescReport : weatherDescReport,
    
    };
    response.render("station-view", viewData);
  },
  

  
  //------------- Manually generated Report---------------------------------//

  
  
  async addManualReport(request, response) {
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
    await reportStore.addManualReport(station._id, newReport);
    response.redirect("/station/" + station._id);
  },
  
  //--------------  AutoReport-------------------------------------//
  
  

  async addAutoReport(request, response) {
    const station = await weatherStation.getStationById(request.params.id);
    console.log("rendering new report");
    const title = station.title;
    let report = {};
 //   let reporte={}

  //  const lat = request.body.lat || "52.2502793";
   // const lng = request.body.lng || "-7.1177689";
 
    const cityRequestUrl  = `https://api.openweathermap.org/data/2.5/weather?q=${title}&units=metric&appid=c3e26a0b5387b001f6f548f5710c0baf`;
    const cityResult = await axios.get(cityRequestUrl);
 
    if (cityResult.status == 200) {
      const currentWeather = cityResult.data;
      report.currentHour = dayjs().format("YYYY-MM-DD HH:mm:ss");
      report.title = currentWeather.name;
      report.longitude = currentWeather.coord.lon;
      report.latitude = currentWeather.coord.lat;
      report.code = currentWeather.weather[0].id;
      report.iconCodeReport = currentWeather.weather[0].icon;
      report.weatherTypeReport = currentWeather.weather[0].main;
   //   report.weatherDescReport = currentWeather.weather[0].description;
      report.temperature = currentWeather.main.temp;
      report.tempFar = (currentWeather.main.temp* 1.8) + 32;
      report.maxTempReport = currentWeather.main.temp_max;
      report.minTempReport = currentWeather.main.temp_min;
      report.feelsLikeReport = currentWeather.main.feels_like;
      report.humidityReport = currentWeather.main.humidity;
      report.windSpeed = currentWeather.wind.speed;
      report.pressure = currentWeather.main.pressure;
      report.windDir = currentWeather.wind.deg; 
    
   }
     const lng = station.longitude; 
     const lat = station.latitude;
    
      const latLongRequestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=c3e26a0b5387b001f6f548f5710c0baf`;
      const latLongResult = await axios.get(latLongRequestUrl);
    if (latLongResult.status == 200) {
      report.tempTrend = [];
      report.trendLabels = [];
      const trends = latLongResult.data.list;
      for (let i=0; i<10; i++) {
        report.tempTrend.push(trends[i].main.temp);
        report.trendLabels.push(trends[i].dt_txt);
      }
   }
   console.log(report);
    const viewData = {
   //   title: "Weather Autogenerated Report | Weather Top App",
      station: report,  
      currentHour: dayjs().format("YYYY-MM-DD HH:mm:ss") // Adding current time
    };
  // await reportStore.addAutoReport(station._id, report);
  //   response.redirect("/station/" + station._id);
//   },
  
  //await reportStore.addAutoReport(station._id, report);
 //  response.redirect("/station/" + station._id);
    response.render("station-view" , viewData);
  },

  


  //-------------------- Chart ----------------------------------------//
  
  
  
async addChartReport(request, response) {
    const station = await weatherStation.getStationById(request.params.id);
    console.log("rendering new report");
    let report = {};
  const lng = station.longitude;
   const lat = station.latitude;
   // const lat = request.body.lat || "52.2502793";
   // const lng = request.body.lng || "-7.1177689";
    const latLongRequestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=c3e26a0b5387b001f6f548f5710c0baf`;
    const result = await axios.get(latLongRequestUrl);
    if (result.status == 200) {
      report.tempTrend = [];
      report.trendLabels = [];
      const trends = result.data.list;
      for (let i=0; i<10; i++) {
        report.tempTrend.push(trends[i].main.temp);
        report.trendLabels.push(trends[i].dt_txt);
      }
   }
    console.log(report);
    const viewData = {
      title: "Weather Autogenerated Report | Weather Top App",
      station: report,  
      currentHour: dayjs().format("YYYY-MM-DD HH:mm:ss") // Adding current time
    };
response.render("stationreading-view", viewData);
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
  
};