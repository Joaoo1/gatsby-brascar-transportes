import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'

import SectionTitle from '../SectionTitle'

import { Container, ServiceContainer, ServiceInfo } from './styles';

function ServicesSection() {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: {eq: "images/services"}}) {
        edges {
          node {
            childImageSharp {
              fixed(height: 200, fit: FILL) {
                originalName
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  const carImage = allFile.edges.find(n => 
    n.node.childImageSharp.fixed.originalName === 'services-cars.png')
    .node.childImageSharp.fixed

  const motoImage = allFile.edges.find(n => 
    n.node.childImageSharp.fixed.originalName === 'services-motocycles.png')
    .node.childImageSharp.fixed

  const jetImage = allFile.edges.find(n => 
    n.node.childImageSharp.fixed.originalName === 'services-jetski.png')
    .node.childImageSharp.fixed

  return(
        <section>
          <SectionTitle title="Nossos serviços" />
          <Container>
            <ServiceContainer>
              <Img fixed={carImage} />
              <ServiceInfo>
                <h2>Transporte de Carros</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                   irure dolor in reprehenderit in voluptate velit esse cillum 
                   dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                   cupidatat non proident, sunt in culpa qui officia deserunt 
                   mollit anim id est laborum.</p>
              </ServiceInfo>
            </ServiceContainer>
            <hr />
            <ServiceContainer className="reverse">
            <Img fixed={motoImage} />
              <ServiceInfo>
                <h2>Transporte de Motos</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                   irure dolor in reprehenderit in voluptate velit esse cillum 
                   dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                   cupidatat non proident, sunt in culpa qui officia deserunt 
                   mollit anim id est laborum.</p>
              </ServiceInfo>
              
            </ServiceContainer>
            <hr />
            <ServiceContainer>
              <Img fixed={jetImage}  />
              <ServiceInfo>
              <h2>Transporte de Jet Skis</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                   Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                   laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                   irure dolor in reprehenderit in voluptate velit esse cillum 
                   dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                   cupidatat non proident, sunt in culpa qui officia deserunt 
                   mollit anim id est laborum.</p>
              </ServiceInfo>
            </ServiceContainer>
            <hr />
          </Container>
      </section>
  )
}

export default ServicesSection;