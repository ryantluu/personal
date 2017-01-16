$( document ).ready(function() {

    var menu = $('#hamburger-menu'),
      p_list = $('#project-list'),
      footer = $('#footer'),
     sidebar = menu.parent();

    menu.click(function(){
      if(sidebar.hasClass('active')){
        sidebar.removeClass('active');
      } else{
        sidebar.addClass('active');
      }
    });

    p_list.click(function(){
      if(sidebar.hasClass('active')){
        sidebar.removeClass('active');
      }
    });
    footer.click(function(){
      if(sidebar.hasClass('active')){
        sidebar.removeClass('active');
      }
    });


});
