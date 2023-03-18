function getInputValuById(inputId) {
  const getInputValueField = document.getElementById(inputId);
  const inputFieldValueString = getInputValueField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  if (isNaN(inputFieldValue) === true || inputFieldValue <= 0) {
    return alert("Please Enter A Valid Number");
  }
  return inputFieldValue;
}
