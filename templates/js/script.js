$(document).keydown(function(event) {

  // LEFT
  if (event.which == 37) {
    $(window.location.hash).find(".slick-prev").trigger('click');
    event.preventDefault();
  }
  // DOWN
  else if (event.which == 40){
    Controller.goToNextArticle();
    event.preventDefault();
  }
  // UP
  else if (event.which == 38){
    Controller.goToPreviousArticle();
    event.preventDefault();
  }
  // RIGHT
  else if (event.which == 39){
    $(window.location.hash).find(".slick-next").trigger('click');
    event.preventDefault();
  }

  // i
  else if (event.which == 73){
    $(window.location.hash).toggleClass('description-active');
  }
  // ESC
  else if (event.which == 27){
    $(window.location.hash).removeClass('description-active');
  }

});

$(function() {

  $('.showcase article')
    .each(function(){
      new Waypoint({
        element: $(this)[0],
        handler: function(d) {
          history.pushState(null,null,'#'+this.element.id);
        }
      });
    });

  $('.close-btn,.read-more')
    .click(function(e) {
      $(this).parents('article').toggleClass('description-active');
      e.preventDefault();
    });

  // Close description if image clicked
  $('.images').on('click', function(e, s){
    if($(this).parents('article').hasClass('description-active')) {
      $(this).parents('article').removeClass('description-active');
    }
  });

  $('.images').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        if(slick.slideCount < 2) return;
        if(event.type === "init") {
          $(this)
            .addClass('slick-active')
            .append('<div class="slick-counter"></div>');
        }
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        var text = i + '/' + slick.slideCount;
        $(this).find('.slick-counter').text(text);
      });

  $('.images').slick();

  // Disable gallery arrow buttons for
  // touch screens 
  if ('ontouchstart' in window) {
    $('.slick-arrow').hide();
  }


});

