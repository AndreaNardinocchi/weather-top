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
    console.log(`registering ${user.email}`);
    response.redirect("/");
  },

    async account(request, response) {
    const user = await accountsController.getLoggedInUser(request); 
    const firstName = user.firstName;
    const lastName = user.lastName;
    const email = user.email;
    const password = user.password;
   // const _id = user._id;
      
      const viewData = {
        title: "Account",
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
     //   _id: user._id,
      };
      response.render("account-view", viewData);
    },
  
  
   async update(request, response) {
   console.log(request.body);
   const userId = request.params.userid;
   const user = await accountsController.getLoggedInUser(request);
   const firstName = request.body.firstName;
   const lastName = request.body.lastName;
   const email = request.body.email;
   const password = request.body.password;
 //  const _id = request.body.userId;
   
    const updatedUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
   //     _id: userId,
     };
    
    
    await userStore.updateUser(user, updatedUser);
    response.cookie("weathertop", user.email, user.password);
    console.log(`updating ${user.email}`);
    response.redirect("/login/");
     
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
};
