import { style } from '@vanilla-extract/css';
import { vars } from '../../style.css';

export const ttheader = style({
  textAlign: 'center',
  fontSize: 14,
  whiteSpace: 'pre-line',
  padding: '10px 8px',
  fontWeight: 600,
  border: `1px solid ${vars.color.border}`,
  backgroundColor: vars.color.primary,
  color: vars.color.base,
});

export const theader = style({
  border: '1px solid',
  backgroundColor: vars.color.secondary,
  color: vars.color.base,
  fontWeight: 600,
  textAlign: 'center',
  border: `1px solid ${vars.color.border}`,
});

export const table = style({
  borderCollapse: 'collapse',
  marginBottom: '3rem',
});

export const tdefault = style({
  backgroundColor: 'aliceblue',
  color: 'black',
  selectors: {
    '&:hover': {
      backgroundColor: vars.color.thead,
    },
  },
  height: '80px',
  width: '100px',
});

export const lunch_bg = style({
  backgroundColor: vars.color.lunch,
  padding: '0.5rem',
});

export const lunch = style({
  // writingMode: 'vertical-lr',
  // textAlign: 'center',
  // verticalAlign: 'middle',
  // letterSpacing: 4,
  // textOrientation: 'upright',
  // fontWeight: 700,
  // border: `1px solid ${vars.color.border}`,
  // lineHeight: '1.2',
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  gap: '0.5rem',
  fontWeight: 'bold',
});

export const day = style({
  backgroundColor: vars.color.primary,
  color: vars.color.base,
  fontWeight: 600,
  textAlign: 'center',
  padding: '8px',
  border: `1px solid ${vars.color.border}`,
});

export const filled = style({
  backgroundColor: '#b8fc92',
  ':hover': {
    backgroundColor: '#b8fc92',
  },
});

export const clash = style({
  backgroundColor: '#ff6161',
  ':hover': {
    backgroundColor: '#ff6161',
  },
});
