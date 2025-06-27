import { style } from '@vanilla-extract/css';
import { vars } from '../../style.css';

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '2rem',
  maxWidth: '600px',
  backgroundColor: vars.color.accent,
  margin: 'auto',
  borderRadius: '4px',
});

export const section = style({
  gap: '2rem',
  display: 'flex',
  alignItems: 'center',
});

export const label = style({
  flex: 1,
  textTransform: 'uppercase',
});

export const input = style({
  flex: 1,
  padding: '0.5rem',
  outlineColor: vars.color.secondary,
  border: 'none',
});

export const buttons = style({
  display: 'flex',
  gap: '1rem',
});

export const addBtn = style({
  flex: 1,
  padding: '0.8rem',
  backgroundColor: vars.color.primary,
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
});
export const reset = style({
  flex: 1,
  padding: '0.8rem',
  backgroundColor: vars.color.danger,
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
});
