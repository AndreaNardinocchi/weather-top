import { reportStore } from "./report-store.js";
import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";

const db = initStore("stations");

export const weatherStation = {
  async getAllStations() {
    await db.read();
    return db.data.stations;
  },

  async addStation(station) {
    await db.read();
    station._id = v4();
    db.data.stations.push(station);
    await db.write();
    return station;
  },

  async getStationById(id) {
    await db.read();
    const list = db.data.stations.find((station) => station._id === id);
    list.reports = await reportStore.getReportsByStationId(list._id);
    return list;
  },
  
     async getStationsByUserId(id) {
    await db.read();
    return db.data.stations.filter((station) => station.userid === id);
  },

  async deleteStationById(id) {
    await db.read();
    const index = db.data.stations.findIndex((station) => station._id === id);
    db.data.stations.splice(index, 1);
    await db.write();
  },

  async deleteAllStations() {
    db.data.stations = [];
    await db.write();
  },

  async updateStationDetails(station, newStation) {
    station.title = station.title;
    station._id = station._id;
    station.userid = station.userid;
    station.latitude = station.latitude;
    station.longitude = station.longitude;
    station.temperature = newStation.temperature;
    station.feelsLike = newStation.feelsLike;
    station.tempFar = newStation.tempFar;
    station.maxTemp = newStation.maxTemp;
    station.minTemp = newStation.minTemp;
    station.pressure = newStation.pressure;
    station.maxPressure = newStation.maxPressure;
    station.minPressure = newStation.minPressure;
    station.windDirect = newStation.windDirect;
    station.wind = newStation.wind;
    station.maxWindSpeed = newStation.maxWindSpeed;
    station.minWindSpeed = newStation.minWindSpeed;
    station.weatherType = newStation.weatherType;
   // station.a = newStation.a;
    station.iconCode = newStation.iconCode;
    //station.minCode = newStation.minCode;
    await db.write();
  }
  
  //  async getStationsByUserId(userid) {
  //   await db.read();
  //   return db.data.stations.filter((station) => station.userid === userid);
  // },
};
