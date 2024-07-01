export const stationAnalytics = {
  getIconCodeReport(station) {
    if (station.reports.length > 0) {
      let iconCodeReport = station.reports[0];


for (let i = 0; i < station.reports.length; i++) {
      
  
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
  }

 return null;
  },
};