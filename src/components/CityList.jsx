import { useState } from "react";

const CityList = () => {
  const [cities, setCities] = useState([]);

  const addCity = () => {
    const cityName = prompt("Enter City name:");
    if (cityName) {
      setCities([...cities, { name: cityName, states: [] }]);
    }
  };

  const editCity = (index) => {
    const newName = prompt("Edit City name:", cities[index].name);
    if (newName) {
      const updatedCities = [...cities];
      updatedCities[index].name = newName;
      setCities(updatedCities);
    }
  };

  const deleteCities = (index) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      setCities(cities.filter((_, i) => i !== index));
    }
  };

  return (
    <>
      <div className="cityList">
        <h2>City Management</h2>
        <button className="add-button" onClick={addCity}>
          Add City
        </button>
        <ul className="city-list">
          {cities.map((city, index) => (
            <li key={index} className="city-item">
              {city.name}
              <div className="button-group">
                <button className="edit-button" onClick={() => editCity(index)}>
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => deleteCities(index)}
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

export default CityList;
