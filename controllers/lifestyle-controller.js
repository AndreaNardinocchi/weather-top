/* This controller enables the 'Lifestyle' page view to render. */

export const lifestyleController = {
    index(request, response) {
      const viewData = {
        title: "Lifestyle | Weather Top App",
      };
      console.log("lifestyle rendering");
      response.render("lifestyle-view", viewData);
    },
  };
  