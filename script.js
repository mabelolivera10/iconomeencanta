$(".love").click(function(){
  $('.heart').toggleClass('love');
  $('.line, .heart').addClass("active").delay(300).queue(function(next){
    $('.line, .heart').removeClass("active");
    next();
  });
});