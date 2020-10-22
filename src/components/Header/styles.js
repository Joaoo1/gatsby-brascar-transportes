import styled from 'styled-components'

import Img from 'gatsby-image'

const Image = styled(Img)`
  width: 100%;
  height: 950px;
  position: absolute !important;
  z-index: -1;
`

const Container = styled.div`
  height: 950px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextContainer = styled.div`
  width: 100%;
  max-width: 1080px;
  color: white;
  margin: 6vh 15% 0 15%;

  h1 {
    font-size: 6rem;
    font-weight: 700;
  }

  p {
    font-size: 1.8rem;
    max-width: 650px;
    line-height: 1.7;
    margin: 1rem 0 0 0.5rem;
  }

  @media screen and (max-width: 840px) {
    width: 90%;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 60px;

  button {
    background-color: #002f41;
    height: 60px;
    width: 210px;
    font-weight: 600;
    color: #ffffff;
    border-radius: 7px;
    border: none;
  }

  button:last-child {
    margin-left: 3rem;
  }
`

export { Image, Container, TextContainer, ButtonsContainer }
