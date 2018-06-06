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
  //temp(eventJson);
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

function createAddToOrderButton(isCustom, pizzaType) {
  var href;
  if (isCustom) {
    href = 'customize.html';
  } else {
    href = 'confirmation.html';
  }

  var buttonDiv = document.createElement("div");
  buttonDiv.setAttribute("class", "bottom-btn");
  var aTag = document.createElement("a");
  aTag.setAttribute("class", "btn");
  aTag.text = 'Add To Order';
  aTag.addEventListener('click', function(){
    sessionStorage.setItem('pizza-name', `${pizzaType}`);
    document.location.href = href;
  });

  buttonDiv.appendChild(aTag);
  //var button = `<div class="${divClass}"><a href="#" onClick="addToOrderClick(${href}, ${pizzaName})" class="${aClass}">${msg}</a></div>`;

  return buttonDiv;
}

function createPizzaSpecial(imgSource, pizzaName, pizzaId, description, isCustom, pizzaType) {

  var divContainer = document.createElement("div");
  divContainer.setAttribute("class", "flex-row");

  var img = document.createElement("img");
  img.setAttribute("class", "pizzaPic");
  img.setAttribute("src", imgSource);

  var divInfo = document.createElement("div");
  divInfo.setAttribute("class", "flex-col");

  var divName = document.createElement("div");
  divName.setAttribute("id", pizzaId);
  divName.setAttribute("class", "pizzaName");
  divName.textContent = pizzaName;

  var divDesc = document.createElement("div");
  divDesc.setAttribute("class", "pizzaDesc");  
  divDesc.textContent = description;

  var orderButton = createAddToOrderButton(isCustom, pizzaType);
  
  divInfo.appendChild(divName);
  divInfo.appendChild(divDesc);
  divInfo.appendChild(orderButton);

  divContainer.appendChild(img);
  divContainer.appendChild(divInfo);


  //var layout = `<div class="flex-row"><img class="pizzaPic" src="${imgSource}"><div class='flex-col'><div id="${pizzaId}" class="pizzaName">${pizzaName}</div><div class="pizzaDesc">${description}</div>${orderButton}</div></div>`;
  
  return divContainer;
}

function createHomePage(eventJson) {
  var isCustom;
  var pizzaName;
  for (var index in eventJson.pizza) {
    if (eventJson.pizza[index].Id == "custom") {
      isCustom = true;
      pizzaName = eventJson.pizza[index].Name;
    } else {
      isCustom = false;
      pizzaName = `${eventJson.pizza[index].Name} Pizza`;
    }
    document.getElementById('main-body').appendChild(createPizzaSpecial(eventJson.pizza[index].ImageSource, pizzaName, eventJson.pizza[index].Id, eventJson.pizza[index].Description, isCustom, eventJson.pizza[index].Name));
  }
}

loadData();
