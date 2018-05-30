//Pizza Canvas
var pizza = document.getElementById('pizza');

//Crusts
var original = document.getElementById('btn-original');
var hand = document.getElementById('btn-handToss');
var thin = document.getElementById('btn-thinCrust');
//Crust Listeners

//Size
var size = document.getElementById('sizeSelector');
//Size Listener

//Cheeses
var extra = document.getElementById('btn-extra');
var normal = document.getElementById('btn-normal');
var none = document.getElementById('btn-none');
//Cheese Listeners

//Sauces
var marinara = document.getElementById('btn-marinara');
var creamy = document.getElementById('btn-creamy');
var buffalo = document.getElementById('btn-buffalo');
//Sauce Listeners

//Toppings
//Meats
var btnpep = document.getElementById('btn-pepperoni');
var btnsaus = document.getElementById('btn-sausage');
var btnbeef = document.getElementById('btn-beef');
var btnham = document.getElementById('btn-ham');
var btnchick = document.getElementById('btn-chicken');
//Meat Listeners
btnpep.addEventListener("click", addPepperoni);

//Veg
var btnmush = document.getElementById('btn-mushrooms');
var btnpine = document.getElementById('btn-pineapple');
var btnogre = document.getElementById('btn-onions');
var btnolive = document.getElementById('btn-olives');
var btnpeprs = document.getElementById('btn-peppers');
//Veg Listeners

var pizzaTops = [];

function addPepperoni(evt) {
  var pepUrl = "url(../images/preview/SVG/Pepperoni.svg)"
  pizzaTops.push(pepUrl);
  var topString = "";
  for (var i = 0; i < pizzaTops.length; i++) {
    topString += pizzaTops[i];
    topString += ", "
  }
  console.log(topString);
  pizza.style.background = topString + "url(../images/preview/SVG/Crust.svg)";
}