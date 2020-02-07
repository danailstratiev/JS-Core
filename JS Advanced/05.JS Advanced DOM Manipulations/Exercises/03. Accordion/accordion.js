function toggle() {
    let button = document.querySelector('.button');
    let elementWithText = document.getElementById('extra');

    //this will display text when button is clicked
    if (elementWithText.style.display === 'none') {
        elementWithText.style.display = 'block'
        button.textContent = 'Less';
    }else {
        elementWithText.style.display = 'none'
        button.textContent = 'More';
    }
}