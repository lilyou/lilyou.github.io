$(function() {
    // Hide the menu
    $("#menu").hide();
    // Toggle menu on click hamburger
    $("#openMenu").click(function() {
      $("#menu").toggle();
    });
    // Close menu on click "X"
    $("#closeMenu").click(function() {
      $("#menu").hide();
    });
  });