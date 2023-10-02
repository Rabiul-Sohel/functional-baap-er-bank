// console.log(myDeposit);
function getInputValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = '';
  return inputFieldValue;
}

function getCurrentValueById(currentFieldId) {
  const currentField = document.getElementById(currentFieldId);
  const currentFieldValueString = currentField.innerText;
  const currentFieldValue = parseFloat(currentFieldValueString);
  return currentFieldValue;
}
function setTotalAmountById(currentFieldId, newValue) {
  const currentField = document.getElementById(currentFieldId);
  currentField.innerText = newValue;
}

