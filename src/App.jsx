import "./App.css";
import CountryList from "./components/CountryList";
import StateList from "./components/StateList";
import CityList from "./components/CityList";

function App() {
  return (
    <>
      <div className="container">
        <div className="list-container">
          <CountryList />
        </div>
        <div className="list-container">
          <StateList />
        </div>
        <div className="list-container">
          <CityList />
        </div>
      </div>
    </>
  );
}

export default App;
