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
  }
};
var numArticles = 3;
var subreddit = "tech";
var redditLink = "https://www.reddit.com/r/%sub%/hot.json?limit=" + numArticles;
redditLink = redditLink.replace("%sub%", subreddit);
$.getJSON(redditLink, function(data) {
        article.display(data, numArticles);
});

var weather = {
  "display": function(data) {
    var temp = HTMLweatherTemp.replace('%data%',Math.ceil(kToF(data.main.temp)) + '° in Urbana'  );
    $("#weather").append(temp);

  }
};

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q=Urbana,us&appid=7e23f882df706f7ae4ab39bf593ec890', function(data) {
        weather.display(data);
});
