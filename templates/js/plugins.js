Controller = {
  goToNextArticle: function() {
    var next = $(window.location.hash).next();
    if(next.length === 0) return false;
    $('html, body').scrollTop( next.offset().top +1 );
  },
  goToPreviousArticle: function() {
    var prev = $(window.location.hash).prev();
    if( prev.length === 0 ) return false;
    $('html, body').scrollTop( prev.offset().top -1 );
  }
};
