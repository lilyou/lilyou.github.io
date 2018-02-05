// Code use in index only
var countryAlbum = {
  france: '/france-album',
  australia: '/australia-album.html'
}


$('.waypoint').waypoint(function(event, direction) {
  var country = event.target.getAttribute('data-' + direction);
  var url = countryAlbum[country];

  $('.country a').html(country);
  $('.country a').attr('href', url);

}, { offset: '50%' });
