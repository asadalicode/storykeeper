import { StringChain } from 'lodash';

export interface Book {
  title: string;
  thumbnail: string;
  id: string;
  published_at: StringChain;
  status: string;
  author: string;
}
