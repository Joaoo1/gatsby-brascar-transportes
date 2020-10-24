import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  svg {
    margin: 30px;
  }

  h1 {
    font-size: 60px;
  }

  a {
    text-decoration: none;
  }

  button {
    color: white;
    background-color: var(--primary-color);
    height: 50px;
    width: 200px;
    margin-top: 50px;
    padding: 0 10px;
    border: none;
    border-radius: 8px;

    :hover {
      opacity: 0.8;
      transition: opacity 0.2s;
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;

    svg {
      max-width: 300px;
    }

    button {
      width: 100%;
    }
  }
`

export { Container }
