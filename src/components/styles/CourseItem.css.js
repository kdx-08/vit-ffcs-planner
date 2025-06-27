import { style } from '@vanilla-extract/css';
import { vars } from '../../style.css';

export const item = style({
  margin: '1rem 0rem',
  padding: '1rem',
  backgroundColor: vars.color.accent,
  display: 'flex',
  justifyContent: 'space-between',
});

export const desc = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const crossBtn = style({
  color: 'red',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1.5rem',
});
