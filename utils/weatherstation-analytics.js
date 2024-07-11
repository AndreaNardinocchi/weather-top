import { dashboardAnalytics } from "./dashboard-analytics.js";

export const weatherstationAnalytics = {
  // https://www.youtube.com/watch?v=CTHhlx25X-U
 getSortedStations(stations) {
    let sortedStations = stations.sort((a, b) => a.title.localeCompare(b.title));
    console.log(stations);
    return sortedStations;
 },
  
  // https://stackoverflow.com/questions/6439915/how-to-set-a-javascript-object-values-dynamically/6439954#6439954
  getStationData(station) {
  //  let station = null;
   // for (const i = 0; i<station.reports.length; i++) {
      
      const maxTemp = dashboardAnalytics.getMaxTemp(station);
      const minTemp = dashboardAnalytics.getMinTempReport(station);
      const maxWindSpeed = dashboardAnalytics.getMaxWindSpeed(station);
      const minWindSpeed= dashboardAnalytics.getMinWindSpeed(station);
      const maxPressure = dashboardAnalytics.getMaxPressure(station);
      const minPressure = dashboardAnalytics.getMinPressure(station);
      const iconCode = dashboardAnalytics.getIconCode(station);
      const weatherType = dashboardAnalytics.getWeatherType(station); 
      station[maxTemp] = maxTemp;
      station[minTemp] = minTemp;
      station[maxWindSpeed] = maxWindSpeed;
      station[minWindSpeed] = minWindSpeed;
      station[maxPressure] = maxPressure;
      station[minPressure] = minPressure;
      station[iconCode] = iconCode;
      station[weatherType] = weatherType; 
    
  
  }
};