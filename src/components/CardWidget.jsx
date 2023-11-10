import React from 'react';
import styles from './CardWidget.css';

const CardWidget = ({ title, description, imageUrl, onClick }) => {
  return (
    <div className="card-widget">
      <img className="card-image" src={imageUrl} alt="Card" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={onClick}>Click me</button>
      </div>
    </div>
  );
};

export default CardWidget;
