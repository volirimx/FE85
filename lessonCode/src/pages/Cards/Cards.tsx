import React, { useContext, useEffect, useMemo, useState } from "react";
import PageTemplate from "../PageTemplate/PageTemplate";
import styles from "./Cards.module.css";
import axios from "axios";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Pagination from "../../components/Pagination/Pagination";
import { turnNumberIntoArray } from "../../utils";
import { ThemeContext } from "../../context/theme";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { increment } from "../../redux/slices/counterSlice";
import { getAllPosts } from "../../redux/slices/cards";

interface ICharacter {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}

const Cards = () => {
  const posts = useAppSelector((store) => store.cards.cards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPosts(2));
  }, []);
  return (
    <PageTemplate title={"Card"} linkName={"none"}>
      <div className={styles.container}>
        {posts.map((character) => (
          <CharacterCard card={character} key={character.id} />
        ))}
      </div>
    </PageTemplate>
  );
};

export default Cards;
