var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

$(document).ready(function() {

  // can also use forEach here
  for(var i = 0; i < cities.length; i++) {
    // many ways of creating the option element in jQuery - this is just one possible way

    // for each element in the cities array (i.e. "NYC", "SF", etc.)
    // create option element where value/text are equal to the city

    // append option element to select element with id 'city-type'
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');

    // alternate syntax is below
    // $('#city-type').append($("<option>", {value: cities[i], text: cities[i]}));
  }

  // can also use forEach loop
  // cities.forEach(function(city){ append option element function goes here, with city as value/text})

  $('#city-type').change(function(){

    // no need to use toLowerCase()/trim() here - we know what our possible values are ahead of time
    var city = $('#city-type').val();
    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }
    else if (city == 'LA') {
      $('body').attr('class','la');
    }
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }
  });
});
