import React, { useContext } from "react";
import { useAppSelector } from "../../redux/hooks";

interface ICard {
  img: string;
  name: string;
  status: string;
  gender: string;
}

const CharacterCard = (props: ICard) => {
  // const theme = useContext(SimpleThemeContext);
  const visible = useAppSelector((store) => store.counter.value);
  if (visible) {
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
  }
  return null;
};

export default CharacterCard;
