import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  :root{
    --primary-color: #004A62;
    --accent-color: #6C63FF;
    --primary-font-color: #3F3D56;
    --footer-font-color: #FD4252;

    font-size: 60%;
  }

  *{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-size: 100%;
	  font: inherit;
	  vertical-align: baseline;
  }

  html, body {
    min-height: 100%;
  }

  ul {
	list-style: none;
}

body, input, button, textarea {
  font: 400 1.5rem Poppins;
  color: var(--primary-font-color);
  -webkit-font-smoothing: antialiased;
}
  body {
    background-color: '#fafafa';
    
    h1, h2 {
      font-weight: 600;
    }
    
    h1 {
      font-size: 4.0rem;
    }

    h2 {
      font-size: 2.4rem;
    }

    a.anchor {
    display: block;
    position: relative;
    top: -150px;
}
  }
  
@media (min-width: 721px) {
  :root {
    font-size: 62.5%;
  }
}`
