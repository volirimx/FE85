import { api } from "..";

export interface Post {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  description: string;
  author: number;
}

export interface GetPostsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Post[];
}

export const getPosts = async (
  link: string = "/blog/posts/?limit=10&",
  title: string = "",
  order: string = ""
): Promise<GetPostsResponse> => {
  let searchParams = `${link}`;
  if (title) {
    searchParams += `search=${title}&`;
  }
  if (order) {
    searchParams += `ordering=${order}&`;
  }
  const response = await api.get(searchParams);
  const string = response.data.next as string;
  console.log(string.split("http"));

  return response.data;
};
