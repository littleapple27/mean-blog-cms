export interface Article {
  id: number;
  pubDate: Date;
  title: string;
  author: string;
  img: string;
  content: string;
  isActive: boolean;
  loaded: boolean;
  isUpcoming: boolean;
}
