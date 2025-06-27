import { createTheme, style } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    primary: '#1e60ff',
    secondary: '#3a8dff',
    danger: '#f24f4f',
    accent: '#5abcf5',
    base: '#dedede',
    text: '#1a1a1a',
    muted: '#7a7a7a',
  },
});

export const body = style({});
