import { stationAnalytics } from "../utils/station-analytics.js";
import { trackStore } from "../models/track-store.js";
import { weatherStation } from "../models/station-store.js";

export const stationController = {
  async index(request, response) {
    const station = await weatherStation.getStationById(request.params.id);
    const shortestTrack = stationAnalytics.getShortestTrack(station);
    
    const viewData = {
      title: "Station",
      station: station,
      shortestTrack: shortestTrack,
    };
    response.render("station-view", viewData);
  },
  
  async addTrack(request, response) {
    const station = await weatherStation.getStationById(request.params.id);
    const newTrack = {
      title: request.body.title,
      artist: request.body.artist,
      duration: Number(request.body.duration),
    };
    console.log(`adding track ${newTrack.title}`);
    await trackStore.addTrack(station._id, newTrack);
    response.redirect("/station/" + station._id);
  },
  
   async deleteTrack(request, response) {
    const stationId = request.params.stationid;
    const trackId = request.params.trackid;
    console.log(`Deleting Track ${trackId} from Station ${stationId}`);
    await trackStore.deleteTrack(request.params.trackId);
    response.redirect("/station/" + stationId);
  },
};