import "../App.css";
import React from "react";

const Card = ({ image, title, type, status, studios, episodes }) => {
  return (
    <div className="card">
      <img src={image} alt="Avatar" />
      <div className="container">
        <h4>
          <b>{title}</b>
        </h4>
        <p>
          Type: <b>{type}</b>
        </p>
        <p>
          Episodes: <b>{episodes}</b>
        </p>
        <p>
          Status: <b>{status}</b>
        </p>
        <p>
          Studios:{" "}
          {studios?.map((studio) => (
            <b key={studio.mal_id}> {studio.name} </b>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Card;
