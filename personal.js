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



});
