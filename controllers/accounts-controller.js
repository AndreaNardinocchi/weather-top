/* This controller enables the 'signup', 'login' and 'account' page views to render. 
The models user-store js file is imported to retrieve its functions */
import { userStore } from "../models/user-store.js";

export const accountsController = {
  /* The below 'index' action is invoked when "/" route is triggered (user must be 'logged out').
 'render' passes the object 'viewData' */ 
  index(request, response) {
    const viewData = {
      title: "Login or Signup | Weather Top App",
    };
    response.render("index", viewData);
  },

  /* The below 'login' action is invoked when "/login" route is triggered (user must be 'logged out').
 'render' passes the object 'viewData' */ 
  login(request, response) {
    const viewData = {
      title: "Login to the Service | Weather Top App",
    };
    response.render("login-view", viewData);
  },

  /* The below 'logout' action is invoked when "/logout" route is triggered (user must be 'logged in'). */
  logout(request, response) {
    response.cookie("station", ""); // This cookie will clear out the session id
    response.redirect("/");
  },

  /* The below 'signup' action is invoked when "/signup" route is triggered to create a new account
 'render' passes the object 'viewData' */ 
  signup(request, response) {
    const viewData = {
      title: "Sign up to the Service | Weather Top App",
    };
    response.render("signup-view", viewData);
  },

  /* The below 'account' action is invoked when "/account" route is triggered (user must be logged in') */ 
  account(request, response) {
    const viewData = {
      title: "Your Account details | Weather Top App",
    };
    response.render("account-view", viewData);
  },
  
  /* The below 'register' action is invoked when "/register" route is triggered */ 
  async register(request, response) {
    // The 'user' object is passed through to the function addUser() from the user-store.js and a new user is added
    const user = request.body;
    await userStore.addUser(user);
    console.log(`registering ${user.email}`);
    response.redirect("/");
  },

  /* The below 'account' action is invoked when "/account" route is triggered and renders the user's data */ 
  async account(request, response) {
    const user = await accountsController.getLoggedInUser(request); 
    const firstName = user.firstName;
    const lastName = user.lastName;
    const email = user.email;
    const password = user.password;
    const _id = user._id;
      const viewData = {
        title: "Account",
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        _id: _id,
      };
      response.render("account-view", viewData);
    },
  
  /* The below 'account' action is invoked when "/account/edituser/" route is triggered and updates the user's data */ 
  async update(request, response) {
    console.log(request.body);
    // Discovering which user is logged in by retrieving the data from them model 'user-store.js'.
    const user = await accountsController.getLoggedInUser(request);
    // Passing user data throught to the 'updateUser' object
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;
    const email = request.body.email;
    const password = request.body.password;
    const _id = request.body._id;
    const updatedUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      _id: user._id,
     };
    // The below 'updateUser()' function from the 'user-store.js' file will update the user's data
    await userStore.updateUser(user, updatedUser); 
    // The cookie 'station' will be created and will contain the user's email
    response.cookie("station", user.email, user.password); 
    console.log(`updating ${user.email}`);
    response.redirect("/login/");
     
  },

  /* The below 'authenticate' action is invoked when "/authenticate" route is triggered */ 
  async authenticate(request, response) {
    // Discovering which user is logged in by retrieving theor email.
    const user = await userStore.getUserByEmail(request.body.email);
    if (user) {
      // The cookie 'station' will be created and will contain the user's email
      response.cookie("station", user.email);
      console.log(`logging in ${user.email}`);
      response.redirect("/dashboard");
    } else {
      // If the email is not recognized, the user will be prompted to make another log in attempt
      response.redirect("/login");
    }
  },

  // Utility method to check wether the user exists and which user owns it
  async getLoggedInUser(request) {
    const userEmail = request.cookies.station;
    return await userStore.getUserByEmail(userEmail);
  },    
};