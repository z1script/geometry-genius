function getInputValuById(inputId) {
  const getInputValueField = document.getElementById(inputId);
  const inputFieldValueString = getInputValueField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  return inputFieldValue;
}
