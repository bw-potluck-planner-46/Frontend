import React from "react";

function Potluck({ details }) {
  if (!details) {
    return <h3>Working fetching your Potluck&apos;s details</h3>;
  }

  return (
    <div className="potluck container">
      <h2>{details.name}</h2>
      <p>Location: {details.location}</p>
      <p>Date: {details.date}</p>
      <p>Time: {details.time}</p>
      {
        <div>
          Would to to see:
          <ul>
            {details.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      }
    </div>
  );
}
