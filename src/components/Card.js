import "../App.css";
import React from "react";

const Card = ({ image, title, type, status, studios, episodes }) => {
  return (
    <div className="card">
      <img src={image} alt="Avatar" />
      <div className="container">
        <h3>
          <b className="wrap">{title}</b>
        </h3>
        <p className="wrap">
          Type: <b>{type}</b>
        </p>
        <p className="wrap">
          Episodes: <b>{episodes}</b>
        </p>
        <p className="wrap">
          Status: <b>{status}</b>
        </p>
        <p className="wrap">
          Studios: <b>{studios.map((studio) => studio.name).join(", ")}</b>
        </p>
      </div>
    </div>
  );
};

export default Card;
