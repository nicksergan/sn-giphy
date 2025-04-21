import { Layout } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import { commonBgColor, headerBgColor } from './colors.ts';

const { Header, Content } = Layout;

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${commonBgColor};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body, * {
    font-style: normal;
    font-weight: 500;
  }
`;

export const PageHeader = styled(Header)`
  text-align: center;
  height: 56px;
  line-height: 56px;
  background-color: ${headerBgColor};
`;

export const PageContent = styled(Content)`
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: ${commonBgColor};
  padding: 40px 20px 0;
`;
