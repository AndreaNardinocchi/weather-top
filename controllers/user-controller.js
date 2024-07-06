import { weatherStation } from "../models/station-store.js";
import { userStore } from "../models/user-store.js";

export const userController = {
  async index(request, response) {
    const stationId = request.params.stationid;
    const userId = request.params.userid;
    console.log(`Editing User ${userId} from Station ${stationId}`);
    const viewData = {
      title: "Edit User",
      station: await weatherStation.getStationById(stationId),
      user: await userStore.getUserById(userId),
    };
    response.render("account-view", viewData);
  },

  async update(request, response) {
    const stationId = request.params.stationid;
    const userId = request.params.userid;
    const updatedUser = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
    };
    console.log(`Updating User ${userId} from Station ${stationId}`);
    const user = await userStore.getUserById(userId);
    await userStore.updateUser(user, updatedUser);
    response.redirect("/station/" + stationId);
  },
};