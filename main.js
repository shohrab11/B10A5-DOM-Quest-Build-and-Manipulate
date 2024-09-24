document.getElementById('donate-at-noakhali').addEventListener('click', function(e) {
   e.preventDefault();
   
   const addMoney = getInputFieldValueById('input-amount-noakhali');
   const mainBalance = getInputTextFieldValueById('main-balance');
   if(isNaN(addMoney) || addMoney < 0) {
    alert('Please enter a valid amount');
   }
   else if(addMoney > mainBalance){
    alert('Insufficient Balance')
     }
     else{
        const accountBalanceNoakhali = getInputTextFieldValueById('account-balance-noakhali');
        const newBalance = addMoney + accountBalanceNoakhali;
        document.getElementById('account-balance-noakhali').innerText = newBalance;
        const newMainBalance = mainBalance - addMoney;
        document.getElementById('main-balance').innerText = newMainBalance;
       
     }
})

document.getElementById('donate-at-feni').addEventListener('click', function(e) {
    e.preventDefault();
    
    const addMoney = getInputFieldValueById('input-amount-feni');
    const mainBalance = getInputTextFieldValueById('main-balance');
    if(isNaN(addMoney) || addMoney < 0) {
     alert('Please enter a valid amount');
    }
    else if(addMoney > mainBalance){
     alert('Insufficient Balance')
      }
      else{
         const accountBalanceFeni = getInputTextFieldValueById('account-balance-feni');
         const newBalance = addMoney + accountBalanceFeni;
         document.getElementById('account-balance-feni').innerText = newBalance;
         const newMainBalance = mainBalance - addMoney;
         document.getElementById('main-balance').innerText = newMainBalance;
        
      }
 })

 document.getElementById('donate-at-injure').addEventListener('click', function(e) {
    e.preventDefault();
    
    const addMoney = getInputFieldValueById('input-amount-injure');
    const mainBalance = getInputTextFieldValueById('main-balance');
    if(isNaN(addMoney) || addMoney < 0) {
     alert('Please enter a valid amount');
    }
    else if(addMoney > mainBalance){
     alert('Insufficient Balance')
      }
      else{
         const accountBalanceInjure = getInputTextFieldValueById('account-balance-injure');
         const newBalance = addMoney + accountBalanceInjure;
         document.getElementById('account-balance-injure').innerText = newBalance;
         const newMainBalance = mainBalance - addMoney;
         document.getElementById('main-balance').innerText = newMainBalance;
        
      }
 })