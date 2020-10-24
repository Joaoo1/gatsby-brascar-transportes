import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import {
  Container,
  Image as Img,
  TextContainer,
  ButtonsContainer,
} from './styles'

export default function Header({ id }) {
  const graphqlQuery = graphql`
    query {
      file(relativePath: { eq: "images/header-background.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `

  return (
    <StaticQuery
      query={graphqlQuery}
      render={data => (
        <Container id={id}>
          <Img fluid={data.file.childImageSharp.fluid} />
          <TextContainer>
            <h1>Transporte de veículos</h1>
            <p>
              Transporte seu veículo com tranquilidade, agilidade e de forma
              segura para todo o território nacional com a Brascar transportes.{' '}
            </p>

            <p>
              Somos uma empresa especializada em transporte de veículos
              automotores terrestres e aquáticos. Contamos com frota própria,
              terceirizada e agregada, dispondo de pátio de armazenagem e guarda
              em cidades metropolitanas.{' '}
            </p>

            <ButtonsContainer>
              <button>
                <a href="#bugdet">Solicitar orçamento</a>
              </button>
              <button>
                <a href="#contact">Entrar em contato</a>
              </button>
            </ButtonsContainer>
          </TextContainer>
        </Container>
      )}
    />
  )
}
