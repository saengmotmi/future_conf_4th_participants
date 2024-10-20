import { createGlobalStyle } from "styled-components";

// 글로벌 스타일
export const GlobalStyle = createGlobalStyle`
  /* Reset CSS */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  body, h1, h2, h3, h4, p, figure, blockquote, dl, dd {
    margin: 0;
  }
  
  ul[role='list'], ol[role='list'] {
    list-style: none;
  }
  
  html:focus-within {
    scroll-behavior: smooth;
  }
  
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }
  
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }
  
  img, picture {
    max-width: 100%;
    display: block;
  }
  
  input, button, textarea, select {
    font: inherit;
  }
  
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Base styles */
  body {
    font-family: 'Arial', sans-serif;
    line-height: 1.5;
    color: #333;
    background-color: #f4f4f4;
  }

  /* Additional base styles */
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 1em;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;
