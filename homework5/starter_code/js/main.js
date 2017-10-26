//titty city java test
$(document).ready(function() {
  $('#submit-btn').click(function(){
    event.preventDefault();
    var location = $('#city-type').val();
    $('#city-type').val('');
    location = location.toLowerCase().trim();
    if(location == 'new york location' || location == 'nyc' || location == 'new york') {
      $('body').prop('class','nyc');
    }
    else if (location == 'sf' || location == 'san francisco' || location == 'bay area') {
      $('body').prop('class','sf');
    }
    else if (location == 'austin' || location == 'atx') {
      $('body').prop('class','austin');
    }
    else if (location == 'los angeles' || location == 'la' || location == 'lax') {
      $('body').prop('class','la');
    }
    else if (location == 'sydney' || location == 'syd') {
      $('body').prop('class','sydney');
    }
  });
});
