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



if(hour > 16 || hour < 6)
{

    $('body').removeClass('day').addClass('night');
    $('article').removeClass('articleDay').addClass('articleNight');
}
else
{
  $('body').removeClass('night').addClass('day');
    $('article').removeClass('articleNight').addClass('articleDay');

}
//Fixing Minutes and Hour Formatting
var hour = hour%12;
if(hour%12 == 0)
  var hour = 12;
if(minutes < 10)
    var minutes = "0" + minutes;

var date = month + "/" + day + "/" + year;
var time = hour + ":" + minutes + " " + apm;



$('.date').text(date + " | ");
$('.time').text(time);


//INPUT BOX

var zipCode = '99004';





$('.ui.button').on('click', function(){

    var zipCode = $('input').val();
    console.log(zipCode);


          $.simpleWeather({
          location: zipCode,
          woeid: '',
          unit: 'f',

          success: function(weather) {
            icon = '<h2><i class="icon-'+weather.code+'"></i>';
            html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
            html = html + '<p>' + weather.currently + '<p>';
            highlow = '<br/>' + 'high: ' +weather.forecast[0].high + ' low: ' +weather.forecast[0].low;

            title = '<p>' + weather.city + ", " + weather.region + '<p>';
           
            //console.log(weather.forecast[1].text);
            
            tomorrowIcon = '<i class="icon-'+weather.forecast[1].code+'"></i>';
            tomorrow = "Tomorrow's Weather: "+ weather.forecast[1].text + " " +tomorrowIcon;



            $("#weather").html(html);
            $('i').html(icon);
            $('.highlow').html(highlow);
            $('h1').html(title);
            $('.tomorrow').html(tomorrow);
           // $('.tomorrow').html(tomorrowIcon);
          },
          error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
          }

        });//End Simple Weather


 });





//WEATHER START


$.simpleWeather({
    location: zipCode,
    woeid: '',
    unit: 'f',

    success: function(weather) {
      icon = '<h2><i class="icon-'+weather.code+'"></i>';
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
      html = html + '<p>' + weather.currently + '<p>';

      title = '<p>' + weather.city + ", " + weather.region + '<p>';
      highlow = '<br/>' + 'high: ' +weather.forecast[0].high + ' low: ' +weather.forecast[0].low;
      //console.log(weather.forecast[1].text);
      
      tomorrowIcon = '<i class="icon-'+weather.forecast[1].code+'"></i>';
      tomorrow = "Tomorrow's Weather: "+ weather.forecast[1].text + " " +tomorrowIcon;



      $("#weather").html(html);
      $('i').html(icon);
      $('.highlow').html(highlow);
      $('h1').html(title);
      $('.tomorrow').html(tomorrow);
     // $('.tomorrow').html(tomorrowIcon);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }

  });//End Simple Weather

  
  

$('h1').text($.simpleWeather.location + "'s Weather")


});
