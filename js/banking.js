// handle desposit Button 

document.getElementById('deposit-button').addEventListener('click',function(){
    // get the amount deposit
    const depositInput = document.getElementById('deposit-input');
    const newDeposittext = depositInput.value;
    const newDepositAmount = parseFloat(newDeposittext);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount  = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + newDepositAmount; 
    depositTotal.innerText = newDepositTotal;

    // Update Account Balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount ;
    balanceTotal.innerText = newBalanceTotal;
    
    // clear the deposit input field
    depositInput.value= '';
});

// handle withdraw button

document.getElementById('withdraw-button').addEventListener('click',function(){

    // input Field
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // withdraw Field
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);
    // total withdraw
    const totalWithdrawAmount = withdrawTotalAmount + newWithdrawAmount;
    
    withdrawTotal.innerText = totalWithdrawAmount;

    //update Account Balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;




    // clear the deposit input field
    withdrawInput.value= '';

})