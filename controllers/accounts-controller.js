import { userStore } from "../models/user-store.js";
// import { userAnalytics } from "../utils/user-analytics.js";


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
    console.log(`registering ${user.email}`);
    response.redirect("/");
  },

  
  /*
  So, in your account controller, do you have a method for that account-view page, that acts like the other index methods, e.g. the ones that create the 'viewData' objects and then use response.render() to render the targeted page?


Andrea Nardinocchi
  2 hours ago
I will DM you my code later... (edited) 


Wolfgang Helnwein
  2 hours ago
If so, you need to grab the currently logged in user from the request (which you'll route through your router to this method from the tab in the menu).


Wolfgang Helnwein
  2 hours ago
You can use something like this:
const user = await accountsController.getLoggedInUser(request);


Wolfgang Helnwein
  2 hours ago
Then prepare to populate the viewData object, like so: const firsName = user.firstName.


Wolfgang Helnwein
  2 hours ago
So you can then pass it into the object like this:
const viewData = {
            title: "Account Settings",
            firstName: firstName,
            ...


Wolfgang Helnwein
  2 hours ago
And then use the same response.render() method to pass in the viewData object to your view.


Wolfgang Helnwein
  2 hours ago
So can then use things like: {{firstName}} in your handlebars partial.
  */
    async account(request, response) {
   // const user =  await accountsController.getLoggedInUser(request.params.id);
    const user = await accountsController.getLoggedInUser(request); 
    const firstName = user.firstName;
    const lastName = user.lastName;
    const email = user.email;
    const password = user.password;
    
    const viewData = {
      title: "Account",
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    response.render("account-view", viewData);
  },
  
 
  
//   async register(request, response) {
//  //   const user = request.body;
//     const user = await accountsController.getLoggedInUser(request);
//     await userStore.addUser(user);
//     const firstName = user.firstName;
//     const lastName = user.lastName;
//     const email = user.email;
//     const password = user.password;

//     const newUser = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//     };
    
// //     const firstName = userAnalytics.getFirstName(user);
// //      const viewData = {
// //       title: "Account",
// //       firstName: firstName,
  
// //     };
// //     response.render("account-view", viewData);
  
//     console.log(`registering ${user.email}`);
//     response.redirect("/");
//   },

  // async signup(request, response) {
  //   const loggedInUser = await accountsController.getLoggedInUser(request);
  //   const newUser = {
  //     firstName: request.body.firstName,
  //     lastName: request.body.lastName,
  //     email: request.body.email,
  //     password: request.body.password,
  //     userid: loggedInUser._id,
  //   };
  //   console.log(`adding user ${newUser.firstName}`);
  //   await userStore.addUser(newUser);
  //   response.redirect("/account");
  // },
  
   async update(request, response) {
   
    const userId = request.params.userid;
    const updatedUser = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
    };
    console.log(`Updating User ${userId}`);
    const user = await userStore.getUserById(userId);
    await userStore.updateUser(user, updatedUser);
    response.redirect("/account/" + userId);
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

 //  async update(request, response) {
 //    //  const stationId = request.params.stationid;
 // //   const user = await accountsController.getLoggedInUser(request);
 //    const userId = request.params.userid;
 //    const updatedUser = {
 //      firstName: request.body.firstName,
 //      lastName: request.body.lastName,
 //      email: request.body.email,
 //      password: request.body.password,
 //    };
 //    console.log(`Updating User ${userId} from User ${userId}`);
 //    const user = await userStore.getUserById(userId);
 //   // const user = await accountsController.getLoggedInUser(request);
 //    await userStore.updateUser(user, updatedUser);
 //    response.redirect("/account/" + userId);
 //  },
  
  //   async update(request, response) {
  //   const stationId = request.params.stationid;
  //   const reportId = request.params.reportid;
  //   const updatedReport = {
  //     code: Number(request.body.code),
  //     temperature: Number(request.body.temperature),
  //     windSpeed: Number(request.body.windSpeed),
  //     windDirection: request.body.windDirection,
  //     windSpeed: Number(request.body.windSpeed),
  //     pressure: Number(request.body.pressure),
  //   };
  //   console.log(`Updating Report ${reportId} from Station ${stationId}`);
  //   const report = await reportStore.getReportById(reportId);
  //   await reportStore.updateReport(report, updatedReport);
  //   response.redirect("/station/" + stationId);
  // },
  
//   async signup(request, response) {
//     const userId = request.params.userid;
//     console.log(`Editing User ${userId}`);
//     const viewData = {
//       title: "Edit User",
//       track: await userStore.getUserById(userId),
//     };
//     response.render("account-view", viewData);
//   },
  
  
  
};
