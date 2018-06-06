var request = new XMLHttpRequest();


function loadData() {
  request.open('GET', 'scripts/pizzaSpecials.json');
  request.onload = loadComplete;
  request.send();
}

function loadComplete(evt) {
  var eventJson = JSON.parse(request.responseText);
  createHomePage(eventJson);
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
  aTag.textContent = 'Add To Order';
  aTag.addEventListener('click', function(){
    sessionStorage.setItem('pizza-name', `${pizzaType}`);
    document.location.href = href;
  });

  buttonDiv.appendChild(aTag);

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
