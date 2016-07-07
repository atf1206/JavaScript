function checkCashRegister(price, cash, cid) {

  var amountChange = cash - price;
  var arrayCoins = cid.slice(0,4);
  var arrayDollars = cid.slice(4);
  
  var amountCoins = arrayCoins.map(function(cash) {
    return cash[1];
  }).reduce(function(cash1, cash2) {
    return cash1 + cash2; 
  });
  var amountDollars = arrayDollars.map(function(cash) {
    return cash[1];
  }).reduce(function(cash1, cash2) {
    return cash1 + cash2; 
  });
  
    if (amountChange > (amountCoins + amountDollars)) {
      return 'Insufficient Funds';
  } else if (amountChange === (amountCoins + amountDollars)) {
      return 'Closed';
  } 
  
    if ((amountChange % 1) > amountCoins) {
      return 'Insufficient Funds';
    }
  
  var stdCurr = [0.01, 0.05, 0.10, 0.25, 1, 5, 10, 20, 100];
  var stdCurrAmount;
  var currCurrency;
  var changeArr = [];
  
    for (var i = +cid.length - 1; i >= 0; i--) {
    
      currCurrency = +cid[i][1].toFixed(2);

    
      if (+stdCurr[i].toFixed(2) <= +amountChange.toFixed(2)) {

        stdCurrAmount = Math.floor(currCurrency / stdCurr[i]);

        if ((stdCurr[i] * stdCurrAmount) >= amountChange) {
          stdCurrAmount = Math.floor(amountChange / stdCurr[i]);
        }

        currCurrency = +(stdCurr[i] * stdCurrAmount).toFixed(2);
        amountChange = +(amountChange - currCurrency).toFixed(2);

        cid[i][1] = currCurrency;

        changeArr.push([cid[i][0], currCurrency]);
        }
    }
  return changeArr;
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
