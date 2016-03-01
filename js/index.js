// Note: Plugin has been updated. Use version 3.1
// https://cdnjs.cloudflare.com/ajax/libs/jquery.simpleWeather/3.1.0/jquery.simpleWeather.min.js
// Refer: http://simpleweatherjs.com
// var newCity = '98059'
// var newCity = prompt();



if ('geolocation' in navigator) {
  $('.geolocation').show(); 
} else {
  $('.geolocation').hide();
}


// On Click, Get Geolocation, Call Weather Function
$('button').click( function() {
  
     
    //load weather using your lat/lng coordinates
    navigator.geolocation.getCurrentPosition(function(position) {
        getWeather(position.coords.latitude+','+position.coords.longitude); 
    });
   
});

$(document).ready(function() {
  getWeather('Seattle',''); //@params location, woeid
});

// Wrap Plugin, in Function to be Called
// Otherwise, runs when page loads


var getWeather = function(location) {
  
  $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.temp').text(weather.temp);
      $('.text').text(weather.text);
      $('.state').text(weather.region);
      $('.title').text(weather.title);
      $('.high').text(weather.high);
      $('.low').text(weather.low);
      $('img').attr('src',weather.image)
      console.log(weather);
    
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });
  
};

// call glowing
  $(document).ready(function() {
  $('.parent').addGlow({
    radius: 20,
    textColor: 'black',
    haloColor: 'black',
    duration: 200
  });
});

 $(document).ready(function() {
  $('.average').addGlow({
    radius: 20,
    textColor: 'black',
    haloColor: 'black',
    duration: 200
  });
});



$(document).ready(function() {
  $('.texty').addGlow({
    radius: 70,
    textColor: 'black',
    haloColor: 'black',
    duration: 200
  });
});

$(document).ready(function() {
  $('.child').addGlow({
    radius: 70,
    textColor: 'white',
    haloColor: 'white',
    duration: 200
  });
});