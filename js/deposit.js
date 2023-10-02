
document.getElementById('btn-deposit').addEventListener('click', function () {
  /*
  1. get the element by id
  2. get the value inside the element
  3. convert the string value to a number
  */
  
  const inputDeposit = getInputValueById('deposit-field');
  const currentDeposit = getCurrentValueById('current-deposit');
  const totalDeposit =  currentDeposit + inputDeposit;
  setTotalAmountById('current-deposit', totalDeposit);

  const currentBalance = getCurrentValueById("current-balance");
  const totalBalance = currentBalance + inputDeposit;
  setTotalAmountById("current-balance", totalBalance);


})