import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.min.css';
import { getTheme } from '~/modules';

const backgroundColor = getTheme('background.z0');
const textColor = getTheme('text.main');

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background: ${backgroundColor};
    color: ${textColor};
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    font-family: 'Source Sans Pro', sans-serif;
    text-rendering: optimizeLegibility !important;
    overscroll-behavior: contain;
    scrollbar-width: none;
    -webkit-font-smoothing: antialiased !important;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
  }
  html {
    min-height: 100vh;
    width: 100%;
  }
  input, button {
    font-family: 'Source Sans Pro', sans-serif;
  }
  button {
    cursor: pointer;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
