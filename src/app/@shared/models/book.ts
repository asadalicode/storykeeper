import { StringChain } from 'lodash';

export interface Book {
  title: string;
  bookName?: string;
  image: string;
  recipientUser?: string;
  senderUser?: string;
  id: any;
  published_at?: StringChain;
  status: number;
  type?: number;
  author?: string;
}

export interface Qusetion {
  id: number;
  thumbnail: string;
  type: string;
  question: string;
  description: string;
}
