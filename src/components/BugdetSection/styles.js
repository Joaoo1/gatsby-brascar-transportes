import styled from 'styled-components'

import Budget from '../../assets/illustrations/budget.svg'

const Container = styled.div`
  display: flex;
`

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;
    padding: 0 10px 0 10px;
    margin-top: 15px;
    flex: 0 50%;

    label {
      margin-bottom: 2px;
    }

    input {
      height: 46px;
      padding-left: 8px;
      border: 1px solid var(--primary-color);
      border-radius: 5px;
      color: black;
    }
  }

  div.button {
    flex: 1;

    button {
      width: 100%;
      height: 48px;
      border: none;
      border-radius: 5px;
      background-color: var(--accent-color);
      color: white;
      text-transform: uppercase;
    }
  }

  @media screen and (max-width: 680px) {
    div {
      flex: 1 100%;
      margin-bottom: 10px;
    }
  }
`

const Illustration = styled(Budget)`
  margin: 25px 0 0 25px;

  @media screen and (max-width: 1085px) {
    display: none;
  }
`

export { Container, Form, Illustration }
