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

    $('.img-modal').click(function(event){  
      $(event.currentTarget).hide();
    });
  });
});

$('img').click(function(event){
  var imgSource = event.target.getAttribute('src');
  $('.img-modal img').attr('src', imgSource);
  $('.img-modal').show();
});
