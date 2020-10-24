import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SectionTitle from '../SectionTitle'

import { Container, ServiceContainer, ServiceInfo } from './styles'

function ServicesSection({ id }) {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "images/services" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 380, maxHeight: 200, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const carImage = allFile.edges.find(
    n => n.node.childImageSharp.fluid.originalName === 'services-cars.png'
  ).node.childImageSharp.fluid

  const motoImage = allFile.edges.find(
    n => n.node.childImageSharp.fluid.originalName === 'services-motocycles.png'
  ).node.childImageSharp.fluid

  const jetImage = allFile.edges.find(
    n => n.node.childImageSharp.fluid.originalName === 'services-jetski.png'
  ).node.childImageSharp.fluid

  return (
    <section>
      <div className="anchor" id={id} />
      <SectionTitle title="Nossos serviços" />
      <Container>
        <ServiceContainer>
          <div className="image-container">
            <Img
              fluid={carImage}
              alt={carImage.originalName}
              imgStyle={{ objectFit: 'contain' }}
            />
          </div>
          <ServiceInfo>
            <h2>Transporte de Carros</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </ServiceInfo>
        </ServiceContainer>
        <hr />
        <ServiceContainer className="reverse">
          <div className="image-container">
            <Img
              fluid={motoImage}
              alt={motoImage.originalName}
              imgStyle={{ objectFit: 'contain' }}
            />
          </div>
          <ServiceInfo>
            <h2>Transporte de Motos</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </ServiceInfo>
        </ServiceContainer>
        <hr />
        <ServiceContainer>
          <div className="image-container">
            <Img
              fluid={jetImage}
              alt={jetImage.originalName}
              imgStyle={{ objectFit: 'contain' }}
            />
          </div>
          <ServiceInfo>
            <h2>Transporte de Jet Skis</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </ServiceInfo>
        </ServiceContainer>
        <hr />
      </Container>
    </section>
  )
}

export default ServicesSection
