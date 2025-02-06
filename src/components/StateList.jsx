import { useState } from "react";

const StateList = () => {
  const [states, setStates] = useState([]);

  const addState = () => {
    const stateName = prompt("Enter State name:");
    if (stateName) {
      setStates([...states, { name: stateName, states: [] }]);
    }
  };

  const editState = (index) => {
    const newName = prompt("Edit State name:", states[index].name);
    if (newName) {
      const updatedStates = [...states];
      updatedStates[index].name = newName;
      setStates(updatedStates);
    }
  };

  const deleteStates = (index) => {
    if (window.confirm("Are you sure you want to delete this State?")) {
      setStates(states.filter((_, i) => i !== index));
    }
  };

  return (
    <>
      <div className="stateList">
        <h2>State Management</h2>
        <button className="add-button" onClick={addState}>
          Add State
        </button>
        <ul className="state-list">
          {states.map((state, index) => (
            <li key={index} className="state-item">
              {state.name}
              <div className="button-group">
                <button
                  className="edit-button"
                  onClick={() => editState(index)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => deleteStates(index)}
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

export default StateList;
