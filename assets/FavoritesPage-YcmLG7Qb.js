import{u as t,w as r,x as a}from"./index-pUzI0Qk1.js";import{s as e,f as s,F as l,C as c,H as x}from"./FlightItem-ADeEdAGA.js";const d="/spacex/assets/fav-banner-4G4LpbQl.jpg",h=e.section`
  max-width: 1660px;
  margin: 0 auto;
  position: relative;
  padding-top: 220px;
  min-height: 440px;
  background-color: var(--bg-black);
`,p=e.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1660px;
`,g=e.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 440px;
  width: 100%;
  opacity: 0.64;
`,u=e.h1`
  position: relative;
  color: var(--text-white);
  text-align: center;
  font-size: 48px;
  font-weight: 800;
  line-height: normal;
  text-transform: uppercase;
  z-index: 1;
`,v=()=>t.jsx(h,{children:t.jsxs(p,{children:[t.jsx(g,{src:d,alt:"Hero Background"}),t.jsx(u,{children:"favourites"})]})}),m=e.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  & svg {
    fill: none;
    stroke: var(--bg-black);
    transition: stroke var(--transition);
  }

  & button:last-child:hover svg {
    fill: none;
    stroke: var(--bg-white);
  }
`,f=e.p`
  color: var(--text-black);
  text-align: center;
  font-size: 24px;
`,j=()=>{const n=r(s);return t.jsx(t.Fragment,{children:n.length>0?t.jsx(m,{children:n.map(o=>t.jsx(l,{...o,isFavorite:!0},o.id))}):t.jsx(f,{children:"No favorite tours found!"})})},b=e.button`
  all: unset;
  color: var(--text-dark-blue);
  font-family: Lato;
  font-size: 24px;
  line-height: normal;
  cursor: pointer;
  transition: transform var(--transition);

  &:hover {
    transform: scale(1.1);
  }
  display: ${({$shouldbeshown:n})=>n?"inline-block":"none"};
`,F=({text:n,shouldBeShown:o=!0,...i})=>t.jsx(b,{$shouldbeshown:o,...i,children:n}),k=e.section`
  padding: 64px 0;
`,w=e.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 40px;
`,y=()=>{const[n,o]=a(s),i=()=>{o([])};return t.jsx(k,{children:t.jsxs(c,{children:[t.jsx(w,{children:t.jsx(F,{text:"Clear all",onClick:i,shouldBeShown:!!n.length})}),t.jsx(j,{})]})})},C=()=>t.jsxs(t.Fragment,{children:[t.jsx(x,{}),t.jsx(v,{}),t.jsx(y,{})]}),H=()=>t.jsx(t.Fragment,{children:t.jsx(C,{})});export{H as default};
