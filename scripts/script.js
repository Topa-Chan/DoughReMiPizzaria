//Pizza Canvas
var pizza = document.getElementById('pizza');
var i = 0;

var crustArea = document.getElementById('crust-area');
var cheeseArea = document.getElementById('cheese-area');
var sauceArea = document.getElementById('sauce-area');
var meatArea = document.getElementById('meat-area');
var veggieArea = document.getElementById('veggie-area');
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

function buildButton(item, index, arr){
  console.log("Array Name: " + arr.name);
  console.log("button " + item + " at index " + index + ' created.');
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

function btnClicked(evt) {
  console.log(evt.target.innerText + " clicked");
  evt.target.style.backgroundColor = "#fff";
  console.log("Parent Class: " + evt.parentNode);
}