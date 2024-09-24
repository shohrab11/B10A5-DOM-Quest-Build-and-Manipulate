function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}
function getInputTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const inputTextNumber = parseFloat(textValue);
    return inputTextNumber;
}
function showSectionById(id){
   
    document.getElementById('main-donation').classList.add('hidden');
    document.getElementById('donation-history').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}