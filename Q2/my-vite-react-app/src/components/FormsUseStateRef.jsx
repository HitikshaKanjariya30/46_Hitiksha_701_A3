import React, { useState, useRef } from "react";

export default function FormsUseStateRef() {
  const [form, setForm] = useState({ name: "", email: "" });
  const emailRef = useRef();

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${form.name} — ${form.email}`);
    setForm({ name: "", email: "" });
    emailRef.current.focus();
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4>Q3 — Form with useState and useRef</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="form-label">Name</label>
            <input
              name="name"
              required
              className="form-control"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label className="form-label">Email</label>
            <input
              ref={emailRef}
              name="email"
              type="email"
              required
              className="form-control"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
