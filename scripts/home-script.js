var request = new XMLHttpRequest();
var pagesList = ['Dough Re Mi Pizzeria', 'Pizza Specials'];


function loadData() {
  request.open('GET', 'scripts/pizzaSpecials.json');
  request.onload = loadComplete;
  request.send();
}

function loadComplete(evt) {
  var eventJson = JSON.parse(request.responseText);
  createHomePage(eventJson);
}

function createNavBar(navItemsList) {
  //document.getElementById('main-body').innerHTML += '<div class="nav"><a href="index.html" class="nav-brand">Dough Re Mi Pizzeria</a><a href="index.html" class="active-nav nav-item">Pizza Specials</a><a href="index.html" class="nav-item">Pizza Specials</a><a href="index.html" class="nav-item">Pizza Specials</a><a href="index.html" class="nav-item">Pizza Specials</a></div>'
  var path = window.location.pathname;
  var pathArray = path.split('/');
  var page = pathArray[pathArray.length - 1];
  if (page == "index.html") {
    //console.log("True");

  }

}

function createAddToOrderButton(isCustom) {
  var divClass = 'bottom-btn';
  var aClass = 'btn';
  var msg = 'Add To Order';
  var href;
  if (isCustom) {
    href = 'customize.html';
  } else {
    href = 'confirmation.html';
  }

  var button = `<div class="${divClass}"><a href="${href}" class="${aClass}>${msg}</a></div>`;

  return button;
}

function createPizzaSpecial(imgSource, pizzaName, pizzaId, description, isCustom) {
  var orderButton = createAddToOrderButton(isCustom);

  var layout = `<div class="flex-row"><img class="pizzaPic" src="${imgSource}"><div class='flex-col'><div id="${pizzaId}" class="pizzaName">${pizzaName}</div><div class="pizzaDesc">${description}</div>${orderButton}</div></div>`;
  
  return layout;
}

function createHomePage(eventJson) {
  var isCustom;
  for (var index in eventJson.pizza) {
    if (eventJson.pizza[index].Id == "custom") {
      isCustom = true;
    } else {
      isCustom = false;
    }
    document.getElementById('main-body').innerHTML += createPizzaSpecial(eventJson.pizza[index].ImgSource, eventJson.pizza[index].Name, eventJson.pizza[index].Id, eventJson.pizza[index].Description, isCustom);
  }
}

loadData();
