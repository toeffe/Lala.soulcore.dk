document.addEventListener('DOMContentLoaded', () => {
    const numbers = Array.from({ length: 16 }, (_, i) => i + 32);
    const numbersContainer = document.getElementById('numbers');

    numbers.forEach(number => {
        const numberElement = document.createElement('div');
        numberElement.className = 'number';
        numberElement.textContent = number;
        numberElement.onclick = () => toggleInfo(number);

        const infoElement = document.createElement('div');
        infoElement.className = 'info';
        infoElement.id = `info-${number}`;
        infoElement.textContent = `Information about number ${number}`;

        numbersContainer.appendChild(numberElement);
        numbersContainer.appendChild(infoElement);
    });

    function toggleInfo(number) {
        const infoElement = document.getElementById(`info-${number}`);
        if (infoElement.style.display === 'none' || !infoElement.style.display) {
            infoElement.style.display = 'block';
        } else {
            infoElement.style.display = 'none';
        }
    }
});
