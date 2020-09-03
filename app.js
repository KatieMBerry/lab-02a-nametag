const myName = document.getElementById('my-name');
const myInput = document.getElementById('name-input');
const myNameButton = document.getElementById('name-button');

myNameButton.addEventListener('click', () => {
    const userInput = myInput.value;

    myName.textContent = userInput;
});

const pinkButton = document.getElementById('button-pink');
const blueButton = document.getElementById('button-blue');
const greenButton = document.getElementById('button-green');
const myButtonColor = [pinkButton, blueButton, greenButton]

// myButtonColor.addEventListener('click', () => {
//     const userInput = userColor.value;

    
// });