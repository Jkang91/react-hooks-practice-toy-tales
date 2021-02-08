import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, deleteToy, updatedToy }) {

  const toyList = toys.map((toy) => {
    return <ToyCard
      key={toy.id}
      toy={toy}
      deleteToy={deleteToy}
      updatedToy={updatedToy}
    />
  })
  return (
    <div id="toy-collection">{toyList}</div>
  );
}

export default ToyContainer;
