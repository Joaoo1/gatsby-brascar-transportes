import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import {
  Container,
  Image as Img,
  NavbarContainer,
  Menu,
  MenuHamburguer,
} from './styles'

export default function Navbar({ scrolled }) {
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
            <Menu>
              <a href="#home"><li>Início</li></a>
              <a href="#services"><li>Serviços</li></a>
              <a href="#bugdet"><li>Orçamento</li></a>
              <a href="#about"><li>Sobre</li></a>
              <a href="#contact"><li>Contato</li></a>
            </Menu>
            <MenuHamburguer size={32} color="white" />
          </NavbarContainer>
        </Container>
      )}
    />
  )
}
