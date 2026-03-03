
export interface Sermon {
  _id: string;
  title: string;
  scripture: string;
  category: string;
  preacher: string;
  date: string;
  duration: number;
  imageUrl: string;
  audioUrl: string;
  views?: number;
}