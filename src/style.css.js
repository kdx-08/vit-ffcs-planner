import { createTheme, style } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    primary: '#1e60ff',
    secondary: '#eaf3ff',
    danger: '#f24f4f',
    accent: '#d0e4ff',
    base: '#dedede',
    text: '#1a1a1a',
    muted: '#7a7a7a',
  },
});

export const body = style({});
