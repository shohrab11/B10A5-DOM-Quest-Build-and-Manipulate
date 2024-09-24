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
        const date = new Date();
        const accountBalanceNoakhali = getInputTextFieldValueById('account-balance-noakhali');
        const newBalance = addMoney + accountBalanceNoakhali;
        document.getElementById('account-balance-noakhali').innerText = newBalance;
        const newMainBalance = mainBalance - addMoney;
        document.getElementById('main-balance').innerText = newMainBalance;
        const title = document.getElementById('title-flood').innerText;
        const div = document.createElement('div');
        div.innerHTML = `
          <h4 class="text-black text-lg font-bold pb-4">${addMoney} is Taka  ${title}</h4>
               <p class="text-base font-light pb-5"> ${date} </p>
        `
        document.getElementById('donation-history').appendChild(div);
       
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
        const date = new Date();
         const accountBalanceFeni = getInputTextFieldValueById('account-balance-feni');
         const newBalance = addMoney + accountBalanceFeni;
         document.getElementById('account-balance-feni').innerText = newBalance;
         const newMainBalance = mainBalance - addMoney;
         document.getElementById('main-balance').innerText = newMainBalance;
         const title = document.getElementById('title-feni').innerText;
         const div = document.createElement('div');
         div.innerHTML = `
           <h4 class="text-black text-lg font-bold pb-4">${addMoney} is Taka  ${title}</h4>
                <p class="text-base font-light pb-5"> ${date} </p>
         `
         document.getElementById('donation-history').appendChild(div);
        
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
        const date = new Date();
         const accountBalanceInjure = getInputTextFieldValueById('account-balance-injure');
         const newBalance = addMoney + accountBalanceInjure;
         document.getElementById('account-balance-injure').innerText = newBalance;
         const newMainBalance = mainBalance - addMoney;
         document.getElementById('main-balance').innerText = newMainBalance;
         const title = document.getElementById('title-aid-injured').innerText;
         const div = document.createElement('div');
         div.innerHTML = `
           <h4 class="text-black text-lg font-bold pb-4">${addMoney} is Taka  ${title}</h4>
                <p class="text-base font-light pb-5"> ${date} </p>
         `
         document.getElementById('donation-history').appendChild(div);
        
      }
 })