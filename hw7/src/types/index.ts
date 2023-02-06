export interface IPost {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  description?: string;
  author: string;
}

export interface IPostsProps {
  posts: IPost[];
}

export interface IPostProps {
  id: number;
  image: string;
  date: string;
  title: string;
  description?: string;
}

