var article = {
  "display": function(data, numArticles){
    for (var counter = 0; counter < numArticles; counter++) {
      var title = HTMLnewsTitle.replace("%data%",data.data.children[counter].data.title);
      title = title.replace("#",data.data.children[counter].data.url);
      $("#news").append(HTMLarticleBase);
      $("#news").append(title);
    }
    console.log(data);
  }
};

$.getJSON("https://www.reddit.com/r/news/hot.json?limit=2", function(data) {
        article.display(data, 2);
});
