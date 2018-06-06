var btnList = ["Modify", "Add To Order"];

function createButtons(button) {

  var btnRow = document.createElement("div");
  btnRow.setAttribute("class", "flex-row");
  var btn = document.createElement("div");
  var aTag = document.createElement("a");
  aTag.setAttribute("class", "btn btn-theme-1");
  aTag.textContent = button;

  if (button == "Modify") {
    btn.setAttribute("class", "bottom-btn");
    aTag.setAttribute("href", "customize.html");
  }
  else if (button == "Add To Order") {
    btn.setAttribute("class", "top-btn");
    aTag.setAttribute("href", "total.html");
  }
  btn.appendChild(aTag);
  btnRow.appendChild(btn);

  return btnRow;
}

function CreateConfirmPage(btn_array) {
  var divContainer = document.createElement("div");
  divContainer.setAttribute("class", "flex-row container");

  var canvas = document.createElement("canvas");
  canvas.setAttribute("id", "pizza");
  //canvas.setAttribute("class", "");

  var btnArea = document.createElement("div");
  btnArea.setAttribute("id", "btn-area");
  btnArea.setAttribute("class", "flex-col");

  for (var index in btn_array) {
    var temp_btn = createButtons(btn_array[index]);
    btnArea.appendChild(temp_btn);
  }

  divContainer.appendChild(canvas);
  divContainer.appendChild(btnArea);

  console.log("I work");
  document.getElementById('main-body').appendChild(divContainer);
}

CreateConfirmPage(btnList);