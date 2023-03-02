import React, { useEffect, useState } from "react";
import { GetPostResponce, getPosts, Post } from "../../api/post/post";
import { CardTablet } from "../../components/CardTablet/CardTablet";
import Tab from "../../components/Tab/Tab";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAllPosts } from "../../redux/slices/cardSlice";
import { preparePostsResponce } from "../../utils/utils";
import PageTemplate from "../PageTemplate/PageTemplate";
import styles from "./MyFavorite.module.css"


export const MyFavorite = () => {

const cards = useAppSelector((store) => store.cards.cards)


  return (
    <div className={styles.wrapper}>
      <PageTemplate title={"My Favorite"} linkName={''}>
          <div className={styles.container}>
            {cards.filter(card => card.favorite).map((card) => ( <CardTablet card={card} key={card.id} /> ))}
          </div>
      </PageTemplate>
    </div>
  );
};
