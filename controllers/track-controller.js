import { weatherStation } from "../models/station-store.js";
import { trackStore } from "../models/track-store.js";

export const trackController = {
  async index(request, response) {
    const stationId = request.params.stationid;
    const trackId = request.params.trackid;
    console.log(`Editing Track ${trackId} from Station ${stationId}`);
    const viewData = {
      title: "Edit Song",
      station: await weatherStation.getStationById(stationId),
      track: await trackStore.getTrackById(trackId),
    };
    response.render("track-view", viewData);
  },

  async update(request, response) {
    const stationId = request.params.stationid;
    const trackId = request.params.trackid;
    const updatedTrack = {
      title: request.body.title,
      artist: request.body.artist,
      duration: Number(request.body.duration),
    };
    console.log(`Updating Track ${trackId} from Station ${stationId}`);
    const track = await trackStore.getTrackById(trackId);
    await trackStore.updateTrack(track, updatedTrack);
    response.redirect("/station/" + stationId);
  },
};