/* This controller enables the 'report' rendering and updates on the 'station' page view. */

import { weatherStation } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";

export const reportController = {
   /* The below 'index' action is invoked when "/station/:id" route is triggered (user must be 'logged in'). */
  async index(request, response) {
    // Passing 'station' and 'report' data through.
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    console.log(`Editing Report ${reportId} from Station ${stationId}`);
    const viewData = {
      title: "Edit Station",
      // Stations and reports are rendered as retrieved from the model 'user-store.js' and 'report-store.js'.
      station: await weatherStation.getStationById(stationId),
      report: await reportStore.getReportById(reportId),
    };
    response.render("report-view", viewData);
  },

  /* The below 'index' action is invoked when "/station/:stationid/editreport/:reportid" route is triggered (user must be 'logged in'). */
  async update(request, response) {
    // Passing 'station' and 'report' data through.
    const stationId = request.params.stationid;
    const reportId = request.params.reportid;
    // Creating object updatedReport to update report
    const updatedReport = {
      code: Number(request.body.code),
      temperature: Number(request.body.temperature),
      windSpeed: Number(request.body.windSpeed),
      windDirection: request.body.windDirection,
      windDir: request.body.windDir,
      windSpeed: Number(request.body.windSpeed),
      pressure: Number(request.body.pressure),
    };
    console.log(`Updating Report ${reportId} from Station ${stationId}`);
    // Retrieving the report to update from 'report-store,js'
    const report = await reportStore.getReportById(reportId);
    // The updateReport() function from 'report-store,js' will update the report
    await reportStore.updateReport(report, updatedReport);
    response.redirect("/station/" + stationId);
  },
};