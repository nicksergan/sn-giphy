import { theme, ThemeConfig } from 'antd';
import { colorInfo, colorPrimary, colorTextPlaceholder } from '../styled/colors.ts';

export const antdThemeConfig: ThemeConfig = {
  token: {
    colorPrimary,
    colorInfo,
    colorTextPlaceholder,
    wireframe: false,
    controlHeight: 42,
    fontSize: 16,
  },
  components: {
    Select: {
      controlHeight: 42,
      algorithm: true
    }
  },
  algorithm: theme.darkAlgorithm,
};
