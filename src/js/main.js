//Hamburger Menu
document.getElementById("hamburger-menu").onclick = function() {toggleMenu()};
document.getElementById("project-list").onclick = function() {hideMenu()};
document.getElementById("footer").onclick = function() {hideMenu()};

function toggleMenu() {
  document.getElementById("navbar").classList.toggle("active");
};

function hideMenu() {
  document.getElementById("navbar").classList.remove("active");
};


$(document).ready(function(){

  $('.down-arrow').on('click', function(event){
      event.preventDefault();

      var vumble = $('#vumble');

      $('html, body').animate({
          scrollTop: vumble.offset().top
      }, 700);
  });

});
