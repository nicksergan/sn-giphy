import '@ant-design/v5-patch-for-react-19';
import { ConfigProvider } from 'antd';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { antdThemeConfig } from './config/antd-theme-config';
import { GlobalStyles } from './styled/global';
import App from './App'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <ConfigProvider theme={antdThemeConfig}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
