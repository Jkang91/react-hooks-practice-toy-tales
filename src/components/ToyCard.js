import React from "react";

function ToyCard({toy, deleteToy, updatedToy}) {
  const {name, image, likes} = toy

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
      .then(resp => resp.json())
      .then(t => deleteToy(toy))
  }

  function handleLike() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: 'PATCH',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        name: name,
        image: image,
        likes: likes + 1
      })
      }
    )
      .then(resp => resp.json())
      .then(t => updatedToy(t))
  }
  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={handleDelete}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
