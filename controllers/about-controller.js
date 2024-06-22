export const aboutController = {
  index(request, response) {
    const viewData = {
      title: "The weather forecasts by city",
    };
    console.log("about rendering");
    response.render("about-view", viewData);
  },
};

