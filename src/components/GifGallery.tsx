import { useState } from 'react';
import styled from 'styled-components';
import { FrownOutlined, MehOutlined } from '@ant-design/icons';
import { CardsList } from './CardsList.tsx';
import { WarningInfoMessage } from './WarningInfoMessage';
import { useFetchData } from '../hooks/use-fetch-data.tsx';
import { SearchPanel } from './SearchPanel.tsx';

export const GifGallery = () => {
  const [inputValue, setInputValue] = useState('');
  const { loading, fetched, data, clearData, fetchData, error } = useFetchData();

  return (
    <Wrapper>
      <SearchPanel
        inputValue={inputValue}
        setInputValue={setInputValue}
        fetchData={fetchData}
        clearData={clearData}
        loading={loading}
      />
      {error && <WarningInfoMessage icon={<FrownOutlined />} message={error}></WarningInfoMessage>}
      {fetched && data?.length === 0 && <WarningInfoMessage icon={<MehOutlined />} message={`There are no GIFs found for`} />}
      {!!data.length && <CardsList data={data} />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;

  @media only screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;
