var place = ["SYD", "SF", "ATX", "LA","NYC" ];

$(document).ready(function() {
  // fix improperly styled form select box (center on page make it look better)
  $('form').attr('style','text-align:center;');
  //non iteration:
  // $('#city-type').append('<option value="' + place[0] + '">' + place[0] + '</option>');
  // $('#city-type').append('<option value="' + place[1] + '">' + place[1] + '</option>');
  // $('#city-type').append('<option value="' + place[2] + '">' + place[2] + '</option>');
  // $('#city-type').append('<option value="' + place[3] + '">' + place[3] + '</option>');
  // $('#city-type').append('<option value="' + place[4] + '">' + place[4] + '</option>');
//iteration
  var i = 0;
  for(i; i < place.length; ++i) {
    $('#city-type').append('<option value="' + place[i] + '">' + place[i] + '</option>');
  }
  $('#city-type').change(function(){
    var location = $('#city-type').val();
    if(location == 'NYC') {
      $('body').attr('class','nyc');
    }
    else if (location == 'SF') {
      $('body').attr('class','sf');
    }
    else if (location == 'LA') {
      $('body').attr('class','la');
    }
    else if (location == 'ATX') {
      $('body').attr('class','austin');
    }
    else if (location == 'SYD') {
      $('body').attr('class','sydney');
    }
  });
});
