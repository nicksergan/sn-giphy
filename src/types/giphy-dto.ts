import { GifData } from './gif-data';

export type GiphyDto = {
  data: GifData[];
  meta: {
    status: number;
    msg: string;
  };
};
