import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img className="card_img" src={props.imgsrc} alt="" />
          <div className="card_info">
            <p className="card_category">{props.title}</p>
            <h3 className="card_title">{props.name}</h3>
            <button className="button">
              <a href={props.link} target="_blank">
                Watch Now
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
