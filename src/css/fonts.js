import styled from 'styled-components';
import { device } from './breakpoints.js';
import { Link } from 'react-router-dom';

//For titles on the header
export const H1 = styled.h1 `
    font-family: 'Ubuntu', sans-serif;
    font-weight: 600;
    text-align: ${props => props.center ? "center":""};
    @media ${device.mobileS} {
        font-size: 30px;
    }
    @media ${device.laptopL} {
        font-size: 3em!important;
    }
    @media ${device.desktop} {
        font-size: 5em!important;
    }
`

export const H2 = styled.h2 `
    font-family: 'Ubuntu', sans-serif;
    font-weight: 400;
    color: #3C331A;
    text-align: ${props => props.center ? "center":""};
    letter-spacing: 0.015em;
    margin-bottom: 0.75em;
    @media ${device.mobileS} {
        font-size: 30px;
    }
    @media ${device.laptopL} {
        font-size: 1.5em!important;
    }
    @media ${device.desktop} {
        font-size: 3em!important;
    }
`

//Title for each project section
export const Title = styled.h1 `
    font-family: 'Ubuntu', sans-serif;
    font-weight: 800;
    text-align: center;
    @media ${device.mobileS} {
        font-size: 1em;
    }
    @media ${device.laptopL} {
        font-size: 1.75em!important;
        margin-top: 2em!important;
    }
    @media ${device.desktop} {
        font-size: 5em!important;
    }
`

//For subsections within each section
export const Subtitle = styled.h5 `
    font-family: 'Open Sans', sans-serif;
    color: ${props => props.black ? "#333":"#9E69F3"};
    letter-spacing: 0.03em;
    margin-bottom: 1.25em;
    text-align: ${props => props.center ? "center":""};
    font-weight: ${props => props.thin ? "300":"700"};
    /* font-weight: 300; */
    @media ${device.mobileS} {
        font-size: 1em;
    }
    @media ${device.laptopL} {
        font-size: 1.20em;!important;
    }
    @media ${device.desktop} {
        font-size: 2em!important;
    }
`

//For all highlighted problems or goals
export const H3 = styled.h3 `
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    border-left: 7px solid #9E69F3;
    padding: 0.5em 0 0.5em 1em;
    line-height: 1.5em;
    @media ${device.mobileS} {
        font-size: 1em;
    }
    @media ${device.laptopL} {
        font-size: 1.5em;!important;
    }
    @media ${device.desktop} {
        font-size: 2em!important;
    }
`

//For all paragraphs
export const H5 = styled.h5 `
    font-family: 'Open Sans', sans-serif;
    text-align: ${props => props.center ? "center":"left"};
    line-height: 1.6em;
    letter-spacing: 0.03em;
    padding-bottom: 10px;
    font-weight: ${props => props.bold ? "400":"300"};
    // font-weight: 300;
    @media ${device.mobileS} {
        font-size: 1em;
    }
    @media ${device.laptopL} {
        font-size: 1.20em;!important;
    }
    @media ${device.desktop} {
        font-size: 2em!important;
    }
`


export const P = styled.p `
    font-family: 'Ubuntu', sans-serif;
    text-align: ${props => props.center ? "center":""};
    color: #333;
    line-height: 1.5em;
    letter-spacing: 0.03em;
    margin: auto;
    padding-bottom: 10px;
    font-weight: ${props => props.bold ? "400":"300"};
    @media ${device.mobileS} {
        font-size: 1em;
    }
    @media ${device.laptopL} {
        font-size: 1em;!important;
    }
    @media ${device.desktop} {
        font-size: 1.5em!important;
    }
`


export const Tag = styled.p `
    padding: 0.5em 0.75em 0.5em 0.75em;
    margin: 0 0.5em 0.5em 0;
    // margin: ${props => props.n ? "0.5em 0 0 0":"0.5em"};

    border-radius: 5px;
//     background-color: #f0ecfc;
// background-image: linear-gradient(315deg, #f0ecfc 0%, #c797eb 74%);
    color: ${props => props.white ? "white":"#CDA7F5"};
    background: ${props => props.white ? "#CDA7F5":""};
    border: 1px solid #CDA7F5;
    @media ${device.mobileS} {
        font-size: 0.75em;
    }
    @media ${device.laptopL} {
        font-size: 0.75em;!important;
    }
    @media ${device.desktop} {
        font-size: 1.5em!important;
    }
`





//For card title in get involve page
export const H4 = styled.h4 `
    font-family: 'Ubuntu', sans-serif;
    color: #15091F;
    font-weight: 500;
    text-align: center;
    @media ${device.mobileS} {
        font-size: 1.25em;
    }
    @media ${device.laptopL} {
        font-size: 1.25em!important;
    }
    @media ${device.desktop} {
        font-size: 2.5em!important;
        /* letter-spacing: 0.05em; */
    }
`


export const Highlights = styled.div `
    font-family: 'Open Sans', sans-serif;
    color: #15091F;
    margin-bottom: 0.5em;
    // border: 1px solid #390d93;
    border-radius: 10px;
    width: 100%;
    font-weight: 300;
    text-align: left;
    -webkit-box-shadow: 0px 0px 5px -1px #9E69F3;
    -moz-box-shadow: 0px 0px 5px -1px #9E69F3;
    box-shadow: 0px 0px 5px -1px #9E69F3;
    padding: ${props => props.small ? "0.5em 1em 0.5em 1em":"1em 2em 1em 2em"} ;
    @media ${device.mobileS} {
        padding: ${props => props.theme.paddingS}!important;
        width: ${props => props.theme.widthS}!important;
    }
    @media ${device.laptop} {
        padding: ${props => props.theme.paddingM}!important;
        width: ${props => props.theme.widthM}!important;
    }
    @media ${device.laptopL} {
        padding: ${props => props.theme.paddingL}!important;
    }
`


// export const Highlights = styled(H5) `
//     /* color: ${props => props.light ? "#798897":"#333"};     */
//     color: #333;
//     border: 1px solid #798897;
//     width: 80%;
//     margin: auto auto 32px auto;
//     line-height: 1.6em;
//     letter-spacing: 0.03em;
//     padding-bottom: 10px;
//     text-align: ${props => props.left ? "":"center"};
//     font-style: italic;
//     font-weight: 300;
//     /* font-weight: 300; */
//       @media ${device.mobileS} {
//         font-size: 1em;
//         padding: .2em;
//     }
//     @media ${device.laptopL} {
//         font-size: 1em;!important;
//         padding: .5em;
//     }
//     @media ${device.desktop} {
//         font-size: 1.5em!important;
//         padding: .75em;
//     }
// `

export const Important = styled(H5) `
    /* color: ${props => props.light ? "#798897":"#333"};     */
    color: #333;
    border: 2px solid #333;
    /* width: 80%; */
    margin: auto auto 32px auto;
    line-height: 1.6em;
    /* background-color: red; */
    letter-spacing: 0.03em;
    padding-bottom: 10px;
    text-align: ${props => props.left ? "":"center"};
    /* font-style: italic; */
    font-weight: 400;
    /* font-weight: 300; */
    @media ${device.mobileS} {
        font-size: 1em;
        padding: 0.3em;!important;
    }
    @media ${device.laptopL} {
        font-size: 1.25em;!important;
        padding: 0.5em;!important;
    }
    @media ${device.desktop} {
        font-size: 2em!important;
        padding: 0.9em!important;
    }
`


//For footer
export const H6 = styled.h6 `
    font-family: 'Karla', sans-serif;
    color: #798897;
    font-weight: ${props => props.light ? "300":"700"};
    text-align: ${props => props.center ? "center":""};
    line-height: 1em;
    @media ${device.mobileS} {
      font-size: 0.8em;
    }
    @media ${device.laptopL} {
      font-size: 1.1em;!important;
      line-height: 1.3em!important;
    }
    @media ${device.desktop} {
      font-size: 1.9em!important;
    }
`







export const Transition = styled.h5 `
    font-family: 'Karla', sans-serif;
    color: #798897;
    letter-spacing: 0.03em;
    font-weight: 300;
    text-align: center;
    transform: rotate(90deg);
  /* Safari */
  -webkit-transform: rotate(90deg);
  /* Firefox */
  -moz-transform: rotate(90deg);
  /* IE */
  -ms-transform: rotate(90deg);
  /* Opera */
  -o-transform: rotate(90deg);
    /* font-weight: 300; */
    @media ${device.mobileS} {
        font-size: 1em;
    }
    @media ${device.laptopL} {
        font-size: 1.20em;!important;
    }
    @media ${device.desktop} {
        font-size: 2em!important;
    }
`


export const Span = styled.span `
    color: ${props => props.subtitle ? "#333":"#FE4E60"};
    font-size: ${props => props.subtitle ? "0.75em":""};
    font-weight: ${props => props.subtitle ? "400":"700"};
`

export const A = styled.a `
    color: #90C4E9;
`

export const Large = styled.p `
    font-family: 'Karla', sans-serif;
    text-align: center;
    color: rgba(177, 190, 234, 0.4);
    font-size: 120px!important;
    font-weight: 900;
    letter-spacing: 10px;
`

export const Btn = styled(Link) `
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid #FE4E60;
    text-align: center;
    font-weight: 700;
    padding: 0.5em 1.5em;
    font-family: 'Quicksand', sans-serif;
    letter-spacing: 0.05em;
    transition: 0.2s;
    box-shadow: ${props => props.hover ? "1px 1px 8px 1px #C6DBDE":"0px 0px 8px 0px #FE4E60"};
    background-color: ${props => props.hover ? "#FE4E60":"white"};
    color: ${props => props.hover ? "white":"#FE4E60"};
    &:hover {
        text-decoration: none;
        /* background-color: #FE4E60; */
        background-image: linear-gradient(to bottom right, #798897, #FE4E60);
        color: white;
        box-shadow: 1px 1px 8px 1px #FE4E60;
    }
    @media ${device.mobileS} {
        font-size: 1em;
    }
    @media ${device.tablet} {
        font-size: 1em!important
    }
    @media ${device.laptopL} {
        font-size: 1.5em!important;
    }
    @media ${device.desktop} {
        font-size: 1.75em!important;
    }
`



export const NextBtn = styled(Link) `
    backdrop-filter: blur(5px) saturate(100%);
    -webkit-backdrop-filter: blur(5px) saturate(100%);
    background-color: rgba(255, 255, 255, 0.24);
    border: 1px solid rgba(209, 213, 219, 0.3);
    box-shadow: 2px 2px 10px 4px rgba(158,105,243,0.31);
    color: #9E69F3;
    position: fixed;
    right: 40px;
    bottom: 40px;
    cursor: pointer;
    border-radius: 50%;
    text-align: center;
    font-weight: 700;
    height: 60px;
    width: 60px;
    padding-top: 15px;
    font-family: 'Karla', sans-serif;
    transition: 0.2s;
    &:hover {
        text-decoration: none;
        color: white;
        background:#9E69F3;
        opacity: 0.5;
        box-shadow: 4px 4px 10px 5px rgba(158,105,243,0.7);
    }
    @media ${device.mobileS} {
        font-size: 1em;
    }
    @media ${device.tablet} {
        font-size: 1em!important
    }
    @media ${device.laptopL} {
        font-size: 1.2em!important;
    }
    @media ${device.desktop} {
        font-size: 1.55em!important;
    }
`

export const PrevBtn = styled(Link) `

    position: absolute;
    left: calc(50vw - 585px);
    margin: 0;
    bottom: 2em;
    padding: 0.5em 1.2em;
    cursor: pointer;
    text-align: center;
    font-weight: 700;
    font-family: 'Quicksand', sans-serif;
    letter-spacing: 0.05em;
    transition: 0.2s;
    color: ${props => props.hover ? "#333":"#798897"};
    &:hover {
        text-decoration: none;
        color: #333;
    }
    @media ${device.mobileS} {
        font-size: 1em;
    }
    @media ${device.tablet} {
        font-size: 1em!important
    }
    @media ${device.laptopL} {
        font-size: 1.2em!important;
    }
    @media ${device.desktop} {
        font-size: 1.55em!important;
    }
`
