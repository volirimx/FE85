import React, { useContext } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleImage } from "../../redux/slices/cardPreviewSlice";
import {
  Card,
  dislikeCard,
  likeCard,
  openCardPreview,
  toggleRating,
} from "../../redux/slices/cards";

interface ICard {
  card: Card;
}

const CharacterCard = ({ card }: ICard) => {
  const dispatch = useAppDispatch();

  return (
    <div
      style={{
        color: "white",
        backgroundColor: "light" ? "red" : "grey",
        maxWidth: "300px",
        border: "1px solid black",
      }}
      onClick={() => {
        dispatch(openCardPreview(card));
      }}
    >
      <img src={card.image} style={{ width: "100px" }} />
      <div>
        <p>{card.title}</p>
        <p>{card.text}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleRating({ id: card.id, rating: 1 }));
          }}
        >
          like {card.likes}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            dispatch(toggleRating({ id: card.id, rating: 2 }));
          }}
        >
          dislike {card.dislikes}
        </button>
        {card.rated === 0 && "unrated"}
        {card.rated === 1 && "liked"}
        {card.rated === 2 && "disliked"}
      </div>
    </div>
  );
};

export default CharacterCard;
