import { style } from '@vanilla-extract/css';
import { vars } from '../../style.css';

export const item = style({
  margin: '1rem 0rem',
  padding: '1rem',
  backgroundColor: vars.color.base,
});
