$(document).ready(function() {
   
/****** Fancybox ******/

  $(".fancybox").fancybox({
    helpers : {
      title : {
        type: 'outside'
      },
    }
  });

  $(".fancybox-thumb").fancybox({
    prevEffect  : 'none',
    nextEffect  : 'none',
    helpers : {
      title : {
        type: 'outside'
      },
      thumbs  : {
        width : 50,
        height  : 50
      }
    }
  });


  $(".menu").click(function(){

    if($(".menu").hasClass('menu-open')){
      $(".menu").removeClass('menu-open');
    } else{
      $(".menu").addClass('menu-open');
    }

  });


    var touch = window.ontouchstart
              || (navigator.MaxTouchPoints > 0)
              || (navigator.msMaxTouchPoints > 0);

  if (touch) { // remove all :hover stylesheets
      try { // prevent exception on browsers not supporting DOM styleSheets properly
          for (var si in document.styleSheets) {
              var styleSheet = document.styleSheets[si];
              if (!styleSheet.rules) continue;

              for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                  if (!styleSheet.rules[ri].selectorText) continue;

                  if (styleSheet.rules[ri].selectorText.match(':hover')) {
                      styleSheet.deleteRule(ri);
                  }
              }
          }
      } catch (ex) {}
  }



});
