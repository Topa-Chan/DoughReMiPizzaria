//Pizza Canvas
var pizza = document.getElementById('pizza');
var i = 0;

var container = document.getElementById('container');
var crustBtnNames = [
                      'Original', 'Hand-Tossed', 'Thin Crust'
];
var sauceBtnNames = [
                      'Marinara', 'Buffalo', 'Creamy Garlic'
];
var cheeseBtnNames = [
                      'Extra', 'Normal', 'None'
];
var meatBtnNames = [
  'Pepperoni', 'Sausage', 'Beef', 'Ham', 'Chicken'
];
var veggieBtnNames = [
  'Mushrooms', 'Pineapple', 'Onions', 'Olives', 'Peppers'
];
var buttons = [];

crustBtnNames.forEach(buildButton);
sauceBtnNames.forEach(buildButton);
cheeseBtnNames.forEach(buildButton);
meatBtnNames.forEach(buildButton);
veggieBtnNames.forEach(buildButton);

function buildButton(item, index, arr){
  console.log(arr.toString());
  console.log();
  console.log("button " + item + " at index " + index + ' created.');
  buttons[index] = document.createElement('div');
  buttons[index].textContent = item;
  console.log("I: " + i);
  // buttons[index].setAttribute('class', 'btn');
  if (arr[0] === 'Original') {
    buttons[index].setAttribute('class', 'btn crust');
  }
  if (i === 1) {
    buttons[index].setAttribute('class', 'btn sauce');
  }
  if (i === 2) {
    buttons[index].setAttribute('class', 'btn cheese');
  } 
  if (i === 3) {
    buttons[index].setAttribute('class', 'btn meat');
  }
  if (i === 4) {
    buttons[index].setAttribute('class', 'btn veggie');
  }
  container.appendChild(buttons[index]);
  buttons[index].addEventListener('click', btnClicked);
}

function createButton(array, item) {
  var html;
  for (var index in array) {
    var btnDiv = document.createElement('div');
    btnDiv.textContent = item;
    btnDiv.setAttribute('class', 'btn crust');
    html += btnDiv;
  }
}

function btnClicked(evt) {
  console.log(evt.target.innerText + " clicked");
  console.log(evt.srcElement.className);
}