import styled from 'styled-components';
import { device } from './breakpoints.js';
import { Link } from 'react-router-dom';
import { H1, H4, H5 } from './fonts.js';
import journey from '../img/aboutme_journey.png';
import me from '../img/home_me.jpg';
import bg from '../img/homebg.jpg';
import sh_home from '../img/sh_home.png';
import sr_home from '../img/sr_home.png';
import sweet_home from '../img/sweet_home.png';
//The outer container defines the maximum width the page no matter what the screen size is
//The content inside the outer container can either be left-aligned or centered (when the center attribute appears)

/**********************Home**************************/


export const Title = styled(H1) `
  grid-row: 3;
  justify-self: right;
  font-size: 60px;
  @media ${device.mobileS} {
    grid-column: 1;
  }
  @media ${device.laptop} {
    grid-column: 1 / 6!important;
  }
`
export const OuterFlexBox = styled.div `
    // margin: auto 32px auto 32px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media ${device.mobileS} {
        padding: ${props => props.theme.paddingS}!important;
        width: ${props => props.theme.widthS}!important;
    }
    @media ${device.tablet} {
        padding: ${props => props.theme.paddingM}!important;
    }
    @media ${device.laptopL} {
        width: ${props => props.theme.widthL}!important;
        padding: ${props => props.theme.paddingL}!important;
    }
`

export const Reveal = styled.div `
z-index: 1;
position: absolute;
width: 300px;
height: 300px;
background: url(${journey}) 50% 50% no-repeat fixed;
background-size: cover;
border-radius: 50%;
box-shadow: 0 0 20px 20px #f7f7f7 inset;
`

export const RevealContainer = styled.div `
  position: absolute;
  top:0;
  right:0;
  left:0;
  bottom:0;
  width: 100%;
  height: 100vh;
  background-color: #F7F7F7;
  overflow:hidden;
`


// export const Card = styled(Link) `
//     position: relative;
//     // background-image: linear-gradient(to right bottom, #4081f8, #7dd2f9);
//     // background: #A57CE4;
//     background-color: #f9c5d1;
//     background-image: linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%);
//     // background: ${props => `url(${props.background})`} no-repeat center center;
//     background-size: cover;
//     border-radius: 10px;
//     border: 1px solid rgba( 255, 255, 255, 0.18 );
//     display: flex;
//     flex-flow: row wrap;
//     justify-content: space-evenly;
//     border-radius: 20px;
//     padding: 1.5em 1em 1.5em 1em;
//     margin-bottom: 24px;
//     // background: #F7F7F7;
//     // transform: translatey(0px);
//   	// animation: float 4s ease-in-out infinite;
//     // animation-name: float;
//     // box-shadow: 2px 2px 8px 0px rgb(0,0,0,0.4);
//     z-index: 10;
//     box-shadow: 0 0 45px 5px rgba(0, 0, 0, .2);
//
//     &:after {
//       content: '';
//       position: absolute;
//       top: -10px;
//       right: 10px;
//       width: 100.5%;
//       height: 99.5%;
//       z-index: -10;
//     //Glassmorphism
//       border-radius: 15px;
//       background: rgba( 255, 255, 255, 0.25 );
//       // background-color: rgba(249, 197, 209, 0.2);
//       // background-image: linear-gradient(315deg, rgba(249, 197, 209, 0.2) 0%, rgba(151, 149, 239, 0.2) 74%);
//       // background: rgba( 0, 0, 0, 0.25 );
//       // background: rgba(60, 51, 26, 0.5);
//       // background-color: #f9c5d1;
//       // background-image: linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%);
//       box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
//       backdrop-filter: blur( 5px );
//       -webkit-backdrop-filter: blur( 5px );
//       }
//     &:hover {
//       text-decoration: none;
//       /* border: 1px solid #798897; */
//       /* box-shadow: 3px 2px 10px 5px #95B0B4; */
//       box-shadow: 4px 4px 10px 1px rgb(0,0,0,0.5);
//       /* background-color: rgb(0,0,0,0.2); */
//     }
//     // @media ${device.mobileS} {
//     //     padding: ${props => props.theme.paddingS}!important;
//     //     width: ${props => props.theme.widthS}!important;
//     //     & > img {
//     //       display: none!important;
//     //     }
//     // }
//     // @media ${device.tablet} {
//     //     padding: ${props => props.theme.paddingM}!important;
//     //     & > img {
//     //       display: none!important;
//     //     }
//     // }
//     // @media ${device.laptopL} {
//     //     width: ${props => props.theme.widthL}!important;
//     //     padding: ${props => props.theme.paddingL}!important;
//     //     & > img {
//     //       display: inline!important;
//     //     }
//     // }
//
//   @keyframes float {
//   	0% {
//   		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
//   		transform: translatey(0px);
//   	}
//   	50% {
//   		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.2);
//   		transform: translatey(-5px);
//   	}
//   	100% {
//   		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
//   		transform: translatey(0px);
//   	}
// }
// `

export const Card = styled(Link) `
//Glassmorphism
    backdrop-filter: blur(5px) saturate(100%);
    -webkit-backdrop-filter: blur(5px) saturate(100%);
    background-color: rgba(255, 255, 255, 0.24);
    border: 1px solid rgba(209, 213, 219, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

    border-radius: 10px;
    margin-bottom: 1.5em;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    border-radius: 20px;
    // margin-bottom: 40px;
    padding: 2em 1.25em 2em 1.25em;
    // background: #F7F7F7;
    // transform: translatey(0px);
  	// animation: float 4s ease-in-out infinite;
    // animation-name: float;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    // box-shadow: 2px 2px 8px 0px rgb(0,0,0,0.4);
    &:hover {
      text-decoration: none;
      /* border: 1px solid #798897; */
      /* box-shadow: 3px 2px 10px 5px #95B0B4; */
      box-shadow: 4px 4px 10px 1px rgb(0,0,0,0.5);
      background-color: rgba(255, 255, 255, 0.6);
      /* background-color: rgb(0,0,0,0.2); */
    }
    @media ${device.mobileS} {
        padding: ${props => props.theme.paddingS}!important;
        width: ${props => props.theme.widthS}!important;
    }
    @media ${device.tablet} {
        padding: ${props => props.theme.paddingM}!important;
        width: ${props => props.theme.widthM}!important;
    }
    @media ${device.laptopL} {
        padding: ${props => props.theme.paddingL}!important;
    }

  @keyframes float {
  	0% {
  		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  		transform: translatey(0px);
  	}
  	50% {
  		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.2);
  		transform: translatey(-5px);
  	}
  	100% {
  		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
  		transform: translatey(0px);
  	}
}
`

// export const Card = styled (Link) `
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-evenly;
//   justify-self: center;
//   padding: 1.5em;
//   // background: ${props => `url(${props.background})`} no-repeat center center fixed;
//   // background-size: cover;
//   width: 90%;
//   border-radius: 20%;
//   transform: translatey(0px);
//   animation: float 4.5s ease-in-out infinite;
//   animation-name: float;
//   @media ${device.mobileS} {
//     grid-column: 1;
//   }
//   @media ${device.laptop} {
//     grid-row: 4;
//     grid-column: ${props => props.position}!important;
//   }
//   &:hover {
//     text-decoration: none;
//   }
//   @keyframes float {
//     	0% {
//     		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
//     		transform: translatey(0px);
//     	}
//     	50% {
//     		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.2);
//     		transform: translatey(-2.5px);
//     	}
//     	100% {
//     		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
//     		transform: translatey(0px);
//     	}
//
// `


// export const OuterContainer = styled.div `
//     // text-align: ${props => props.center ? "center":"left"};
//     margin: auto;
//     display: grid;
//     height: 100vh;
//     grid-template-columns: 1fr 0.5fr;
//     @media ${device.tablet} {
//         max-width: 320px!important;
//     }
//     @media ${device.tablet} {
//         max-width: 720px!important;
//     }
//     @media ${device.laptop} {
//         max-width: 976px!important;
//     }
//     @media ${device.laptopL} {
//         max-width: 1440px!important;
//     }
//     @media ${device.desktop} {
//         max-width: 2400px!important;
//     }
// `

export const OuterContainer = styled.div `
    // text-align: ${props => props.center ? "center":"left"};
    margin: auto;
    @media ${device.tablet} {
        max-width: 320px!important;
    }
    @media ${device.tablet} {
        max-width: 720px!important;
    }
    @media ${device.laptop} {
        max-width: 976px!important;
    }
    @media ${device.laptopL} {
        max-width: 1440px!important;
    }
    @media ${device.desktop} {
        max-width: 2400px!important;
    }
`

export const InnerContainer = styled.div `
    margin: auto;
    display: grid;
    column-gap: 60px;
    row-gap: 60px;
    // height: 100vh;
    // grid-auto-rows: minmax(0.5fr, max-content);

`

export const SweetContainer = styled(InnerContainer) `
    @media ${device.mobileS} {
        width: 320px;
        grid-template-columns: 1fr!important;
    }
    @media ${device.tablet} {
        width: 80%!important;
    }
    @media ${device.laptop} {
        width: 80%!important;
    }
    @media ${device.laptopL} {
        width: 75%!important;
        grid-template-columns: 1fr 0.75fr!important;
    }
`


export const ShContainer = styled(InnerContainer) `
    position: relative;
    @media ${device.mobileS} {
        width: 320px;
        grid-template-columns: 1fr!important;
    }
    @media ${device.tablet} {
        width: 80%!important;
    }
    @media ${device.laptop} {
        width: 85%!important;
    }
    @media ${device.laptopL} {
        width: 75%!important;
        grid-template-columns: 1fr 1.5fr!important;
    }
`



export const WholeRow = styled.div `
  @media ${device.tablet} {
      grid-column: 1;
  }
  @media ${device.laptopL} {
      grid-column: 1 / 3;
  }
`

export const Roles = styled.div `
  grid-column: 2;
  justify-self: center;
  background-size: cover;
  width: 90%;
  border-radius: 20px;
  box-shadow: 0 5px 3px 0px rgba(0,0,0,0.4);
  padding: 1em;
  @media ${device.mobileS} {
      font-size: 1em;
      padding: .2em;
  }
  @media ${device.laptopL} {
      font-size: 1em;!important;
      padding: .5em;
  }
  @media ${device.desktop} {
      font-size: 1.5em!important;
      padding: .75em;
  }
`


//The inner container defines the maximum width of the content when you want to
//leave more space around your contents



// export const Card = styled(Link) `
//     grid-row: 4;
//     grid-column: ${props => props.position};
//     background: ${props => `url(${props.background})`} no-repeat center center fixed;
//     justify-self: center;
//     transform: translatey(0px);
// 	   animation: float 6s ease-in-out infinite;
//     animation-name: float;
//     border-radius: 20%;
//     display: flex;
//     flex-wrap: wrap;
//     border-radius: 30px;
//     align-content: space-between;
//     box-shadow: 2px 2px 8px 0px rgb(0,0,0,0.4);
//     &:hover {
//       text-decoration: none;
//       /* border: 1px solid #798897; */
//       /* box-shadow: 3px 2px 10px 5px #95B0B4; */
//       box-shadow: 4px 4px 10px 1px rgb(0,0,0,0.5);
//       /* background-color: rgb(0,0,0,0.2); */
//     }
//     @media ${device.mobileS} {
//         padding: ${props => props.theme.paddingS}!important;
//         width: ${props => props.theme.widthS}!important;
//     }
//     @media ${device.tablet} {
//         padding: ${props => props.theme.paddingM}!important;
//         width: ${props => props.theme.widthM}!important;
//     }
//     @media ${device.laptopL} {
//         padding: ${props => props.theme.paddingL}!important;
//     }
//
//   @keyframes float {
//   	0% {
//   		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
//   		transform: translatey(0px);
//   	}
//   	50% {
//   		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
//   		transform: translatey(-8px);
//   	}
//   	100% {
//   		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
//   		transform: translatey(0px);
//   	}
// }`




//For the cards like the ones on Get Involved page

// `
//


export const Img = styled.img `
    width: ${props => props.theme.width};
    height: ${props => props.theme.height};
    border-radius: ${props =>props.round ? "5px":""};
    margin: auto;
    &:hover {
      cursor: zoom-in;
    }
    @media ${device.mobileS} {
        height: ${props => props.theme.heightS};
    }
    @media ${device.tablet} {
        height: ${props => props.theme.heightT};
    }
    @media ${device.laptopL} {
        height: ${props => props.theme.heightL};
    }
    @media ${device.desktop} {
        height: ${props => props.theme.height};
    }
`

export const ImgWrapper = styled.div `
  width: 100%;
  /* height: 200px; */
  overflow: hidden;
  /* border: 1px solid #c4c4c4; */
  &:hover {
    box-shadow: 0px 0px 7px 0px #999999;
  }
`

export const Modal = styled.div `
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    padding-top: 35px;
    top: 0;
    left: 0;
    z-index: 10;
    display: ${props => props.clicked ? "none":""};
    overflow-y: scroll;
`

export const ModalImg = styled.img `
    margin-left: 15%;
    width: 70%;
    height: auto;
    display: ${props => props.clicked ? "none":""};
`

export const Li = styled.li `
    list-style-type: none;
    font-family: ${props => props.title ? "'EB Garamond', serif":"'Quicksand', sans-serif"};
    color: #A2ACBD;
    line-height: 1.45em;
    font-weight: ${props => props.bold ? "700":""};
    @media ${device.mobileS} {
        font-size: 1em;
    }
    @media ${device.laptopL} {
        font-size: 1.20em;!important;
        line-height: 1.5em!important;
    }
    @media ${device.desktop} {
        font-size: 2em!important;
    }
`

export const Intro = styled.div `
    margin: ${props => props.top ? "100px auto 0 auto":"40px auto 0 auto"};
    @media ${device.mobileS} {
        padding: ${props => props.theme.paddingS}!important;
        width: ${props => props.theme.widthS}!important;
    }
    @media ${device.tablet} {
        padding: ${props => props.theme.paddingM}!important;
    }
    @media ${device.laptopL} {
        width: ${props => props.theme.widthL}!important;
        padding: ${props => props.theme.paddingL}!important;
    }

`

export const HomeContainer = styled.div `
  z-index: 10;
  margin: auto 32px auto 32px;
  position: relative;
  // display: flex;
  // flex-flow: row wrap;
`

export const GlassCover = styled.div `
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 2px );
  -webkit-backdrop-filter: blur( 2px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  position: absolute;
  top: calc(100% + 48px);
  width: 50%;
  padding: 1.5em 3em 1.5em 3em;
`

export const FooterContainer = styled.div `
  position: absolute;
  bottom: 0;
`

export const TagContainer = styled.div `
  display: flex;
  flex-flow: row wrap;
  justify-content: start;

`
