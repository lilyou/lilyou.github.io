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

// Enlarge image click on index page and album page
// Click to album page when click on country name
// Change country name when scroll on index page 

// (if  i have time) offset image when scrolling on index page