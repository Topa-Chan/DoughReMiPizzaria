var fieldList = ["Crust", "Size", "Cheese", "Sauce", "Toppings", "Total"];
var btnList = ["Modify", "Add To Order"];

function createTemplate(fieldItem) {
  var templateContainer = document.createElement("div");
  templateContainer.setAttribute("id", `${fieldItem}Area`);
  templateContainer.setAttribute("class", "flex-row box-area");

  var fieldName = document.createElement("div");
  fieldName.setAttribute("class", "inner-box");
  fieldName.textContent = fieldItem;

  var fieldInfo = document.createElement("div");
  fieldInfo.setAttribute("id", fieldItem);
  fieldInfo.setAttribute("class", "inner-box");

  if (fieldItem == "Toppings") {
    fieldInfo.classList.add("list");
  }
  if (fieldItem == "Total") {
    templateContainer.classList.add("more-space");
  }

  templateContainer.appendChild(fieldName);
  templateContainer.appendChild(fieldInfo);

  return templateContainer;
}

function createButtons(btnItem) {
  var button = document.createElement("div");
  button.setAttribute("class", "bottom-btn");
  var aTag = document.createElement("a");
  aTag.setAttribute("class", "btn");
  aTag.textContent = btnItem;
  
  if (btnItem == "Modify") {
    button.classList.add("right-mar");
    aTag.setAttribute("href", "customize.html");
  }
  else if (btnItem == "Add To Order") {
    aTag.setAttribute("href", "thanks.html");
  }

  button.appendChild(aTag);

  return button;

}
{/* <div id="btnArea" class="flex-row box-area more-space">
      <div class="bottom-btn right-mar"><a href="customize.html" class="btn">Modify</a></div>
      <div class="bottom-btn"><a href="thanks.html" class="btn">Add To Order</a></div>
    </div>  */}

function CreateTotalPage(fields_array, btn_array) {
  var container = document.createElement("div");
  container.setAttribute("class", "flex-row container");
  var canvas = document.createElement("canvas");
  canvas.setAttribute("id", "pizza");
  var area = document.createElement("div");
  area.setAttribute("id", "ingredientsArea");
  area.setAttribute("class", "flex-col");
  var btnContainer = document.createElement("div");
  btnContainer.setAttribute("id", "btnArea");
  btnContainer.setAttribute("class", "flex-row box-area more-space");

  for (var item in fields_array) {
    area.appendChild(createTemplate(fields_array[item]));
  }
  for (var item in btn_array) {
    btnContainer.appendChild(createButtons(btn_array[item]));
  }
  area.appendChild(btnContainer);
  container.appendChild(canvas);
  container.appendChild(area);
  document.getElementById('main-body').appendChild(container);
}

CreateTotalPage(fieldList, btnList);