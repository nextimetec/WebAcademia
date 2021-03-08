import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Helvetica, sans-serif;
  }
  h1, h2, h3 {
    text-transform: uppercase;
    text-align: center;
  }
  h1 {
    color: '#FFFFFF';
    font-family: 'Racing Sans One', cursive;
    font-weight: 400;
    font-style: normal;
    line-height: 0.8em;
    text-shadow: 0px 0px 20px rgb(0 0 0 / 70%);
    text-transform: uppercase;
    line-break: strict;
    margin: 1em 0 !important;
  }
  h2, h3 {
    color: #FFC401;
    font-family: "Helvetica", Sans-serif;
    font-weight: 500;
    font-style: oblique;
    letter-spacing: 0.3px;
    line-break: strict;
  }
  hr {
    opacity: 1 !important;
  }
  .btn-buy {
    font-family: "Racing Sans One", Sans-serif;
    font-size: 18px;
    font-weight: 400;
    text-transform: capitalize;
    fill: #0F0F0F;
    color: #0F0F0F;
    background-color: #FFC401;
    border-radius: 0px 0px 0px 0px;
    box-shadow: 0px 0px 21px -9px #faaa00;
  }
  .btn-buy:hover {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
    transform: scale(1);
    animation: pulse 1s infinite;
    fill: #0F0F0F;
    color: #0F0F0F;
    background-color: #FFC401;
  }

  p {
    margin-top: 0;
    margin-bottom: .9rem;
    color: #D3D3D3;
    font-size: 17px;
    font-weight: 300;
    line-height: 1.8em;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
    }
  
    70% {
      transform: scale(1.3);
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }
  
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    }
`
