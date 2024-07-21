/* This controller enables the About page view to render.
The below 'index' action is invoked when "/about" route is triggered.
Console.log() is utilized for debug purposes, whereas 'render' passes the object 'viewData' */

export const aboutController = {
  index(request, response) {
    const viewData = {
      title: "The weather forecasts by city | Weather Top App",
    };
    console.log("about rendering");
    response.render("about-view", viewData);
  },
};


