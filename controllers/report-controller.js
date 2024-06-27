import { weatherStation } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";

export const reportController = {
  async index(request, response) {
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    console.log(`Editing Report ${reportId} from Station ${stationId}`);
    const viewData = {
      title: "Edit Station",
      station: await weatherStation.getStationById(stationId),
      report: await reportStore.getReportById(reportId),
    };
    response.render("report-view", viewData);
  },

  async update(request, response) {
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    const updatedReport = {
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windSpeed: Number(request.body.windSpeed),
      windDirection: request.body.windDirection,
      windSpeed: Number(request.body.windSpeed),
      pressure: Number(request.body.pressure),
    };
    console.log(`Updating Report ${reportId} from Station ${stationId}`);
    const report = await reportStore.getReportById(reportId);
    await reportStore.updateReport(report, updatedReport);
    response.redirect("/station/" + stationId);
  },
};