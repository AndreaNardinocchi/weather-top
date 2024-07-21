/* This controller enables the Station page view to render. 
Several controller, utility and models js files are imported to retrieve their functions */
import {dashboardAnalytics} from "../utils/dashboard-analytics.js";
import {accountsController} from "../controllers/accounts-controller.js";
import { stationAnalytics } from "../utils/station-analytics.js";
import { reportStore } from "../models/report-store.js";
import { weatherStation } from "../models/station-store.js";
import { userStore } from "../models/user-store.js";
import { weatherstationAnalytics } from "../utils/weatherstation-analytics.js";
import dayjs from "dayjs"; // npm install dayjs
import axios from "axios"; // Axios package added to use API data

export const stationController = {
  /* The below 'index' action is invoked when "/station/:id" route is triggered (user must be 'logged in').
 'render' passes the object 'viewData' */ 
  async index(request, response) {
    // Discovering the station by its id by retrieving data from the model 'station-store.js'.
    const station = await weatherStation.getStationById(request.params.id);
    // The below action will call out the method getStationData(station); from the 'weatherStation' utility.
    await weatherstationAnalytics.getStationData(station);
    /* Creating new object by calling out methods from 'station-analytics.js' utility. 
    All of them will be called in in the 'handlebars' via 'expressions' ({{}}) */
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
    const weatherTypeReport = stationAnalytics.getWeatherTypeReport(station);
    const feelsLikeReport = stationAnalytics.getFeelsLikeReport(station);
    const humidityReport = stationAnalytics.getHumidityReport(station);
    const viewData = {
      title: "Station View | Weather Top App",
      station: station,
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
    };
    response.render("station-view", viewData);
  },
  
  
  //------------- Manually generated Report---------------------------------//

  /* The below 'addManualReport' action is invoked when "/station/:id/addmanualreport" route is triggered (user must be 'logged in'). */ 
  async addManualReport(request, response) {
    // Discovering which station is stored in the station-store.js and associated to that specific user.
    const station = await weatherStation.getStationById(request.params.id);
    // Passing data through to add a new report
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
    // The below function addManualReport() is retrieved from the model report-store.js
    await reportStore.addManualReport(station._id, newReport);
    response.redirect("/station/" + station._id);
  },


  //-------------------- addChartReport ----------------------------------------//
  
  /* The below 'addChartReport' action is invoked when "/station/:id/addchartreport" route is triggered (user must be 'logged in'). */ 
  async addChartReport(request, response) {
    // Discovering which station is stored in the station-store.js and associated to that specific user.
    const station = await weatherStation.getStationById(request.params.id);
    console.log("rendering new report");
    // Retrieving the object 'title' value from the getStationData(station) action in weatherstation-analytics.js
    const title = station.title;
    let report = {};
    // Creating a cityRequestUrl object to retrieve weather data straight from the API call based upon the city name (title) inputted by the user 
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
      report.temperature = currentWeather.main.temp;
      report.tempFar = ((currentWeather.main.temp* 1.8) + 32).toFixed(2); //https://www.w3schools.com/howto/howto_js_format_number_dec.asp
      report.maxTempReport = currentWeather.main.temp_max;
      report.minTempReport = currentWeather.main.temp_min;
      report.feelsLikeReport = currentWeather.main.feels_like;
      report.humidityReport = currentWeather.main.humidity;
      report.windSpeed = currentWeather.wind.speed;
      report.pressure = currentWeather.main.pressure;
      report.windDir = currentWeather.wind.deg;   
   }
    // Retrieving the object 'latitude' and 'longitude' values from the getStationData(station) method in weatherstation-analytics.js
    const lng = station.longitude; 
    const lat = station.latitude;
    /* Creating a cityRequestUrl object to retrieve weather data straight from 
    the API call based upon the 'latitude' and 'longitude' inputted by the user */
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
      title: "Weather Chart Report | Weather Top App",
      station: report,  
      currentHour: dayjs().format("YYYY-MM-DD HH:mm:ss") // Adding current time
    };
    /* A new 'stationreading' is created since I created 3 different (addManualReport, addAutoReport and addChartReport) methods in the 'report-store.js' model,
    and this one would not render in the station view for some reason */
    response.render("stationreading-view" , viewData);
  },

  
    //--------------  AutoReport-------------------------------------//
  
  /* The below 'addAutoReport' action is invoked when "/station/:id/addautoreport" route is triggered (user must be 'logged in'). 
  It would be basically the same action as the 'addChartReport', but for the chart the the TempTrend and TempLabels objects, which have not been included in here */ 
  async addAutoReport(request, response) {
    const station = await weatherStation.getStationById(request.params.id);
    console.log("rendering new report");
    const title = station.title;
    let report = {};
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
    console.log(report);
    const viewData = {
      title: "Weather Autogenerated Report | Weather Top App",
      station: report,  
      currentHour: dayjs().format("YYYY-MM-DD HH:mm:ss") // Adding current time
    };
    // The function 'addAutoReport()' is retrieved from the model report-store.js
    await reportStore.addAutoReport(station._id, report);
    response.redirect("/station/" + station._id);
  },
  
   /* The below 'deleteReport' action is invoked when "/station/:stationid/deletereport/:reportid" route is triggered (user must be 'logged in'). */
   async deleteReport(request, response) {
     // Passing 'station' and 'report' data through.
     const stationId = request.params.stationid;
     const reportId = request.params.reportid;
     console.log(`Deleting Report ${reportId} from Station ${stationId}`);
     // The function 'deleteReport()' is retrieved from the model report-store.js
     await reportStore.deleteReport(reportId);
     response.redirect("/station/" + stationId);
   },
};