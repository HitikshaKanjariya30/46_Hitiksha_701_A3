import React from "react";

function FancyBox({ children }) {
  return (
    <div
      style={{
        border: "2px dashed #6c757d",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      <h5>Fancy Box</h5>
      <div>{children}</div>
    </div>
  );
}

export default function ContainmentParent() {
  return (
    <div className="card">
      <div className="card-body">
        <h4>Q2 — Children (Containment)</h4>
        <FancyBox>
          <p>
            This content is passed to <strong>FancyBox</strong> as children.
          </p>
          <button className="btn btn-sm btn-outline-primary">Inside Box</button>
        </FancyBox>
      </div>
    </div>
  );
}
