document.getElementById("btn-withdraw").addEventListener("click", function () {
  /*
  1. get the element by id
  2. get the value inside the element
  3. convert the string value to a number
  */

  const inputWithdraw = getInputValueById("withdraw-field");
  const currentWithdraw = getCurrentValueById("current-withdraw");
  const totalWithdraw = currentWithdraw + inputWithdraw;
  setTotalAmountById("current-withdraw", totalWithdraw);

  const currentBalance = getCurrentValueById("current-balance");
  const totalBalance = currentBalance - inputWithdraw;
  setTotalAmountById("current-balance", totalBalance);
});
