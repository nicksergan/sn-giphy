import styled from 'styled-components';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { GifData } from '../types/gif-data.ts';
import { GifCard } from './GifCard';

export const CardsList = ({ data }: { data: GifData[] }) => {
  return (
    <Wrapper>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
        <Masonry gutter='8px'>
          {data.map(gif => <GifCard gif={gif} key={gif.id} />)}
        </Masonry>
      </ResponsiveMasonry>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 12em);
  overflow-y: auto;
`;

