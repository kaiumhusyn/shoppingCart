function updateProductNumber(product, price, isIncreasing){
    const ProductInput = document.getElementById(product + '-number');
    let productNumber = ProductInput.value;
    if (isIncreasing){
        productNumber = parseInt(productNumber) +1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) -1;
    }
    ProductInput.value = productNumber;
    //update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price ;
    //calculate total
    calculateTotal();

}

function getInputValue(product){
    const phoneInput = document.getElementById(product + '-number');
    const phoneNumber =parseInt(phoneInput.value);
    return phoneNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') *59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    //update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

//handle Phone increse decrese event
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone',1219, true)
});

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone',1219, false);
})

//handle case increse decrese event
document.getElementById('case-plus').addEventListener('click', function(){
  
    updateProductNumber('case',59, true);

});

document.getElementById('case-minus').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    updateProductNumber('case',59, false);
    
})