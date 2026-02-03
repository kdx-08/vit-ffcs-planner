import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    primary: '#1e60ff',
    secondary: '#eaf3ff',
    danger: '#f24f4f',
    accent: '#d0e4ff',
    base: '#dedede',
    text: '#1a1a1a',
    muted: '#7a7a7a',
    lunch: '#ffd166',
    thead: '#a3cef1',
    cell: '#D1F8EF',
    border: '#d6d6d6',
  },
});

export const globalStyles = `@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=block');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  font-family: Montserrat, sans;
  font-size: 1rem;
}

::-webkit-scrollbar {
  display: none;
}`;
