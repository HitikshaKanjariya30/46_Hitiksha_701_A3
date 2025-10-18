import React, { useState, useEffect } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div className="card">
      <div className="card-body">
        <h4>Q4 — Digital Clock</h4>
        <h2>{`${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(
          time.getSeconds()
        )}`}</h2>
        <p>{time.toLocaleDateString()}</p>
      </div>
    </div>
  );
}
