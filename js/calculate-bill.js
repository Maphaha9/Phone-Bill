
function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringElement.value;
    //split the string
    var billItems = billString.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
}

function calculateBtnClicked(){
    // get the string entered in the textArea
    var billString = billStringField.value;   
    //round to two decimals
    var roundedBillTotal = totalPhoneBill(billString);
    billTotalElement.innerHTML = roundedBillTotal;
}

calculateBtn.addEventListener('click', calculateBtnClicked);

var calculateBtn = document.querySelector('.calculateBtn');
var billTotalElem = document.querySelector('.billTotal');
var billString = document.querySelector('.billString');

var billTotal = 0;

function totalBill(){
  var billElements = billString.value.split(",");
  billTotal = 0;
  billElements.forEach(function(element){
    var trimmedElement = element.trim();
    if (trimmedElement === "call"){
      billTotal += 2.75
    }
    else if (trimmedElement === "sms"){
      billTotal += 0.75;
    }
  });

  billTotalElem.innerHTML = billTotal.toFixed(2);
}

calculateBtn.addEventListener("click", totalBill);