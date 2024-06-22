export const stationAnalytics = {
  getShortestTrack(station) {
    let shortestTrack = null;
    if (station.tracks.length > 0) {
      shortestTrack = station.tracks[0];
      for (let i = 1; i < station.tracks.length; i++) {
        if (station.tracks[i].duration < shortestTrack.duration) {
          shortestTrack = station.tracks[i];
        }
      }
    }
    return shortestTrack;
  },
};