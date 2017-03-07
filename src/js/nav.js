//Hamburger Menu
document.getElementById("hamburger-menu").onclick = function() {toggleMenu()};
document.getElementById("work-list").onclick = function() {hideMenu()};
document.getElementById("nav-close").onclick = function() {hideMenu()};

function toggleMenu() {
  document.getElementById("navigation").classList.toggle("active");
};

function hideMenu() {
  document.getElementById("navigation").classList.remove("active");
};
