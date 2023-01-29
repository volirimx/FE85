export interface IData {
  id: number;
  image?: string;
  text?: string;
  date: string;
  lesson_num?: number;
  title: string;
  description?: string;
  author?: string;
}

export interface IDataProps {
  card: IData[];
}
