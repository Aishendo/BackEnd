
var numberOf = document.querySelectorAll('.popup-link').length;
    for(var i = 0; i < numberOf; i++){
        document.querySelectorAll('.popup-link')[i].addEventListener("click", function() {
            var audio = new Audio('sounds2/oar.mp3');
            
    $('audio').attr('src', 'sounds2/oar.mp3');

audio.play();
});
  };