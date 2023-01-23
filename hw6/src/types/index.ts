interface IPost {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  description?: string;
  author: string;
}

interface IPostsProps {
  posts: IPost[];
}

export type { IPost, IPostsProps };
