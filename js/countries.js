const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => displayCountries(data));
};
const displayCountries = (countries) => {
    const countriesContainer = document.getElementById("country_name");
    countries.forEach((country) => {
        console.log(country);
        const countryDiv = document.createElement("div");
        countryDiv.classList.add("country");
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <h5>Capital: ${country.capital ? country.capital[0] : "No Capital"}</h5>
        <p>Country Code: ${country.cca2}</p>
        <button class="mt-5">More Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    });
};
loadCountries();
