import { stationAnalytics } from "./station-analytics.js";

export const dashboardAnalytics = {
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
  
    let iconCodeReport = stationAnalytics.getIconCodeReport(station);
    
  if (station.reports.length > 0) {
    // Icons changing based upon the weather code

  
 // weatherTypeReport  = station.reports[0];
    
    for (let i = 0; i < station.reports.length; i++) {
  
  //  if (station.reports[i].code < ((weatherTypeReport.code  >= 200) && (weatherTypeReport.code  <= 232))) {
      
   //   weatherTypeReport = station.reports[i];
     // weatherTypeReport.code = "Thunderstorm;"
      if(iconCodeReport=="https://openweathermap.org/img/wn/11d@2x.png") {
        iconCodeReport = "https://openweathermap.org/img/wn/11d@2x.png";
      } else if(iconCodeReport=="https://openweathermap.org/img/wn/09d@2x.png") {
        iconCodeReport = "https://openweathermap.org/img/wn/09d@2x.png";
      } else if(iconCodeReport=="https://openweathermap.org/img/wn/10d@2x.png") {
        iconCodeReport = "https://openweathermap.org/img/wn/10d@2x.png";
      } else if(iconCodeReport=="https://openweathermap.org/img/wn/13d@2x.png") {
        iconCodeReport = "https://openweathermap.org/img/wn/13d@2x.png";
      } else if(iconCodeReport=="https://openweathermap.org/img/wn/50d@2x.png") {
        iconCodeReport = "https://openweathermap.org/img/wn/50d@2x.png";
      } else if(iconCodeReport=="https://openweathermap.org/img/wn/01d@2x.png") {
        iconCodeReport = "https://openweathermap.org/img/wn/01d@2x.png";
      } else if(iconCodeReport=="https://openweathermap.org/img/wn/02d@2x.png") {
        iconCodeReport = "https://openweathermap.org/img/wn/02d@2x.png";
      } else if(iconCodeReport=="https://openweathermap.org/img/wn/03d@2x.png") {
        iconCodeReport = "https://openweathermap.org/img/wn/03d@2x.png";
      } else if(iconCodeReport=="https://openweathermap.org/img/wn/04d@2x.png") {
        iconCodeReport = "https://openweathermap.org/img/wn/04d@2x.png";
      }
//} 
}
 return iconCodeReport;
}

 return null;

      

  },
  



  getWeatherType(station) {
  
    let weatherTypeReport = stationAnalytics.getWeatherTypeReport(station);
    
  if (station.reports.length > 0) {
    // Icons changing based upon the weather code

  
 // weatherTypeReport  = station.reports[0];
    
    for (let i = 0; i < station.reports.length; i++) {
  
  //  if (station.reports[i].code < ((weatherTypeReport.code  >= 200) && (weatherTypeReport.code  <= 232))) {
      
   //   weatherTypeReport = station.reports[i];
     // weatherTypeReport.code = "Thunderstorm;"
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

//} 
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
    }
    return windDirectionReport;
  },
  
     getTemperature(station) {
    let temperatureReport = null;
    temperatureReport = station.reports[station.reports.length-1];
    if (station.reports.length > 0) {
       for (let i = 0; i < station.reports.length; i++) {
         if((station.reports[i].temperature>=-40) && (station.reports[i].temperature<=55)) {
            temperatureReport = station.reports[i].temperature;
         } else {
           temperatureReport = "##"
           
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
         if((station.reports[i].temperature>=-200) && (station.reports[i].temperature<200)) {
            tempFarReport = (station.reports[i].temperature * 1.8) + 32;
         } else {
           tempFarReport = "##"
           
         }
    
         }
    }
    return tempFarReport;
  },
  
 
  
       getWind(station) {
    let windReport = null;
    windReport = station.reports[station.reports.length-1];
    if (station.reports.length > 0) {
       for (let i = 0; i < station.reports.length; i++) {
         if((station.reports[i].windSpeed>=0) && (station.reports[i].temperature<=2000)) {
            windReport = station.reports[i].windSpeed;
         } else {
           windReport = "##"
           
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
           pressureReport = "##"
           
         }
    
         }
    }
    return pressureReport;
  },
  
        getLatitude(station) {
    let latitude = null;
    latitude = station.reports[station.reports.length-1];
    if (station.reports.length > 0) {
       for (let i = 0; i < station.reports.length; i++) {
         if((station.reports[i].latitude>=-2000) && (station.reports[i].latitude<=2000)) {
            latitude = station.reports[i].lattude;
         } else {
           latitude = "##"
           
         }
    
         }
    }
    return latitude;
  },
  
          getLongitude(station) {
    let longitude = null;
    longitude = station.reports[station.reports.length-1];
    if (station.reports.length > 0) {
       for (let i = 0; i < station.reports.length; i++) {
         if((station.reports[i].longitude>=-2000) && (station.reports[i].longitude<=2000)) {
            longitude = station.reports[i].lattude;
         } else {
           longitude = "##"
           
         }
    
         }
    }
    return longitude;
  },
  
};


