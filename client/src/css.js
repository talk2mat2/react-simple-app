import styled, {keyframes} from 'styled-components';


export const Styledpaagination= styled.div`
display:flex;
width:100%;
background-color:grey;
justify-content:${({page})=>page==="first"?"start":page==="last"?"flex-end":"center"}
`

export  const FadeIn=keyframes`
0%{opacity:0;}
100%{opacity:1;}
`
export const Wrapper= styled.div`
color:${(props)=>props.primary?"white":"blue"};
background-color:${(props)=>props.primary?"blue":"grey"};
animation: 2s ${FadeIn} ease-in;

`
export const StyledUsers= styled.div`
animation: 2s ${FadeIn} ease-in;
`
