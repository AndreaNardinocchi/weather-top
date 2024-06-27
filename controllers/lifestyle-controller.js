export const lifestyleController = {
    index(request, response) {
      const viewData = {
        title: "",
      };
      console.log("lifestyle rendering");
      response.render("lifestyle-view", viewData);
    },
  };
  