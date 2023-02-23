const apiUrl = 'https://restcountries.com/v3.1/all';
let countriesData = [];
const tableBody = document.getElementById('table-body');




// Tabloyu oluşturur
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


// API' yi çeker..
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        countriesData = data;
        createTable(countriesData);
    })
    .catch(error => console.log(error)); // Yanlış bir şey var mı diye kontrol eder.
    // Girilen değeri kontrol edip filtreleme işlemini yapar.
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', () => {
      const searchString = searchInput.value.toLowerCase();
      const filteredData = countriesData.filter(country => {
        return country.name.common.toLowerCase().includes(searchString)
    });
        // Ekranda filtrelenen datayı gösterir.
    createTable(filteredData);
});
