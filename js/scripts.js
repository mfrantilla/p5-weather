// Docs at http://simpleweatherjs.com

$(document).ready(function() {


  $.simpleWeather({
    location: '99205',
    woeid: '',
    unit: 'f',

    success: function(weather) {
      html = '<p>'+weather.temp+'&deg;'+weather.units.temp+'</p>';
  
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
});
