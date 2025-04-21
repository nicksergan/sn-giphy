import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Button, Input, Select, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { GIPHY_API_KEY, LANG_OPTIONS } from '../config/contants.ts';


export const SearchPanel = ({ inputValue, loading, fetchData, clearData, setInputValue }: {
  inputValue: string;
  setInputValue: (value: string) => void;
  fetchData: (url: string) => void;
  clearData: () => void;
  loading: boolean;
}) => {
  const [language, setLanguage] = useState('en');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (!value) {
      clearData();
    }
  };

  const handleSearch = () => {
    const searchTerm = inputValue.trim();
    if (!inputValue) return;

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${encodeURIComponent(searchTerm)}
    &limit=10&offset=0&rating=g&lang=${language}&bundle=messaging_non_clips`;

    fetchData(url);
  };

  return (
    <Wrapper size={'large'}>
      <SelectElement
        value={language}
        defaultValue={'en'}
        onSelect={(value) => setLanguage(value as string)}
        options={LANG_OPTIONS}
      >
      </SelectElement>
      <Input.Search
        placeholder='Type something to search GIFs'
        size='large'
        value={inputValue}
        loading={loading}
        onChange={handleInputChange}
        onPressEnter={handleSearch}
        allowClear
        enterButton={
          <SearchBtn
            type='primary'
            disabled={!inputValue}
            icon={<SearchOutlined />}
            loading={loading}
            onClick={handleSearch}
          >
            Search
          </SearchBtn>
        }
      />
    </Wrapper>
  );
};

const SelectElement = styled(Select)`
  width: 150px;
`;

const Wrapper = styled(Space.Compact)`
  margin-bottom: 20px;
`;

const SearchBtn = styled(Button)`
  & {
    > span {
      position: relative;
    }

    &::before {
      content: '';
      background: linear-gradient(135deg, #453a81, #6253e1);
      position: absolute;
      inset: -1px;
      opacity: 1;
      transition: all 0.3s;
      border-radius: inherit;
    }
  }
`;
