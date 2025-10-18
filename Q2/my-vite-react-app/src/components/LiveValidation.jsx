import React, { useState } from "react";

export default function LiveValidation() {
  const [values, setValues] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  function validate(values) {
    const e = {};
    if (!values.username) e.username = "Username required";
    else if (values.username.length < 3) e.username = "At least 3 chars";
    if (!values.password) e.password = "Password required";
    else if (values.password.length < 6) e.password = "At least 6 chars";
    return e;
  }

  const handleChange = (e) => {
    const nv = { ...values, [e.target.name]: e.target.value };
    setValues(nv);
    setErrors(validate(nv));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate(values);
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      alert("Form valid — submitting");
      setValues({ username: "", password: "" });
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h4>Q5 — Live Validation</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="form-label">Username</label>
            <input
              name="username"
              className={`form-control ${errors.username ? "is-invalid" : ""}`}
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>

          <div className="mb-2">
            <label className="form-label">Password</label>
            <input
              name="password"
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>

          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
