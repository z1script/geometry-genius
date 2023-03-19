// function To get Input Value By Id && Convert The Value String To Number
function getInputValuById(inputId) {
  const getInputValueField = document.getElementById(inputId);
  const inputFieldValueString = getInputValueField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  // error handled by alert()
  if (isNaN(inputFieldValue) === true || inputFieldValue <= 0) {
    return alert("Please Enter A Valid Number");
  }
  return inputFieldValue;
}

// Function toFixed Value 2 Decimal
function toFixed(value) {
  if (Number.isInteger(value) === false) {
    return value.toFixed(2);
  } else {
    return value;
  }
}

// set function setCalculation()
function setCalculation(name, value) {
  const areaField = document.getElementById("area-field");
  if (isNaN(value) === true || value <= 0) {
    return;
  }
  const newLi = document.createElement("li");
  newLi.innerHTML = `
    ${name} <span id="value">${value}cm<sup>2</sup></span> <button class="btn-convert">Convert To m<sup>2</sup></button> <i class="fa-solid btn-cross fa-xmark"></i>
    `;
  // error handled by alert()
  if (areaField.childNodes.length >= 6) {
    return alert(
      "You Can't Calculate More Than 6 Times at Once. Please Delete Some Calculation Before You Try Again"
    );
  }
  areaField.appendChild(newLi);
  // this is for delete the target element
  const deleteButtons = document.getElementsByClassName("btn-cross");
  for (const deleteButton of deleteButtons) {
    deleteButton.addEventListener("click", function (event) {
      event.target.parentElement.remove(this);
    });
  }
}

// function for Change The Background Color randomColor();
function randomColor() {
  let color = [];
  for (let i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 255));
  }
  return "rgb(" + color.join(", ") + ")";
}
