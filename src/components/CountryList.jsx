import { useState } from "react";

const CountryList = () => {
  const [countries, setCountries] = useState([]);

  const addCountry = () => {
    const countryName = prompt("Enter country name:");
    if (countryName) {
      setCountries([...countries, { name: countryName, states: [] }]);
    }
  };

  const editCountry = (index) => {
    const newName = prompt("Edit country name:", countries[index].name);
    if (newName) {
      const updatedCountries = [...countries];
      updatedCountries[index].name = newName;
      setCountries(updatedCountries);
    }
  };

  const deleteCountry = (index) => {
    if (window.confirm("Are you sure you want to delete this country?")) {
      setCountries(countries.filter((_, i) => i !== index));
    }
  };

  return (
    <>
      <div className="countryList">
        <h2>Country Management</h2>
        <button className="add-button" onClick={addCountry}>
          Add Country
        </button>
        <ul className="country-list">
          {countries.map((country, index) => (
            <li key={index} className="country-item">
              {country.name}
              <div className="button-group">
                <button
                  className="edit-button"
                  onClick={() => editCountry(index)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => deleteCountry(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CountryList;
