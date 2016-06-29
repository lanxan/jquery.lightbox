(function ( $ ) {
  
  $.fn.defaults = {
    html: 'This is lightbox',
    create: create,
    close: close
  };

  $.fn.lightbox = function(options) {
    var opts = $.extend({}, $.fn.defaults, options );
    
    opts.create($(this), opts);
  }
  
  //private function
  
  function create(wrapper, opts) {
    var elem = '<div class="lightbox-background">';
    elem += '<div class="lightbox-content">' + opts.html + '</div>';
    elem += '</div>';
    
    wrapper.css('position', 'relative');
    wrapper.append(elem);

    $('.lightbox-background').click(opts.close);
    $('.lightbox-content').click(function(e){
      e.stopPropagation();
    });
  }

  function close() {
    $('.lightbox-background').remove();
  }
  
}( jQuery ));
