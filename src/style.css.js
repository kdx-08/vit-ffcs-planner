import { createTheme,globalStyle,style } from "@vanilla-extract/css";

export const [themeClass,vars]=createTheme({
    color:{
        primary: '#1e60ff',
        secondary: '#3a8dff',
        accent: '#5abcf5',
        base: '#dedede',
        text: '#1a1a1a',
        muted: '#7a7a7a',
        lunch: '#ffd166',
        thead: '#a3cef1',
        cell: '#D1F8EF',
        border: '#d6d6d6'
    }
});