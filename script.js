let totalPrice = 0;

function clickForPurchase(target) {
    const selectedItemContainer = document.getElementById('select-items');
    const selectedItems = target.children[1].children[1].innerText;
    const li = document.createElement('li');
    li.innerText = selectedItems;
    selectedItemContainer.appendChild(li);



    //    total price calculation
    const selectedItemPrice = target.children[1].children[2].children[0].innerText;

    totalPrice = parseFloat(totalPrice) + parseFloat(selectedItemPrice);


    document.getElementById('total').innerText = totalPrice

    document.getElementById('totalAfterDiscount').innerText = totalPrice;


    disableCheck()

}


function disableCheck() {
    const priceForEnableButton = parseFloat(document.getElementById('total').innerText);
        if (priceForEnableButton > 0) {
            document.getElementById('total-price').removeAttribute('disabled')
        }
        if (priceForEnableButton >= 200) {
            document.getElementById('apply-btn').removeAttribute('disabled')
            
        }
    
}
function couponApply() {
    
   const couponCode = document.getElementById('coupon-code').value ;
   if (couponCode === 'SELL200') {
    const priceOfTotal = parseFloat(document.getElementById('total').innerText).toFixed(2);
    const discountPrice = (priceOfTotal * 0.20).toFixed(2);
    const outputTotal = priceOfTotal - discountPrice;
    document.getElementById('discount').innerText = discountPrice;
    document.getElementById('totalAfterDiscount').innerText = outputTotal;
   }
    
}
function goHome() {
    document.getElementById('discount').innerText = '00';
    document.getElementById('totalAfterDiscount').innerText ='00';
    document.getElementById('total').innerText = '00'
    const element = document.getElementById('select-items')
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    const btnEnable = document.getElementById('apply-btn');
    btnEnable.setAttribute('disabled', true);

    const emptyInput = document.getElementById('coupon-code');
    emptyInput.value = '';

    const purchaseBtn = document.getElementById('total-price');
    purchaseBtn.setAttribute('disabled', true);
    
}




