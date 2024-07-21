/* This controller enables the 'News' page view to render. */

export const newsController = {
    index(request, response) {
      const viewData = {
        title: "News | Weather Top App",
      };
      console.log("news rendering");
      response.render("news-view", viewData);
    },
  };