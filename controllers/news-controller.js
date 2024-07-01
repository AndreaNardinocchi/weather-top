export const newsController = {
    index(request, response) {
      const viewData = {
        title: "News",
      };
      console.log("news rendering");
      response.render("news-view", viewData);
    },
  };