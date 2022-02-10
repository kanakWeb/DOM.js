// click button add
document.getElementById('deposite-submit').addEventListener('click', function() {

    // get deposite input
    const depositeInput = document.getElementById('deposite-input');


    // get depositeAmount value
    const newDepositeText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeText);

    // get deposite amount
    const depositeTotal = document.getElementById('deposite-total');

    const previousDepositeText = depositeTotal.innerText
    const previousDepositeAmount = parseFloat(previousDepositeText);
    const newDepositeTotal = previousDepositeAmount + newDepositeAmount;

    depositeTotal.innerText = newDepositeTotal;
    //update account balance 
    const balenceTotal = document.getElementById('balence-total')
    const balenceTotalText = balenceTotal.innerText;
    const previousBalenceTotal = parseFloat(balenceTotalText);

    const newBalenceteTotal = previousBalenceTotal + newDepositeAmount;
    balenceTotal.innerText = newBalenceteTotal;

    depositeInput.value = '';


});



// withdra

document.getElementById('withdraw-submit').addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdraw-input');

    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);

    const withdrawTotal = document.getElementById('withdraw-total');

    const previousWithdrawtext = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawtext);

    const newToalWithdraw = previousWithdrawAmount + newWithdrawAmount;



    withdrawTotal.innerText = newToalWithdraw;



    const withdrawbalenceTotal = document.getElementById('balence-total');
    const previouswithdrawBalenceText = withdrawbalenceTotal.innerText;
    const previouswithdrawBalenceTotal = parseFloat(previouswithdrawBalenceText);

    const totalWithdrawBalence = previouswithdrawBalenceTotal - newWithdrawAmount;

    withdrawbalenceTotal.innerText = totalWithdrawBalence;


    withdrawInput.value = '';
});