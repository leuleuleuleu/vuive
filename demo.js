
$(document).ready(function () {
  console.clear();
  $('.image-popup img').attr("src","image.png");
  var sounds = {
    'error': new Audio('song.mp3'),
    'success': new Audio('song.mp3'),
    'alert': new Audio('song.mp3')
  }
  setTimeout(function () {
    sounds[$('.play').data('sound')].play();
    $('.box-img').removeClass('hide')
  }, 5000);
});
