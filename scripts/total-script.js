{/* <div class="flex-row container">
      <canvas id='pizza' class=""></canvas>
      <div id="ingredientsArea" class="flex-col">
        <div id="crustArea" class="flex-row box-area">
            <div class="inner-box">Crust:</div>
            <div class="inner-box">Placeholder</div>
        </div>  
        <div id="sizeArea" class="flex-row box-area">
            <div class="inner-box">Size:</div>
            <div class="inner-box">Placeholder</div>
        </div>
        <div id="cheeseArea" class="flex-row box-area">
            <div class="inner-box">Cheese:</div>
            <div class="inner-box">Placeholder</div>
        </div>  
        <div id="sauceArea" class="flex-row box-area">
            <div class="inner-box">Sauce:</div>
            <div class="inner-box">Placeholder</div>
        </div> 
        
        
        <div id="toppingsArea" class="flex-row box-area">
            <div class="inner-box">Toppings:</div>
            <div id="toppingsList" class="inner-box list"></div>
        </div> 
        <div id="totalArea" class="flex-row box-area more-space">
            <div class="inner-box">Total:</div>
            <div class="inner-box">Placeholder</div>
        </div>
         
      </div>
    </div> */}

var fieldList = ["Crust", "Size", "Cheese", "Sauce", "Toppings", "Total"];
var btnList = ["Modify", "Add To Order"];

function createTemplate(fieldItem) {
  var templateContainer = document.createElement("div");
  templateContainer.setAttribute("id", `${field-item}Area`);
  templateContainer.setAttribute("class", "flex-row box-area");

  var fieldName = document.createElement("div");
  fieldName.setAttribute("class", "inner-box");
  fieldName.textContent(fieldItem);

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
  button.setAttribute("class", "");
}
{/* <div id="btnArea" class="flex-row box-area more-space">
    <div class="bottom-btn right-mar"><a href="customize.html" class="btn">Modify</a></div>
    <div class="bottom-btn"><a href="thanks.html" class="btn">Add To Order</a></div>
</div>  */}

function CreateTotalPage(fields_array) {
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
}