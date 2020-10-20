import React from 'react';
import { StaticQuery,graphql } from "gatsby"

import { Container, Image as Img, NavbarContainer, Menu, MenuHamburguer } from './styles';

export default function Navbar({ scrolled }) {
  const graphqlQuery = graphql`
    query {
      file(relativePath: { eq: "images/logo-white.png" }) {
        childImageSharp  {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }`

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
            <li>Início</li>
            <li>Serviços</li>
            <li>Orçamento</li>
            <li>Sobre</li>
            <li>Contato</li>
        </Menu>
        <MenuHamburguer 
          size={32}
          color="white"/>
        </NavbarContainer>
        
      </Container>
        
      )}
    />
  )
}