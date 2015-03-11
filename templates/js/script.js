$(document).keydown(function(event) {

  // LEFT
  if (event.which == 37) {
    Europa.activeArticle.trigger('previousSlide');
    event.preventDefault();
  }
  // DOWN
  else if (event.which == 40){
    Europa.goToNextArticle();
    event.preventDefault();
  }
  // UP
  else if (event.which == 38){
    Europa.goToPreviousArticle();
    event.preventDefault();
  }
  // RIGHT
  else if (event.which == 39){
    Europa.activeArticle.trigger('nextSlide');
    event.preventDefault();
  }

  // i
  else if (event.which == 73){
    Europa.activeArticle.toggleClass('description-active');
  }
  // ESC
  else if (event.which == 27){
    Europa.activeArticle.removeClass('description-active');
  }

});

$(function() {

$('.showcase')
  .find('article')
  .each(function(){
    new Waypoint({
      element: $(this)[0],
      handler: function(d) {
        Europa.updateURL(this.element.id);
      }
    });
  })
  .find('.description')
    .css('margin-bottom', function(){
      return - $(this).height()/2;
    })
    .append('<a role="button" class="close-btn">✕</a>')
      .find('.close-btn')
      .click(function() {
        $(this).parents('article').toggleClass('description-active');
      })
      .end()
    .end()
  // DESCRIPTION TOGGLE
  .find('.read-more')
    .click(function(e){
      $(this)
        .parents('article')
          .toggleClass('description-active');
      e.preventDefault();
    });

// Europa.init();

});

