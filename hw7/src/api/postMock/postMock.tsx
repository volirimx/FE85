import { mockApi } from "..";

export interface Post {
  text: string;
  image: string;
  title: string;
  description: string;
}

export interface PostGet extends Post {
  id: string;
}

export const publishPost = async (post: Post) => {
  const response = await mockApi.post("/posts", post);
  console.log(response);
};

export const getPosts = async (): Promise<PostGet[]> => {
  const response = await mockApi.get("/posts");
  return response.data;
};

export const deletePost = async (id: string) => {
  const response = await mockApi.delete(`/posts/${id}`);
  console.log(response);
};
