function searchItems() {
    const columnIndex = Array.from(input.parentElement.parentElement.children).indexOf(input.parentElement);
    const filterValue = input.value.toLowerCase();
    const table = document.getElementById('dataTable');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');

    for (let row of rows) {
        const cell = row.getElementsByTagName('td')[columnIndex];
        if (cell) {
        const cellText = cell.textContent || cell.innerText;
        row.style.display = cellText.toLowerCase().includes(filterValue) ? '' : 'none';
        }
    }

}

