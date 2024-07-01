export const stationAnalytics = {
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

  getMaxTempReport(station) {
    let maxTempReport = null;
    if (station.reports.length > 0) {
      maxTempReport = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
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
      for (let i = 1; i < station.reports.length; i++) {
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
      for (let i = 1; i < station.reports.length; i++) {
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
      for (let i = 1; i < station.reports.length; i++) {
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
      for (let i = 1; i < station.reports.length; i++) {
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
      for (let i = 1; i < station.reports.length; i++) {
        if (station.reports[i].pressure < minPressureReport.pressure) {
          minPressureReport = station.reports[i];
        }
      }
    }
    return minPressureReport;
  },

  getIconCodeReport(station) {
      if (station.reports.length > 0) {
    // Icons changing based upon the weather code          
   let iconCodeReport = station.reports[0];


for (let i = 0; i < 1; i++) {
      
  
    if ((iconCodeReport.code  >= 200) && (iconCodeReport.code  <= 232)) {
      iconCodeReport = "https://openweathermap.org/img/wn/11d@2x.png";
  } else if ((iconCodeReport.code  >= 300) && (iconCodeReport.code  <= 321)) {
    iconCodeReport = "https://openweathermap.org/img/wn/09d@2x.png";
  } else if ((iconCodeReport.code  >= 500) && (iconCodeReport.code  <= 504)) {
    iconCodeReport = "https://openweathermap.org/img/wn/10d@2x.png";
  } else if (iconCodeReport.code  === 511) {
    iconCodeReport = "https://openweathermap.org/img/wn/13d@2x.png";
  } else if ((iconCodeReport.code  >= 520) && (iconCodeReport.code  <= 531)) {
    iconCodeReport = "https://openweathermap.org/img/wn/09d@2x.png";
  } else if ((iconCodeReport.code  >= 600) && (iconCodeReport.code  <= 622)) {
    iconCodeReport = "https://openweathermap.org/img/wn/13d@2x.png";
  } else if ((iconCodeReport.code  >= 701) && (iconCodeReport.code  <= 781)) {
    iconCodeReport = "https://openweathermap.org/img/wn/50d@2x.png";
  } else if ((iconCodeReport.code  === 800)) {
    iconCodeReport = "https://openweathermap.org/img/wn/01d@2x.png";
  } else if ((iconCodeReport.code  === 801)) {
    iconCodeReport = "https://openweathermap.org/img/wn/02d@2x.png";
    } else if ((iconCodeReport.code  === 802)) {
      iconCodeReport = "https://openweathermap.org/img/wn/03d@2x.png";
    }  else if ((iconCodeReport.code  >= 803) && (iconCodeReport.code  <= 804)) {
    iconCodeReport = "https://openweathermap.org/img/wn/04d@2x.png";
   } else {
    iconCodeReport = "https://openweathermap.org/img/wn/01d@2x.png";
   }
    }
        return iconCodeReport;
  

 return null;
  }
},


  getWeatherTypeReport(station) {
  
  
  if (station.reports.length > 0) {
    // Icons changing based upon the weather code
  let weatherTypeReport = null;
  weatherTypeReport  = station.reports[0];
    
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
    }  else if (weatherTypeReport.code  === 741) {
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