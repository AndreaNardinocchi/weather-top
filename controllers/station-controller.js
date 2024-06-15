import { trackStore } from "../models/track-store.js";
import { weatherStation } from "../models/station-store.js";

export const stationController = {
  async index(request, response) {
    const station = await weatherStation.getStationById(request.params.id);
    const viewData = {
      title: "Station",
      station: station,
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
};