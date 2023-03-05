import React, { useEffect, useState } from "react";
import { sendPost } from "../../api/auth/sendPost";
import styles from "./NewPost.module.css";
import ImageUploading, {
  ImageListType,
  ImageUploadingPropsType,
} from "react-images-uploading";
import {
  deletePost,
  getPosts,
  Post,
  PostGet,
  publishPost,
} from "../../api/postMock/postMock";

type IPostData = {
  title: string;
  text: string;
  description: string;
};

const NewPost = () => {
  const [postData, setPostData] = useState<IPostData>({
    title: "",
    text: "",
    description: "",
  });
  // ------------------------------
  const [img, setImg] = useState<ImageListType>([]);
  const [posts, setPosts] = useState<PostGet[]>([]);
  const onImgChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    console.log(imageList, addUpdateIndex);
    setImg(imageList);
  };
  // ------------------------------
  function handleSubmitButtonClick(e: any) {
    e.preventDefault();
    if (img.length && img[0].dataURL) {
      const dataToSend: Post = {
        ...postData,
        image: img[0].dataURL,
      };
      publishPost(dataToSend);
    }
    // const response = await sendPost(postData)
    // console.log(response);
  }

  useEffect(() => {
    (async () => {
      const postsResponse = await getPosts();
      setPosts(postsResponse);
    })();
  }, []);

  const handlePostClick = async (id: string) => {
    await deletePost(id);
    const postsResponse = await getPosts();
    setPosts(postsResponse);
  };

  return (
    <div className={styles.container}>
      {posts.map((el) => (
        <img
          src={el.image}
          style={{ width: "200px" }}
          alt="pic"
          onClick={() => handlePostClick(el.id)}
        />
      ))}
      <div>
        <div>
          Title:{" "}
          <input
            type="text"
            name="title"
            onChange={(e) =>
              setPostData({ ...postData, title: e.target.value })
            }
          />
        </div>
        <div>
          Text:{" "}
          <input
            type="text"
            name="text"
            onChange={(e) => setPostData({ ...postData, text: e.target.value })}
          />
        </div>
        <div>
          Description:{" "}
          <input
            type="text"
            name="description"
            onChange={(e) =>
              setPostData({ ...postData, description: e.target.value })
            }
          />
        </div>
        <ImageUploading value={img} multiple={false} onChange={onImgChange}>
          {({ onImageUpload }) => (
            <button onClick={onImageUpload}>upload</button>
          )}
        </ImageUploading>

        <button onClick={(e) => handleSubmitButtonClick(e)}>Confirm</button>
      </div>
    </div>
  );
};

export default NewPost;
