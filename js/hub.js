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
    var temp = HTMLweatherTemp.replace('%data%',Math.ceil(kToF(data.main.temp)) + '° in ' + data.name  );
    var icon = HTMLweatherIcon.replace( "%img%", selectWeatherImg(data.clouds.all, 0 ) );
    // console.log();

    $("#temperature").append(icon);
    $("#temperature").append(temp);

  }
};
city = "Urbana";
weatherLink = 'http://api.openweathermap.org/data/2.5/weather?q=%city%,us&appid=7e23f882df706f7ae4ab39bf593ec890'.replace("%city%", city);



$.getJSON(weatherLink, function(data) {
        weather.display(data);
});

session_id = "123abc";
function reply_click(clicked_id) {
  var nameValue = document.getElementById(clicked_id).value;
  console.log(nameValue);
  $.ajax({
    url: 'https://api.wit.ai/converse',
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "Bearer " + "G5RV6P7V22FSK25DEQCYBFOYAAMQR5V2");
    },
    data: {
      'session_id': session_id,
      'id' : 'entityID1',
      'q': nameValue,
      'access_token' : 'G5RV6P7V22FSK25DEQCYBFOYAAMQR5V2'
    },
    dataType: 'jsonp',
    ContentType: 'application/json',
    Accept: "application/json",
    method: 'XPOST',
    jsonp: false,
    jsonpCallback : "callbackMethod",
    success: function(response) {
        console.log("success!", response);
    },
    error: function (jqXHR, textStatus, errorThrown) {

    }
  });
}
