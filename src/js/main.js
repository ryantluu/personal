document.getElementById("hamburger-menu").onclick = function() {toggleMenu()};
document.getElementById("project-list").onclick = function() {hideMenu()};
document.getElementById("footer").onclick = function() {hideMenu()};


function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("active");
};

function hideMenu() {
  document.getElementById("sidebar").classList.remove("active");
};
