import { StringChain } from 'lodash';

export interface Book {
  title: string;
  image: string;
  id: string;
  published_at: StringChain;
  status: string;
  author: string;
}

export interface Qusetion {
  id: number;
  thumbnail: string;
  type: string;
  question: string;
  description: string;
}
