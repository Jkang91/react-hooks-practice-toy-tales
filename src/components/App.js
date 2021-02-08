import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/toys")
      .then(resp => resp.json())
      .then(toysArray => setToys(toysArray))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function addToy(newToy) {
    const newList = [...toys, newToy]
    setToys(newList)
  }

  function deleteToy(toyObj) {
    const newToyList = toys.filter((toy) => toy.id !== toyObj.id)
    setToys(newToyList)
  }

  function updatedToy(changedToy) {
    const updatedList = toys.map((toy) => {
      if(toy.id === changedToy.id) {
        return changedToy
      } else {
        return toy
      }
    })
    setToys(updatedList)
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} deleteToy={deleteToy} updatedToy={updatedToy} />
    </>
  );
}

export default App;
