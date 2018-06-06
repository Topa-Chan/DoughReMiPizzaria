{/* <div class="flex-col thanks">
  <div id="thanks-msg">Thank you for your order!</div>
  <div class="flex-row">
    <div class="right-mar"><a href="index.html" class="btn btn-theme-1">Back to Menu</a></div>
    <div><a href="#" class="btn btn-theme-1">Checkout</a></div>
  </div>
</div> */}

var btnList = ["Back to Menu", "Checkout"];

function createButtons(button) {
  var btn = document.createElement("div");
  btn.setAttribute("class", "right-mar");

  var aTag = document.createElement("a");
  aTag.setAttribute("href", "index.html");
  aTag.setAttribute("class", "btn btn-theme-1");
  aTag.textContent = button;

  btn.appendChild(aTag);

  return btn;
}

function CreateThanksPage(btn_array) {
  var container = document.createElement("div");
  container.setAttribute("class", "flex-col thanks");

  var msg = document.createElement("div");
  msg.setAttribute("id", "thanks-msg");
  msg.textContent = "Thank you for your order!";

  var btnDiv = document.createElement("div");
  btnDiv.setAttribute("class", "flex-row");

  for (var index in btn_array) {
    var tempBtn = createButtons(btn_array[index]);
    btnDiv.appendChild(tempBtn);
  }
  container.appendChild(msg);
  container.appendChild(btnDiv);
  document.getElementById('main-body').appendChild(container);
}

CreateThanksPage(btnList);