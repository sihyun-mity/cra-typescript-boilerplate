import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    transition: background-color 300ms, color 300ms, border 300ms, fill 300ms, -webkit-text-stroke 300ms;
  }

  body {
    background-color: #fff;
    font-family: "Pretendard Variable", -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    word-break: keep-all;
    user-select: none;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    overflow: overlay;
  }

  button {
    padding: 0;
  }
`;

export default GlobalStyle;
