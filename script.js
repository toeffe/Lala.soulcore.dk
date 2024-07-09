document.addEventListener('DOMContentLoaded', () => {
    const numbers = Array.from({ length: 16 }, (_, i) => i + 32);
    const numbersContainer = document.getElementById('numbers');

    numbers.forEach(number => {
        const row = document.createElement('tr');

        const numberCell = document.createElement('td');
        numberCell.className = 'number';
        numberCell.textContent = number;
        row.appendChild(numberCell);

        for (let i = 0; i < 9; i++) {
            const infoCell = document.createElement('td');
            infoCell.contentEditable = true;
            infoCell.textContent = `Info ${i + 1}`;
            row.appendChild(infoCell);
        }

        numbersContainer.appendChild(row);
    });
});
