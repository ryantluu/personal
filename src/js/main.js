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


//Explore Trigger
document.getElementById("explore-trigger").onclick = function() {addExplore()};
document.getElementById("project-list").onclick = function() {addExplore()};

function addExplore() {
  document.getElementById("home").classList.add("entered");
};
