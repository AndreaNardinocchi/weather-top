import dayjs from "dayjs";

export const stationAnalytics = {
  getFastestWindReport(station) {
    let fastestWindReport = null;
    if (station.reports.length > 0) {
      fastestWindReport = station.reports[0];
      for (let i = 0; i < station.reports.length; i++) {
        if (station.reports[i].windSpeed > fastestWindReport.windSpeed) {
          fastestWindReport = station.reports[i];
        }
      }
    }
    return fastestWindReport;
  },

  getMaxTempReport(station) {
    let maxTempReport = null;
    if (station.reports.length > 0) {
      maxTempReport = station.reports[0];
      for (let i = 0; i < station.reports.length; i++) {
        if (station.reports[i].temperature > maxTempReport.temperature) {
          maxTempReport = station.reports[i];
        }
      }
    }
    return maxTempReport;
  },

  getMinTempReport(station) {
    let minTempReport = null;
    if (station.reports.length > 0) {
      minTempReport = station.reports[0];
      for (let i = 0; i < station.reports.length; i++) {
        if (station.reports[i].temperature < minTempReport.temperature) {
          minTempReport = station.reports[i];
        }
      }
    }
    return minTempReport;
  },

  getMaxWindSpeedReport(station) {
    let maxWindSpeedReport = null;
    if (station.reports.length > 0) {
      maxWindSpeedReport = station.reports[0];
      for (let i = 0; i < station.reports.length; i++) {
        if (station.reports[i].windSpeed > maxWindSpeedReport.windSpeed) {
          maxWindSpeedReport = station.reports[i];
        }
      }
    }
    return maxWindSpeedReport;
  },

  getMinWindSpeedReport(station) {
    let minWindSpeedReport = null;
    if (station.reports.length > 0) {
      minWindSpeedReport = station.reports[0];
      for (let i = 0; i < station.reports.length; i++) {
        if (station.reports[i].windSpeed < minWindSpeedReport.windSpeed) {
          minWindSpeedReport = station.reports[i];
        }
      }
    }
    return minWindSpeedReport;
  },

  getMaxPressureReport(station) {
    let maxPressureReport = null;
    if (station.reports.length > 0) {
      maxPressureReport = station.reports[0];
      for (let i = 0; i < station.reports.length; i++) {
        if (station.reports[i].pressure > maxPressureReport.pressure) {
          maxPressureReport = station.reports[i];
        }
      }
    }
    return maxPressureReport;
  },

  getMinPressureReport(station) {
    let minPressureReport = null;
    if (station.reports.length > 0) {
      minPressureReport = station.reports[0];
      for (let i = 0; i < station.reports.length; i++) {
        if (station.reports[i].pressure < minPressureReport.pressure) {
          minPressureReport = station.reports[i];
        }
      }
    }
    return minPressureReport;
  },
  
   getWindDirectionReport(station) {
     let windDirectionReport = station.reports[station.reports.length-1];
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
         } else {
           windDirectionReport = "";
         }
       }
       return windDirectionReport;
    }
    return null;
  },
  
  getTemperatureReport(station) {
    let temperatureReport = null;
    temperatureReport = station.reports[station.reports.length-1];
    if (station.reports.length > 0) {
      for (let i = 0; i < station.reports.length; i++) {
        if((station.reports[i].temperature>=-40) && (station.reports[i].temperature<=300)) {
          temperatureReport = station.reports[i].temperature;
        } else {
          temperatureReport = "##";
        }
      }
    }
    return temperatureReport;
  },
  
  getTempFarReport(station) {
    let tempFarReport = null;
    tempFarReport = station.reports[station.reports.length-1];
    if (station.reports.length > 0) {
       for (let i = 0; i < station.reports.length; i++) {
         if((station.reports[i].temperature>=-200) && (station.reports[i].temperature<1000)) {
           tempFarReport = (station.reports[i].temperature * 1.8) + 32;
         } else {
           tempFarReport = "##";
         }
       }
    }
    return tempFarReport;
  },
  
  getWindReport(station) {
    let windReport = null;
    windReport = station.reports[station.reports.length-1];
    if (station.reports.length > 0) {
       for (let i = 0; i < station.reports.length; i++) {
         if((station.reports[i].windSpeed>=0) && (station.reports[i].temperature<=2000)) {
            windReport = station.reports[i].windSpeed;
         } else {
           windReport = "";
         }
       }
    }
    return windReport;
  },
  
  getWindDir(station) {
    let windDir = null;
    windDir = station.reports[station.reports.length-1];
    if (station.reports.length > 0) {
       for (let i = 0; i < station.reports.length; i++) {
         if((station.reports[i].windDir>=0) && (station.reports[i].windDir<=2000)) {
            windDir = station.reports[i].windDir;
          } else {
            windDir = " ";
          }
       }
    }
    return windDir;
  },
  
  getPressureReport(station) {
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
  
  getFeelsLikeReport(station) {
    let feelsLikeReport = null;
    feelsLikeReport = station.reports[station.reports.length-1];
    if (station.reports.length > 0) {
       for (let i = 0; i < station.reports.length; i++) {
         if((station.reports[i].pressure>=-200) && (station.reports[i].pressure<=2000)) {
            feelsLikeReport = station.reports[i].feelsLikeReport;
          } else {
            feelsLikeReport = " ";
          }
       }
    }
    return feelsLikeReport;
  },
  
  getHumidityReport(station) {
    let humidityReport = null;
    humidityReport = station.reports[station.reports.length-1];
    if (station.reports.length > 0) {
       for (let i = 0; i < station.reports.length; i++) {
         if((station.reports[i].pressure>=0) && (station.reports[i].pressure<=2000)) {
            humidityReport = station.reports[i].feelsLikeReport;
          } else {
            humidityReport = " ";
          }
       }
    }
    return humidityReport;
  },
  
  getIconCodeReport(station) {
      if (station.reports.length > 0) {
    // Icons changing based upon the weather code          
        let iconCodeReport = null;
        // https://www.freecodecamp.org/news/how-to-get-the-last-item-in-an-array-in-javascript/
        iconCodeReport= station.reports[station.reports.length-1];
        for (let i = 0; i <1; i++) {
          if ((iconCodeReport.code  >= 200) && (iconCodeReport.code  <= 232)) {
            iconCodeReport = "11d";
          } else if ((iconCodeReport.code  >= 300) && (iconCodeReport.code  <= 321)) {
            iconCodeReport = "09d";
          } else if ((iconCodeReport.code  >= 500) && (iconCodeReport.code  <= 504)) {
            iconCodeReport = "10d";
          } else if (iconCodeReport.code  === 511) {
            iconCodeReport = "13d";
          } else if ((iconCodeReport.code  >= 520) && (iconCodeReport.code  <= 531)) {
            iconCodeReport = "09d";
          } else if ((iconCodeReport.code  >= 600) && (iconCodeReport.code  <= 622)) {
            iconCodeReport = "13d";
          } else if ((iconCodeReport.code  >= 701) && (iconCodeReport.code  <= 781)) {
            iconCodeReport = "50d";
          } else if ((iconCodeReport.code  === 800)) {
            iconCodeReport = "01d";
          } else if ((iconCodeReport.code  === 801)) {
            iconCodeReport = "02d";
          } else if ((iconCodeReport.code  === 802)) {
            iconCodeReport = "03d";
          }  else if ((iconCodeReport.code  >= 803) && (iconCodeReport.code  <= 804)) {
            iconCodeReport = "04d";
          } else {
            iconCodeReport = "01d";
          }
        }
        return iconCodeReport;
      }
    return "01d";
  },
  
  
  getWeatherTypeReport(station) {
    if (station.reports.length > 0) {
    // Icons changing based upon the weather code
      let weatherTypeReport = null;
      //  https://www.freecodecamp.org/news/how-to-get-the-last-item-in-an-array-in-javascript/
      weatherTypeReport  = station.reports[station.reports.length-1];
      for (let i = 0; i < 1; i++) {
        if ((weatherTypeReport.code  >= 200) && (weatherTypeReport.code  <= 232)) {
          weatherTypeReport = "Thunderstorm";
        } else if ((weatherTypeReport.code  >= 300) && (weatherTypeReport.code  <= 321)) {
          weatherTypeReport = "Drizzle";
        } else if ((weatherTypeReport.code  >= 500) && (weatherTypeReport.code  <= 531)) {
          weatherTypeReport = "Rain";
        } else if ((weatherTypeReport.code  >= 600) && (weatherTypeReport.code  <= 622)) {
          weatherTypeReport = "Snow";
        } else if (weatherTypeReport.code  === 701) {
          weatherTypeReport = "Mist";
        } else if (weatherTypeReport.code  === 711) {
          weatherTypeReport = "Smoke";
        } else if (weatherTypeReport.code  === 721) {
          weatherTypeReport = "Haze";
        } else if (weatherTypeReport.code  === 731) {
          weatherTypeReport = "Dust";
        } else if (weatherTypeReport.code  === 741) {
          weatherTypeReport = "Fog";
        } else if (weatherTypeReport.code  === 751) {
          weatherTypeReport = "Sand";
        } else if (weatherTypeReport.code  === 761) {
          weatherTypeReport = "Dust";
        } else if (weatherTypeReport.code  === 762) {
          weatherTypeReport = "Ash";
        } else if (weatherTypeReport.code  === 771) {
          weatherTypeReport = "Squall";
        } else if (weatherTypeReport.code  === 781) {
          weatherTypeReport = "Tornado";
        } else if (weatherTypeReport.code  === 800) {
          weatherTypeReport = "Clear";
        } else if ((weatherTypeReport.code  >= 801) && (weatherTypeReport.code  <= 804))  {
          weatherTypeReport = "Clouds";
        } else {
          weatherTypeReport = "Clear";
        }
      }
      return weatherTypeReport;
    }
    return null;
  },
};


