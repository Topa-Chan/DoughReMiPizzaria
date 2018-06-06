//Pizza Canvas
var pizza = document.getElementById('pizza');
// var container = document.getElementById('container');
var toppings = [];
var pizzaComponents = [];

var crustArea = document.getElementById('crust-area');
var cheeseArea = document.getElementById('cheese-area');
var sauceArea = document.getElementById('sauce-area');
var meatArea = document.getElementById('meat-area');
var veggieArea = document.getElementById('veggie-area');
// var tabsArr = [ ];
// var tabs = document.getElementsByClassName('tabs');
// tabsArr.push(tabs);

var crustBtnNames = [
                      'Original', 'Hand-Tossed', 'Thin Crust'
];
crustBtnNames.name = "Crusts";
var sauceBtnNames = [
                      'Marinara', 'Buffalo', 'Creamy Garlic'
];
sauceBtnNames.name = "Sauces";
var cheeseBtnNames = [
                      'Extra', 'Normal', 'None'
];
cheeseBtnNames.name = "Cheeses";
var meatBtnNames = [
  'Pepperoni', 'Sausage', 'Beef', 'Ham', 'Chicken'
];
meatBtnNames.name = "Meats";
var veggieBtnNames = [
  'Mushrooms', 'Pineapple', 'Onions', 'Olives', 'Peppers'
];
veggieBtnNames.name = "Veggies";
var buttons = [];

crustBtnNames.forEach(buildButton);
cheeseBtnNames.forEach(buildButton);
sauceBtnNames.forEach(buildButton);
meatBtnNames.forEach(buildButton);
veggieBtnNames.forEach(buildButton);
// tabsArr.forEach(tabClick);

function buildButton(item, index, arr){
  // console.log("Array Name: " + arr.name);
  // console.log("button " + item + " at index " + index + ' created.');
  buttons[index] = document.createElement('div');
  buttons[index].textContent = item;
  // buttons[index].setAttribute('class', 'btn');
  if (arr.name === "Crusts") {
    buttons[index].setAttribute('class', 'btn crust');
    crustArea.appendChild(buttons[index]);
  }
  if (arr.name === "Cheeses") {
    buttons[index].setAttribute('class', 'btn cheese');
    cheeseArea.appendChild(buttons[index]);
  }
  if (arr.name === "Sauces") {
    buttons[index].setAttribute('class', 'btn sauce');
    sauceArea.appendChild(buttons[index]);
  } 
  if (arr.name === "Meats") {
    buttons[index].setAttribute('class', 'btn meat');
    meatArea.appendChild(buttons[index]);
  }
  if (arr.name === "Veggies") {
    buttons[index].setAttribute('class', 'btn veggie');
    veggieArea.appendChild(buttons[index]);
  }
  // container.appendChild(buttons[index]);
  buttons[index].addEventListener('click', btnClicked);
}

// function tabClick(item, index, arr) {
//   console.log("In tab click");
//   // console.log(tabsArr[0][index].innerText);
//   // tabs[0].addEventListener('click', tabClicked);
//   // tabsArr[0][1].addEventListener('click', tabClicked);
//   for (var i = 0; i < tabsArr[0].length; i++) {
//     tabsArr[0][i].addEventListener('click', tabClicked);
//   }
//   // tabsArr[0][0].addEventListener('click', tabClicked);
// }

// function tabClicked(evt) {
//   console.log("I've been clicked");
//   if (evt.target.innerText === "Crusts and Sizes") {
//     console.log(evt.target.innerText);
//     console.log(evt.target.nextElementSibling);
//     // console.log(evt.target.parentNode);
//   }
//   if (evt.target.innerText === "Cheese and Sauce") {
//     console.log(evt.target.innerText);
//   }
//   if (evt.target.innerText === "Meats") {

//   } 
//   if (evt.target.innerText === "Veggies") {

//   }
// }

function btnClicked(evt) {
  console.log(evt.target.innerText + " clicked");
  // evt.target.style.backgroundColor = "#21f";
  var preSplitName = evt.target.attributes[0].value;
  var splitName = preSplitName.split(" ");
  var name = splitName[1];
  if (name === "crust") {
    crustBtnNames.forEach(checkActive, evt);
    evt.target.classList.add("active");
    console.log('Selection Made');
    console.log(evt.target.attributes[0].value);
    pizzaComponents.unshift("images/previews/SVG/Crust.svg");
    buildPizza();
  } 
  if (name === "cheese") {
    cheeseBtnNames.forEach(checkActive, evt);
    evt.target.classList.add("active");
    if (evt.target.innerText === "Extra") {
      pizzaComponents.unshift("images/previews/SVG/ExtraCheese.svg");
    } else if (evt.target.innerText === "Normal") {
      pizzaComponents.unshift("images/previews/SVG/Cheese.svg");
    }
    buildPizza();
  }
  if (name === "sauce") {
    sauceBtnNames.forEach(checkActive, evt);
    evt.target.classList.add("active");
    pizzaComponents.unshift("images/previews/SVG/" + evt.target.innerText + ".svg");
    buildPizza();
  }
  if (name === "meat") {
    toppingsActive(evt);
    buildPizza();
  }
  if (name === "veggie") {
    toppingsActive(evt);
    buildPizza();
  }
}

function checkActive(item, index, arr, evt) {
  console.log("Item: " + arr[index]);
  console.log(this.target.attributes[0].value);  
  var preSplitClasses = this.target.attributes[0].value;
  var splitClasses = preSplitClasses.split(' ');
  console.log(splitClasses);
  console.log(splitClasses.includes('active'));
  console.log(this);
  if (splitClasses.includes('active')) {
    this.target.classList.remove('active');
    if (splitClasses.includes('crust')) {
      var index = pizzaComponents.indexOf("images/previews/SVG/Crust.svg");
    } else if(splitClasses.includes('cheese')) {
      if (this.target.innerText === "Extra") {
        var index = pizzaComponents.indexOf("images/previews/SVG/ExtraCheese.svg");
      } else if (this.target.innerText === "Normal") {
        var index = pizzaComponents.indexOf("images/previews/SVG/Cheese.svg");
      }
    } else {
      var index = pizzaComponents.indexOf("images/previews/SVG/" + this.target.innerText + ".svg");
    }
    pizzaComponents.splice(index, 1);
    // console.log(this.target.style[0]);
    // console.log(this.target.)
  }
}

function toppingsActive(evt) {
  // console.log(evt);
  // console.log(this);
  var preSplitClasses = evt.target.attributes[0].value;
  var splitClasses = preSplitClasses.split(' ');
  if (splitClasses.includes('active')) {
    evt.target.classList.remove('active');
    var index = toppings.indexOf("images/previews/SVG/" + event.target.innerText + ".svg");
    console.log(index);
    toppings.splice(index, 1);
  } else {
    evt.target.classList.add('active');
    toppings.unshift("images/previews/SVG/" + event.target.innerText + ".svg");
  }
  console.log("Toppings: " + toppings);

}

function buildPizza() {
  console.log("In Pizza Building");
  console.log(pizzaComponents.length);
  if (toppings.length != 0) {
    var valueArr = toppings.map(function(item){ return item.name });
    var isDuplicate = valueArr.some(function(item, idx){ 
      return valueArr.indexOf(item) != idx 
    });
    console.log("Duplicate: " + isDuplicate);
    if (isDuplicate) {
      valueArr.some(function(item, idx){ 
        return valueArr.indexOf(item) != idx 
      });
    }
    
    for (var i = 0; i < toppings.length; i++) {
      if (isDuplicate) {
        pizzaComponents.unshift(removeDuplicates(toppings)[i]);
      } else {
        pizzaComponents.unshift(toppings[i]);
      }
    }
  }
  var pizzaComponentsStr = "";
  console.log(pizzaComponents);
  for (var i = 0; i < pizzaComponents.length; i++) {
    if (i === (pizzaComponents.length - 1)) {
      pizzaComponentsStr += "url(" + pizzaComponents[i] + ")";
    } else {
      pizzaComponentsStr += "url(" + pizzaComponents[i] + "), ";
    }
  }
  console.log(pizzaComponentsStr);
  pizza.style.background = pizzaComponentsStr;
  pizza.style.backgroundRepeat = "no-repeat";
}

function removeDuplicates(arr){
  var newToppings = []
  for(var i = 0;i < arr.length; i++){
      if(newToppings.indexOf(arr[i]) == -1){
          newToppings.push(arr[i])
      }
  }
  return newToppings;
}