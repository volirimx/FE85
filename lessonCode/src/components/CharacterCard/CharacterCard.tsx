import React, { useContext } from "react";

interface ICard {
  img: string;
  name: string;
  status: string;
  gender: string;
}

const CharacterCard = (props: ICard) => {
  // const theme = useContext(SimpleThemeContext);

  return (
    <div
      style={{
        color: "white",
        backgroundColor: "light" ? "red" : "grey",
      }}
    >
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
