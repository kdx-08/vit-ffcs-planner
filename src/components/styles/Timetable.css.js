import { style } from "@vanilla-extract/css";
import { vars } from "../../style.css";

export const ttheader=style({
    textAlign: 'center',
    fontSize: 14,
    whiteSpace: 'pre-line',
    padding: '10px 8px',
    fontWeight: 600,
    border: `1px solid ${vars.color.border}`,
    backgroundColor: vars.color.primary,
    color: vars.color.base
})

export const theader=style({
    border:'1px solid',
    backgroundColor: vars.color.secondary,
    color:vars.color.base,
    fontWeight:600,
    textAlign:'center',
    border:`1px solid ${vars.color.border}`
});

export const table=style({
    borderCollapse:'collapse',
})

export const tdefault=style({
    backgroundColor:"aliceblue",
    color:'black',
    selectors:{
        '&:hover':{
            backgroundColor:vars.color.thead,
            cursor:'pointer'
        }
    }
})

export const lunch=style({
    backgroundColor: vars.color.lunch,
    writingMode: 'vertical-lr',
    textAlign: 'center',
    letterSpacing: 4,
    textOrientation: 'upright',
    fontWeight: 600,
    border: `1px solid ${vars.color.border}`,
})

export const day = style({
  backgroundColor: vars.color.secondary,
  color: vars.color.base,
  fontWeight: 600,
  textAlign: 'center',
  padding: '8px',
  border: `1px solid ${vars.color.border}`,
});