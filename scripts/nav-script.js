var pagesList = ['Dough Re Mi Pizzeria', 'Pizza Specials'];
var linkNames = [];

function createNavBar(navItemsList, linkNameList) {
  //'<div class="nav"><a href="index.html" class="nav-brand">Dough Re Mi Pizzeria</a><a href="index.html" class="active-nav nav-item">Pizza Specials</a><a href="index.html" class="nav-item">Pizza Specials</a><a href="index.html" class="nav-item">Pizza Specials</a><a href="index.html" class="nav-item">Pizza Specials</a></div>'
  var navContainer = document.createElement("div");
  navContainer.setAttribute("class", "nav");

  var brandLink = document.createElement("a");
  brandLink.setAttribute("href", "index.html");
  brandLink.setAttribute("class", "nav-brand");
  brandLink.textContent = "Dough Re Mi Pizzeria";

  var homeLink = document.createElement("a");
  homeLink.setAttribute("href", "index.html");
  homeLink.setAttribute("class", "nav-item");
  homeLink.textContent = "PizzaSpecials";
  
  var path = window.location.pathname;
  var pathArray = path.split('/');
  var page = pathArray[pathArray.length - 1];
  if (page == "index.html") {
    if (!homeLink.classList.contains("active-nav")) {
      homeLink.classList.add("active-nav");
    }
  }
  else {
    if (homeLink.classList.contains("active-nav")) {
      homeLink.classList.remove("active-nav");
    }
  }

  navContainer.appendChild(brandLink);
  navContainer.appendChild(homeLink);
  document.getElementById('main-body').appendChild(navContainer);

}

createNavBar(pagesList);