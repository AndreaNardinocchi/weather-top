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

};