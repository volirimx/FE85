import { api } from ".."

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

export interface GetPostResponce {
  count: number,
  next: string | null;
  previous: string | null;
  results: Post[]
}

export const getPosts = async (
  link: string = "/blog/posts/?limit=10&",
  title: string = '',
  order: string = ''
): Promise<GetPostResponce> => {

  let seacrhParams = `${link}`
  if (title) seacrhParams += `search=${title}&`;
  if (order) seacrhParams += `ordering=${order}&`;

  const response: any = await api.get(seacrhParams)

  return response.data
}