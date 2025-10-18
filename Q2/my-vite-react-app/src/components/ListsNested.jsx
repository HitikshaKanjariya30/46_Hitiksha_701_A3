import React from "react";

function Pet({ name, type }) {
  return (
    <li>
      {name} — <em>{type}</em>
    </li>
  );
}

export default function ListsNested() {
  const pets = [
    { id: 1, name: "TV", type: "Electric" },
    { id: 2, name: "Spoon", type: "Catelory" },
    { id: 3, name: "T-shirt", type: "Clothing" },
  ];

  return (
    <div className="card">
      <div className="card-body">
        <h4>Q2 — Lists & Nested Components</h4>
        <p>List of pets (rendered from an array):</p>
        <ul>
          {pets.map((p) => (
            <Pet key={p.id} {...p} />
          ))}
        </ul>
      </div>
    </div>
  );
}
