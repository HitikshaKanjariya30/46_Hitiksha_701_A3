import React, { useState } from "react";

export default function Conditional() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="card">
      <div className="card-body">
        <h4>Q2 — Conditional rendering</h4>
        {loggedIn ? (
          <div>
            <p>Welcome back, user!</p>
            <button
              className="btn btn-sm btn-warning"
              onClick={() => setLoggedIn(false)}
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <p>Please log in to continue.</p>
            <button
              className="btn btn-sm btn-success"
              onClick={() => setLoggedIn(true)}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
