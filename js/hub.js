var article = {
  "display": function(data, numArticles){
    for (var counter = 0; counter < numArticles; counter++) {
      var articleBase = HTMLarticleBase.replace("%num%", counter);
      var title = HTMLnewsTitle.replace("%data%",data.data.children[counter].data.title);
      var link = HTMLnewsLink.replace("#",data.data.children[counter].data.url);
      var subtext = HTMLnewsText.replace("%data%", "source: " + data.data.children[counter].data.domain);
      $("#news").append(articleBase);
      $("#article" + counter).append(title);
      $("#article" + counter).append(link);
      $("#article" + counter).append(subtext);
    }
    console.log(data);
  }
};
var numArticles = 3;
$.getJSON("https://www.reddit.com/r/news/hot.json?limit=" + numArticles, function(data) {
        article.display(data, numArticles);
});
