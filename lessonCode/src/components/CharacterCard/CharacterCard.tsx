import React from "react";

interface ICard {
  img: string;
  name: string;
  status: string;
  gender: string;
}

const CharacterCard = (props: ICard) => {
  return (
    <div style={{ color: "white" }}>
      <img src={props.img} />
      <div>
        <p>{props.name}</p>
        <p>{props.status}</p>
        <p>{props.gender}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
