import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="img">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="des">
          <p>Price: ${item.price}</p>
          <h2>{item.title}</h2>
          <p>{item.category}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
