import { style } from '@vanilla-extract/css';
import { vars } from '../../style.css';

export const item = style({
  padding: '1rem',
  backgroundColor: vars.color.accent,
  margin: '10px',
  display: 'flex',
  alignItems: 'center',
});

export const desc = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '0.5rem',
  textAlign: 'center',
});

export const crossBtn = style({
  color: 'red',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1.5rem',
});

export const dropdown = style({
  backgroundColor: vars.color.secondary,
  border: 'none',
  padding: '10px',
  borderRadius: '6px',
});

export const tickBtn = style({
  color: 'green',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1.5rem',
});
