import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { AiOutlineCloseCircle } from 'react-icons/ai'

import {
  Container,
  Image as Img,
  NavbarContainer,
  Menu,
  MenuHamburguer,
  HiddenMenu,
} from './styles'

export default function Navbar({ scrolled }) {
  const [showHiddenMenu, setShowHiddenMenu] = useState(false)

  function openHiddenMenu() {
    setShowHiddenMenu(true)
  }

  function closeHiddenMenu() {
    setShowHiddenMenu(false)
  }

  const graphqlQuery = graphql`
    query {
      file(relativePath: { eq: "images/logo-white.png" }) {
        childImageSharp {
          fixed(width: 134) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `
  const menu = (
    <>
      <a href="#home" onClick={closeHiddenMenu}>
        <li>Início</li>
      </a>
      <a href="#services" onClick={closeHiddenMenu}>
        <li>Serviços</li>
      </a>
      <a href="#bugdet" onClick={closeHiddenMenu}>
        <li>Orçamento</li>
      </a>
      <a href="#about" onClick={closeHiddenMenu}>
        <li>Sobre</li>
      </a>
      <a href="#contact" onClick={closeHiddenMenu}>
        <li>Contato</li>
      </a>
    </>
  )

  return (
    <StaticQuery
      query={graphqlQuery}
      render={data => (
        <Container scrolled={scrolled}>
          <NavbarContainer>
            <Img
              scrolled={scrolled}
              alt="Logo Brascar Transportes"
              fixed={data.file.childImageSharp.fixed}
            />
            <Menu>{menu}</Menu>
            <MenuHamburguer size={32} color="white" onClick={openHiddenMenu} />
          </NavbarContainer>

          <HiddenMenu isShowing={showHiddenMenu}>
            <ul>
              <AiOutlineCloseCircle
                color="white"
                size={48}
                onClick={closeHiddenMenu}
              />
              {menu}
            </ul>
          </HiddenMenu>
        </Container>
      )}
    />
  )
}
