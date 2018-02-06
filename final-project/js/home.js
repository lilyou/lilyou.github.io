// Code use in index only
var countryAlbum = {
  france: '/final-project', // No france album right now
  australia: '/final-project/australia-album.html',
  italy: '/final-project/italy-album.html'
}


$('.waypoint').waypoint(function(event, direction) {
  var country = event.target.getAttribute('data-' + direction);
  var url = countryAlbum[country];

  $('.country a').html(country);
  $('.country a').attr('href', url);

}, { offset: '50%' });
