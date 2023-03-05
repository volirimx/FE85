import React, { useEffect, useState } from "react";
import Copyright from "../../components/Copyright/Copyright";
import Menu from "../../components/Menu/Menu";
import SmallerPost from "../../components/SmallerPost/SmallerPost";
import SmallestPost from "../../components/SmallestPost/SmallestPost";
import styles from "./AllPosts.module.css";
import { useAppSelector } from "../../redux/hooks";
import { getPosts, GetPostsResponse, Post } from "../../api/post/post";
import { async } from "q";
import { preparePostsResponse } from "../../utils/utils";

export interface IPost {
  id: number;
  image: string;
  date: string;
  lesson_num: number;
  title: string;
  description: string;
  text: string;
  author: number;
}

const AllPosts = () => {
  //   const posts = useAppSelector((store) => store.card.cards);
  const [posts, setPosts] = useState<GetPostsResponse>();
  const [inputValue, setInputValue] = useState("");
  const [orderValue, setOrderValue] = useState("");

  useEffect(() => {
    (async () => {
      const postsResponseData = await getPosts(
        undefined,
        inputValue,
        orderValue
      );
      setPosts(() => preparePostsResponse(postsResponseData));
    })();
  }, [inputValue, orderValue]);

  const buttonClick = async (link: string | null | undefined) => {
    if (!link) return;
    const postsResponseData = await getPosts(link);
    setPosts(() => preparePostsResponse(postsResponseData));
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttonsContainer} style={{ marginTop: "20px" }}>
        <select
          className={styles.button}
          onChange={(e) => setOrderValue(e.target.value)}
        >
          <option value={""} label="" />
          <option value={"title"} label="title" />
          <option value={"text"} label="text" />
          <option value={"description"} label="descr" />
        </select>
      </div>
      <input
        placeholder="search..."
        className={styles.input}
        onChange={(e) => setInputValue(() => e.target.value)}
      />
      <div className={styles.posts}>
        {posts?.results.map((item) => (
          <SmallestPost
            image={item.image}
            text={item.text}
            date={item.date}
            lesson_num={item.lesson_num}
            title={item.title}
            description={item.description}
            author={item.author}
            id={item.id}
            key={item.id}
          />
        ))}
      </div>
      <div className={styles.buttonsContainer}>
        <button
          onClick={() => {
            buttonClick(posts?.previous);
          }}
          className={styles.button}
        >
          Previous
        </button>
        <button
          onClick={() => {
            buttonClick(posts?.next);
          }}
          className={styles.button}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllPosts;
