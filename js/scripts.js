// Docs at http://simpleweatherjs.com



$(document).ready(function() {


//Java Script Time Shenanigans
//Please for the love of god work.


//DATE AND TIME START

var d = new Date();
var hour = d.getHours();
var minutes = d.getMinutes();
var month = d.getMonth()+1;
var day = d.getDate();
var year = d.getFullYear();

//console.log(hour%12);
//console.log(minutes);
//console.log(month);
//console.log(day);
//console.log(year);

if(hour > 12)
      var apm = "pm";
  else
      var apm = "am";



if(hour > 19 || hour < 7)
{

    $('body').removeClass('day').addClass('night');
    $('article').removeClass('articleDay').addClass('articleNight');
}
else
{
  $('body').removeClass('night').addClass('day');
    $('article').removeClass('articleNight').addClass('articleDay');

}

var date = month + "/" + day + "/" + year;
var time = hour%12 + ":" + minutes + " " + apm;




$('.date').text(date);
$('.time').text(time);



//WEATHER START


$.simpleWeather({
    location: '99205',
    woeid: '',
    unit: 'f',

    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html = html + '<p>' + weather.currently + '<p>'
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });//End Simple Weather





});
