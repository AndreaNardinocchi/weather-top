import { stationAnalytics } from "./station-analytics.js";

export const dashboardAnalytics = {
  getFastestWindReport(station) {
    let fastestWindReport = null;
    if (station.reports.length > 0) {
      fastestWindReport = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
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
      for (let i = 1; i < station.reports.length; i++) {
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
      for (let i = 1; i < station.reports.length; i++) {
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
      for (let i = 1; i < station.reports.length; i++) {
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
      for (let i = 1; i < station.reports.length; i++) {
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
      for (let i = 1; i < station.reports.length; i++) {
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
      for (let i = 1; i < station.reports.length; i++) {
        if (station.reports[i].pressure < minPressureReport.pressure) {
          minPressureReport = station.reports[i];
        }
      }
    }
    return minPressureReport.pressure;
  },

  // getMinCode(station) {
  //   let minCode = null;
  //   if (station.reports.length > 0) {
  //     minCode = station.reports[0];
  //     for (let i = 1; i < station.reports.length; i++) {
  //       if (station.reports[i].code < minCode.code) {
  //         minCode = station.reports[i];
  //       }
  //     }
  //   }
  //   return minCode.code;
  // },

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
  
};


// if ((weatherTypeReport.code  >= 200) && (weatherTypeReport.code  <= 232)) {
//   weatherTypeReport = "Thunderstorm";
// } else if ((weatherTypeReport.code  >= 300) && (weatherTypeReport.code  <= 321)) {
// weatherTypeReport = "Drizzle";
// } else if ((weatherTypeReport.code  >= 500) && (weatherTypeReport.code  <= 531)) {
// weatherTypeReport = "Rain";
// } else if ((weatherTypeReport.code  >= 600) && (weatherTypeReport.code  <= 622)) {
// weatherTypeReport = "Snow";
// } else if (weatherTypeReport.code  === 701) {
// weatherTypeReport = "Mist";
// } else if (weatherTypeReport.code  === 711) {
// weatherTypeReport = "Smoke";
// } else if (weatherTypeReport.code  === 721) {
// weatherTypeReport = "Haze";
// } else if (weatherTypeReport.code  === 731) {
//   weatherTypeReport = "Dust";
// }  else if (weatherTypeReport.code  === 741) {
//   weatherTypeReport = "Fog";
// } else if (weatherTypeReport.code  === 751) {
//     weatherTypeReport = "Sand";
// } else if (weatherTypeReport.code  === 761) {
// weatherTypeReport = "Dust";
// } else if (weatherTypeReport.code  === 762) {
// weatherTypeReport = "Ash";
// } else if (weatherTypeReport.code  === 771) {
// weatherTypeReport = "Squall";
// } else if (weatherTypeReport.code  === 781) {
// weatherTypeReport = "Tornado";
// } else if (weatherTypeReport.code  === 800) {
// weatherTypeReport = "Clear";
// } else if ((weatherTypeReport.code  >= 801) && (weatherTypeReport.code  <= 804))  {
// weatherTypeReport = "Clouds";
// } else {
// weatherTypeReport = "Clear";
// }
// }
//  return weatherTypeReport.code;
// }