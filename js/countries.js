// all country data
const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => displayCountries(data));
};
// all country display in html sidebar
const displayCountries = (countries) => {
    const countriesContainer = document.getElementById("country_name");
    countries.forEach((country) => {
        const countryDiv = document.createElement("div");
        countryDiv.classList.add("country");
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <h5>Capital: ${country.capital ? country.capital[0] : "No Capital"}</h5>
        <p>Country Code: ${country.cca2}</p>
        <button onclick="loadCountryDetails('${country.cca2}')">More Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    });
};

// single country details
const loadCountryDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => countryDisplay(data[0]));
};

// single country name and flag show by clicked
const countryDisplay = (country) => {
    const countriesDisplay = document.getElementById("country_details");
    countriesDisplay.innerHTML = `
    <h2>${country.name.common}</h2>
    <img src="${country.flags.png}">
    `;
};
loadCountries();
