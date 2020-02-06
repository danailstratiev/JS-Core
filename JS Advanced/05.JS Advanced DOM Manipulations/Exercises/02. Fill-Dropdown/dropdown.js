function addItem() {
    let text = document.getElementById('newItemText').value;
    let value = document.getElementById('newItemValue').value;
    
    if (text === '' && value === '') {
        alert('Please insert some info !');
    }
    let dropDownMenu = document.getElementById('menu');

    let optionElement = document.createElement('option');

    optionElement.textContent = text;
    optionElement.value = value;

    dropDownMenu.appendChild(optionElement);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}