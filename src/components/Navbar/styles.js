import styled from 'styled-components'
import Img from 'gatsby-image'
import { FiMenu } from 'react-icons/fi'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: ${props => (props.scrolled ? '100px' : '140px')};
  background: ${props => (props.scrolled ? 'black' : 'transparent')};
  transition: height 0.3s, background-color 0.3s;
  z-index: 9999;
`

const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1480px;
  margin: 0 40px 0 40px;
  justify-content: space-between;
  align-items: center;
`
const Image = styled(Img)`
  height: ${props => (props.scrolled ? '45px' : '67px')} !important;
  width: ${props => (props.scrolled ? '90px' : '134px')} !important;
`

const Menu = styled.ul`
  @media screen and (max-width: 900px) {
    display: none;
  }

  li {
    display: inline;
    margin: 0 8px 0 8px;
    padding: 20px 25px;
    font-weight: 600;
    color: #ffffff;
    border-radius: 7px;

    :hover {
      background-color: rgba(255, 255, 255, 0.15);
    }

    a {
      text-decoration: none;
      color: white;
    }
  }
`

const MenuHamburguer = styled(FiMenu)`
  display: none;

  @media screen and (max-width: 900px) {
    display: inline;
    :hover {
      opacity: 0.6;
      transition: opacity 0.3s;
    }
  }
`

export { Container, Image, NavbarContainer, Menu, MenuHamburguer }
