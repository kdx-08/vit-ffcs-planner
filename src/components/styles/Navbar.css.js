import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../style.css';

export const navbar = style({
  backgroundColor: vars.color.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 20,
  height: 60,
});

globalStyle(`${navbar} a`, {
  textDecoration: 'none',
  color: 'white',
  fontSize: 22,
  fontWeight: 600,
});
