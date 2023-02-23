const apiUrl = 'https://restcountries.com/v3.1/all';
let countriesData = [];
const tableBody = document.getElementById('table-body');
const counter = 1;



function createTable(data) {
    tableBody.innerHTML = '';
    data.forEach(country => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.innerHTML = `<a href="https://en.wikipedia.org/wiki/${country.name.common}" style="color: grey">${country.name.common}</a>`

        row.appendChild(nameCell);
        tableBody.appendChild(row);
    });
}

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        countriesData = data;
        createTable(countriesData);
    })
    .catch(error => console.log(error));

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', () => {
      const searchString = searchInput.value.toLowerCase();
      const filteredData = countriesData.filter(country => {
        return country.name.common.toLowerCase().includes(searchString)
    });
    createTable(filteredData);
});