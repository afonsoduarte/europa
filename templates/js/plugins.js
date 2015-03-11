Europa = {

  activeArticle: '',
  init: function() {
    var slug;
    if(!window.location.hash) {
      Europa.activeArticle = $('article:first-child');
    }else{
      slug = window.location.hash.replace('#', '');
      Europa.goToArticle(slug);
    }
  },
  goToNextArticle: function() {
    var next = Europa.activeArticle.next();
    if(next.length === 0) return false;
    $('html, body').scrollTop( next.offset().top +1 );
  },
  goToPreviousArticle: function() {
    var prev = Europa.activeArticle.prev();
    if( prev.length === 0 ) return false;
    $('html, body').scrollTop( prev.offset().top -1 );
  },
  goToArticle: function(slug) {
    $('html, body').scrollTop( $('#id-'+slug).offset().top + 1 );
  },
  updateURL: function(slug) {
    slug = slug.replace('id-', '');
    location.hash = '#'+slug;
    Europa.activeArticle = $('#id-'+slug);
  }
};

// var myParam = getQueryString()["myParam"];
function getQueryString() {
  var result = {},
      queryString = location.search.substring(1),
      re = /([^&=]+)=([^&]*)/g,
      m;
  while(m = re.exec(queryString)){
    result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }
  return result;
}