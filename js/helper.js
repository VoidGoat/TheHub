var HTMLarticleBase = '<div id="article%num%" class="news-article" style="position: relative"></div>';
var HTMLnewsLink = '<a href="#"><span class="article-link"></span></a>';
var HTMLnewsText ='<p class ="article-text">%data%</p>';
var HTMLnewsTitle ='<h4 class ="article-title">%data%</h4>';

var HTMLweatherTemp ='<h1 class="" style="margin-top: 0px;">%data%</h1>';
var HTMLweatherIcon = '<img class="weatherIcon" src="%img%" alt="%alt%" height="75px" width="75px" />';


var kToF = function(kelvin) {
  fahrenheit = (kelvin * (9/5)) - 459.67;
  return fahrenheit;
};
var selectWeatherImg = function(clouds, rain) {
  imgName = "%clouds%%rain%";
  if (clouds > 20) {
    imgName = imgName.replace("%clouds%", "Cloud");

  } if (clouds > 10) {
    imgName = imgName.replace("%clouds%", "CloudSun");

  } else {
    imgName = imgName.replace( "%clouds%", "Sun" );
  }

  if (rain > 0) {
    imgName = imgName.replace("%rain%", "Rain");
  } else {
    imgName = imgName.replace("%rain%", "");
  }

  return "images/" + imgName + ".png";
};
