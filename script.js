document.addEventListener('DOMContentLoaded', () => {
    const numbers = Array.from({ length: 16 }, (_, i) => i + 32);
    const numbersContainer = document.getElementById('numbers');

    numbers.forEach(number => {
        const numberContainer = document.createElement('div');
        numberContainer.className = 'number-container';

        const numberElement = document.createElement('div');
        numberElement.className = 'number';
        numberElement.textContent = number;

        const infoElement = document.createElement('div');
        infoElement.className = 'info';
        infoElement.textContent = `Information about number ${number}`;

        numberContainer.appendChild(numberElement);
        numberContainer.appendChild(infoElement);
        numbersContainer.appendChild(numberContainer);
    });
});
