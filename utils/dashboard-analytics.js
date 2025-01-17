/* This util js file contains all methods used for the dashboard view */
import { stationAnalytics } from "./station-analytics.js";

export const dashboardAnalytics = {
  
  getMaxTemp(station) {
    let maxTempReport = null;
    if (station.reports.length > 0) {
      maxTempReport = station.reports[0];
      for (let i = 0; i < station.reports.length; i++) {
        if (station.reports[i].temperature > maxTempReport.temperature) {
          maxTempReport = station.reports[i];
        }
      }
    }
    return maxTempReport.temperature;
  },

  getMinTemp(station) {
    let minTempReport = null;
    if (station.reports.length > 0) {
      minTempReport = station.reports[0];
      for (let i = 0; i < station.reports.length; i++) {
        if (station.reports[i].temperature < minTempReport.temperature) {
          minTempReport = station.reports[i];
        }
      }
    }
    return minTempReport.temperature;
  },

  getMaxWindSpeed(station) {
    let maxWindSpeedReport = null;
    if (station.reports.length > 0) {
      maxWindSpeedReport = station.reports[0];
      for (let i = 0; i < station.reports.length; i++) {
        if (station.reports[i].windSpeed > maxWindSpeedReport.windSpeed) {
          maxWindSpeedReport = station.reports[i];
        }
      }
    }
    return maxWindSpeedReport.windSpeed;
  },

  getMinWindSpeed(station) {
    let minWindSpeedReport = null;
    if (station.reports.length > 0) {
      minWindSpeedReport = station.reports[0];
      for (let i = 0; i < station.reports.length; i++) {
        if (station.reports[i].windSpeed < minWindSpeedReport.windSpeed) {
          minWindSpeedReport = station.reports[i];
        }
      }
    }
    return minWindSpeedReport.windSpeed;
  },

  getMaxPressure(station) {
    let maxPressureReport = null;
    if (station.reports.length > 0) {
      maxPressureReport = station.reports[0];
      for (let i = 0; i < station.reports.length; i++) {
        if (station.reports[i].pressure > maxPressureReport.pressure) {
          maxPressureReport = station.reports[i];
        }
      }
    }
    return maxPressureReport.pressure;
  },

  getMinPressure(station) {
    let minPressureReport = null;
    if (station.reports.length > 0) {
      minPressureReport = station.reports[0];
      for (let i = 0; i < station.reports.length; i++) {
        if (station.reports[i].pressure < minPressureReport.pressure) {
          minPressureReport = station.reports[i];
        }
      }
    }
    return minPressureReport.pressure;
  },

  getIconCode(station) {
    // Retrieving the iconCodeReport value from stationAnalytics.getIconCodeReport(station); method.
    let iconCodeReport = stationAnalytics.getIconCodeReport(station);
    if (station.reports.length > 0) {
    // Icons changing based upon the weather code
      for (let i = 0; i < station.reports.length; i++) {
        if(iconCodeReport==="11d") {
          iconCodeReport = "11d";
        } else if(iconCodeReport==="09d") {
          iconCodeReport = "09d";
        } else if(iconCodeReport==="10d") {
          iconCodeReport = "10d";
        } else if(iconCodeReport==="13d") {
          iconCodeReport = "13d";
        } else if(iconCodeReport==="50d") {
          iconCodeReport = "50d";
        } else if(iconCodeReport==="01d") {
          iconCodeReport = "01d";
        } else if(iconCodeReport==="02d") {
          iconCodeReport = "02d";
        } else if(iconCodeReport==="03d") {
          iconCodeReport = "03d";
        } else if(iconCodeReport==="04d") {
          iconCodeReport = "04d";
        } else if(iconCodeReport==="") {
          iconCodeReport="01d";
        }
      }
      return iconCodeReport;
    }
  },
  
  getWeatherType(station) {
    // Retrieving the weatherTypeReport value from stationAnalytics.getWeatherTypeReport(station); method.
    let weatherTypeReport = stationAnalytics.getWeatherTypeReport(station);
    if (station.reports.length > 0) {
    // Icons changing based upon the weather code
      for (let i = 0; i < station.reports.length; i++) {
        if(weatherTypeReport=="Thunderstorm") {
          weatherTypeReport = "Thunderstorm";
        } else if(weatherTypeReport=="Drizzle") {
          weatherTypeReport = "Drizzle";
        } else if(weatherTypeReport=="Rain") {
          weatherTypeReport = "Rain";
        } else if(weatherTypeReport=="Snow") {
          weatherTypeReport = "Snow";
        } else if(weatherTypeReport=="Mist") {
          weatherTypeReport = "Mist";
        } else if(weatherTypeReport=="Smoke") {
          weatherTypeReport = "Smoke";
        } else if(weatherTypeReport=="Haze") {
          weatherTypeReport = "Haze";
        } else if(weatherTypeReport=="Dust") {
          weatherTypeReport = "Dust";
        } else if(weatherTypeReport=="Fog") {
          weatherTypeReport = "Fog";
        } else if(weatherTypeReport=="Sand") {
          weatherTypeReport = "Sand";
        } else if(weatherTypeReport=="Ash") {
          weatherTypeReport = "Ash";
        }  else if(weatherTypeReport=="Squall") {
          weatherTypeReport = "Squall";
        } else if(weatherTypeReport=="Tornado") {
          weatherTypeReport = "Tornado";
        } else if(weatherTypeReport=="Clear") {
          weatherTypeReport = "Clear";
        } else if(weatherTypeReport=="Clouds") {
          weatherTypeReport = "Clouds";
        }
      }
      return weatherTypeReport;
    }
    return null;
  },
  
   getWindDirect(station) {
    let windDirectionReport = null;
    windDirectionReport = station.reports[station.reports.length];
    if (station.reports.length > 0) {
      for (let i = 0; i < station.reports.length; i++) {
        if(station.reports[i].windDirection==="West-northwest (WNW)") {
          windDirectionReport= "West-northwest (WNW)";
        }
        if(station.reports[i].windDirection==="North-northeast (NNE)") {
          windDirectionReport= "North-northeast (NNE)";
        }
        if(station.reports[i].windDirection==="East-northeast (ENE)") {
          windDirectionReport= "East-northeast (ENE)";
        }
        if(station.reports[i].windDirection==="East-southeast (ESE)") {
          windDirectionReport= "East-southeast (ESE)";
        }
        if(station.reports[i].windDirection==="South-southeast (SSE)") {
          windDirectionReport= "South-southeast (SSE)";
        }
        if(station.reports[i].windDirection==="South-southwest (SSW)") {
          windDirectionReport= "South-southwest (SSW)";
        }
        if(station.reports[i].windDirection==="West-southwest (WSW)") {
          windDirectionReport= "West-southwest (WSW)";
        }
      }
      return windDirectionReport;
    }
     return null;
  },
  
    getWindDir(station) {
    let windDir = stationAnalytics.getWindDir(station);;
    windDir = station.reports[station.reports.length-1];
    if (station.reports.length > 0) {
       for (let i = 0; i < station.reports.length; i++) {
         if((station.reports[i].windDir>=0) && (station.reports[i].windDir<=2000)) {
            windDir = station.reports[i].windDir;
          } else {
            windDir = "## ";
          }
       }
    }
    return windDir;
  },
  
  
  getTemperature(station) {
    let temperatureReport = null;
    temperatureReport = station.reports[station.reports.length-1];
    if (station.reports.length > 0) {
      for (let i = 0; i < station.reports.length; i++) {
        if((station.reports[i].temperature>=-100) && (station.reports[i].temperature<=1000)) {
          temperatureReport = station.reports[i].temperature;
        } else {
          temperatureReport = "##";
        }
      }
    }
    return temperatureReport;
  },
  
  getTempFar(station) {
    let tempFarReport = null;
    tempFarReport = station.reports[station.reports.length-1];
    if (station.reports.length > 0) {
       for (let i = 0; i < station.reports.length; i++) {
         if((station.reports[i].temperature>=-500) && (station.reports[i].temperature<= 2000)) {
            tempFarReport = ((station.reports[i].temperature * 1.8) + 32).toFixed(2);
         } else {
           tempFarReport = "##";
         }
       }
    }
    return tempFarReport;
  },
  
  getFeelsLike(station) {
    let feelsLikeReport = null;
    feelsLikeReport = station.reports[station.reports.length-1];
    if (station.reports.length > 0) {
       for (let i = 0; i < station.reports.length; i++) {
         if((station.reports[i].feelsLikeReport>=-40) && (station.reports[i].feelsLikeReport<=55)) {
            feelsLikeReport = station.reports[i].feelsLikeReport;
         } else {
           feelsLikeReport = "##";
         }
       }
    }
    return feelsLikeReport;
  },
  
  getHumidity(station) {
    let humidityReport = null;
    humidityReport = station.reports[station.reports.length-1];
    if (station.reports.length > 0) {
       for (let i = 0; i < station.reports.length; i++) {
         if((station.reports[i].pressure>=0) && (station.reports[i].pressure<=2000)) {
            humidityReport = station.reports[i].humidityReport;
          } else {
            humidityReport = "## ";
          }
       }
    }
    return humidityReport;
  },
  
  getWind(station) {
    let windReport = null;
    windReport = station.reports[station.reports.length-1];
    if (station.reports.length > 0) {
       for (let i = 0; i < station.reports.length; i++) {
         if((station.reports[i].windSpeed>=0) && (station.reports[i].temperature<=2000)) {
            windReport = station.reports[i].windSpeed;
         } else {
           windReport = "##";
         }
       }
    }
    return windReport;
  },
  
  getPressure(station) {
    let pressureReport = null;
    pressureReport = station.reports[station.reports.length-1];
    if (station.reports.length > 0) {
       for (let i = 0; i < station.reports.length; i++) {
         if((station.reports[i].pressure>=0) && (station.reports[i].pressure<=2000)) {
            pressureReport = station.reports[i].pressure;
         } else {
           pressureReport = "##";  
         }
       }
    }
    return pressureReport;
  },
};
