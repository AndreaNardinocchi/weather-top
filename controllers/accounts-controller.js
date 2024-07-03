import { userStore } from "../models/user-store.js";

export const accountsController = {
  index(request, response) {
    const viewData = {
      title: "Login or Signup",
    };
    response.render("index", viewData);
  },

  login(request, response) {
    const viewData = {
      title: "Login to the Service",
    };
    response.render("login-view", viewData);
  },

  logout(request, response) {
    response.cookie("station", "");
    response.redirect("/");
  },

  signup(request, response) {
    const viewData = {
      title: "Sign up to the Service",
    };
    response.render("signup-view", viewData);
  },

  account(request, response) {
    const viewData = {
      title: "Account",
    };
    response.render("account-view", viewData);
  },

  async register(request, response) {
    const user = request.body;
    await userStore.addUser(user);
    const newUser = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
    };
    console.log(`registering ${user.email}`);
    response.redirect("/");
  },

  async addUser(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const newUser = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
      userid: loggedInUser._id,
    };
    console.log(`adding user ${newUser.firstName}`);
    await userStore.addUser(newUser);
    response.redirect("/account");
  },

  async authenticate(request, response) {
    const user = await userStore.getUserByEmail(request.body.email);
    if (user) {
      response.cookie("station", user.email);
      console.log(`logging in ${user.email}`);
      response.redirect("/dashboard");
    } else {
      response.redirect("/login");
    }
  },

  async getLoggedInUser(request) {
    const userEmail = request.cookies.station;
    return await userStore.getUserByEmail(userEmail);
  },

  async update(request, response) {
    //  const stationId = request.params.stationid;
    const userId = request.params.userid;
    const updatedUser = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
    };
    console.log(`Updating User ${userId} from User ${userId}`);
    const user = await userStore.getUserById(userId);
    await userStore.updateUser(request, updatedUser);
    response.redirect("/user/" + userId);
  },
};
