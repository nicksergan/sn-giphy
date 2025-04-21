import styled from 'styled-components';
import { GifData } from '../types/gif-data.ts';

export const GifCard = ({ gif }: { gif: GifData }) => {
  return (
    <Image
      src={gif.images.fixed_height_small.url}
      alt={gif.title}
    />
  );
};

const Image = styled.img`
  border-radius: 8px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
