$(".meme-form").submit(function(event) {
    event.preventDefault();
    //javascript, jQuery

    var userInput = $('.meme-input').val();
    console.log('userInput');
    
    var xhr = $.get(
      "http://api.giphy.com/v1/gifs/search?q=" + userInput + "+shiba+inu&api_key=B7sWndtrTpasT76sJkJuWIbPQJ1J5Eg6"
    );
    xhr.done(function(data) {
      var memes = data.data;
  
      memes.forEach(function(meme){
        var memeUrl= meme.images.looping.mp4;
      
            $('.video-wrapper').append('<video src="' + memeUrl + '" autoplay></video>');
          });
    });
  });