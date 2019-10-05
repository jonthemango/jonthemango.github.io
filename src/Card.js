import React from 'react';
import './App.css';

function Card(props) {

  
  return (
    <div className="card">
      <div className="animated fadeIn">
        <i className={"icon " + props.icon}></i>
        <p className="cardtitle">{props.title}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;