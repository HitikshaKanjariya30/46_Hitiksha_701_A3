import React, { useState } from "react";

const DATA = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable" },
  { id: 3, name: "Banana", category: "Fruit" },
  { id: 4, name: "Spinach", category: "Vegetable" },
];

export default function LiveFilter() {
  const [query, setQuery] = useState("");

  const filtered = DATA.filter(
    (d) =>
      d.name.toLowerCase().includes(query.toLowerCase()) ||
      d.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="card">
      <div className="card-body">
        <h4>Q6 — Live Filtering</h4>
        <input
          className="form-control mb-3"
          placeholder="Search by name or category"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className="list-group">
          {filtered.map((item) => (
            <li className="list-group-item" key={item.id}>
              {item.name} — {item.category}
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="list-group-item text-muted">No results</li>
          )}
        </ul>
      </div>
    </div>
  );
}
