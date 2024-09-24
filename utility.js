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