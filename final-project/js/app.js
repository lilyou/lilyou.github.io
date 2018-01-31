// Open and close menu 
$(function() {
  $("#menuImport").load("menu.html", function() {
    $(".menucontainer").hide();
    $("#hideMenu").click(function() {
      if ($(".menucontainer").css("display") === "none") {
        $(".menucontainer").show();
        $("#hideMenu").html("X");
      }
      else {
        $(".menucontainer").hide();
        $("#hideMenu").html("☰");
      }
    });
  });
});

console.log($('#france'));

$('#france').waypoint(function(event, direction){
  console.log(direction, 'france')
  
  $('.country').html('<a href="album1.html">FRANCE</a>');

  if (direction == 'up') {
    console.log('bottom in view france');
    offset: '50%'
  }

})

$('#tajikistan').waypoint(function(event, direction){
  console.log(direction, 'tajik')

  if (direction == 'up') {
    console.log('bottom in view tajik');
    offset: '50%'  
  }
  
  $('.country').html('<a href="album1.html">TAJIKISTAN</a>');
})


// var waypoint = new Waypoint({
//   element: document.getElementById('france'),
//   handler: function(direction) {
//     console.log('Scrolled to waypoint!')
//   }
// })


// Enlarge image click on index page and album page
// Click to album page when click on country name
// Change country name when scroll on index page 

// (if  i have time) offset image when scrolling on index page