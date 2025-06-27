import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../style.css';

export const navbar = style({
  backgroundColor: vars.color.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 20,
  height: 60,
  margin: 20,
  borderRadius: 50,
});

globalStyle(`${navbar} a`, {
  textDecoration: 'none',
  color: vars.color.base,
  fontSize: 22,
  fontWeight: 600,
});
