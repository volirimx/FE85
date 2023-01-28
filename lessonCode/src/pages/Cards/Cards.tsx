import React, { useContext, useEffect, useMemo, useState } from "react";
import PageTemplate from "../PageTemplate/PageTemplate";
import styles from "./Cards.module.css";
import axios from "axios";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import Pagination from "../../components/Pagination/Pagination";
import { turnNumberIntoArray } from "../../utils";
import { ThemeContext } from "../../context/theme";

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

interface ICharactersInfo {
  count: number;
  //   next: string | null;
  pages: number;
  //   prev: string | null;
}

const Cards = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersInfo, setCharactersInfo] = useState<ICharactersInfo>();

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${currentPage}`
      );

      if (response.status !== 200) {
        console.log("err");
        return;
      }
      setCharactersInfo({
        count: response.data.info.count,
        pages: response.data.info.pages,
      });
      setCharacters(response.data.results);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${currentPage}`
      );

      if (response.status !== 200) {
        console.log("err");
        return;
      }
      setCharacters(response.data.results);
    })();
  }, [currentPage]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character/?page=2"
      );
    })();
  }, []);

  const pagesArray = useMemo(
    () => turnNumberIntoArray(charactersInfo?.pages),
    [charactersInfo]
  );

  const handlePageButtonClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <PageTemplate title={"Card"} linkName={"none"}>
      <div className={styles.container}>
        {characters.map((character) => (
          <CharacterCard
            name={character.name}
            img={character.image}
            status={character.status}
            gender={character.gender}
            key={character.id}
          />
        ))}
      </div>
      <Pagination
        pagesArray={pagesArray}
        handlePageButtonClick={handlePageButtonClick}
      />
    </PageTemplate>
  );
};

export default Cards;
