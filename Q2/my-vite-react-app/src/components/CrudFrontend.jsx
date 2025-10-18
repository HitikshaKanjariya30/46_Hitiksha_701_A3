import React, { useEffect, useState } from "react";
import api from "../api/api";

export default function CrudFrontend() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: "", description: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchItems = async () => {
    try {
      const res = await api.get("/items"); // GET /api/items
      setItems(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch items");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`/items/${editingId}`, form); // PUT /api/items/:id
        setEditingId(null);
      } else {
        await api.post("/items", form); // POST /api/items
      }
      setForm({ name: "", description: "" });
      fetchItems();
    } catch (err) {
      console.error(err);
      alert("Save failed");
    }
  };

  const edit = (item) => {
    setEditingId(item._id || item.id);
    setForm({ name: item.name, description: item.description });
  };

  const remove = async (id) => {
    if (!window.confirm("Delete this item?")) return;
    try {
      await api.delete(`/items/${id}`);
      fetchItems();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4>Q7 — CRUD Frontend</h4>
        <form onSubmit={handleSubmit} className="mb-3">
          <div className="mb-2">
            <input
              name="name"
              placeholder="Name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-2">
            <input
              name="description"
              placeholder="Description"
              className="form-control"
              value={form.description}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-success me-2">
            {editingId ? "Update" : "Create"}
          </button>
          {editingId && (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setEditingId(null);
                setForm({ name: "", description: "" });
              }}
            >
              Cancel
            </button>
          )}
        </form>

        <h5>Items</h5>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it) => (
              <tr key={it._id || it.id}>
                <td>{it.name}</td>
                <td>{it.description}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary me-2"
                    onClick={() => edit(it)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => remove(it._id || it.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td colSpan="3" className="text-muted">
                  No items
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
