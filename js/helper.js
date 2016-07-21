var HTMLarticleBase = '<div id="article%num%" class="news-article" style="position: relative"></div>';
var HTMLnewsLink = '<a href="#"><span class="article-link"></span></a>';
var HTMLnewsText ='<p class ="article-text">%data%</p>';
var HTMLnewsTitle ='<h4 class ="article-title">%data%</h4>';

var HTMLweatherTemp ='<h1 class="temperature">%data%</h1>';

var kToF = function(kelvin) {
  fahrenheit = (kelvin * (9/5)) - 459.67;
  return fahrenheit;
};
