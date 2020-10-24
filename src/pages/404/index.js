import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import NotFoundIllustration from '../../assets/illustrations/notFound.svg'

import { Container } from './_styles'

export default function pages() {
  const graphqlQuery = graphql`
    query {
      file(relativePath: { eq: "images/logo-404.png" }) {
        childImageSharp {
          fixed(height: 240) {
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
        <div style={{ padding: '20px' }}>
          <Img
            fixed={data.file.childImageSharp.fixed}
            style={{ marginBottom: '40px' }}
          />

          <Container>
            <NotFoundIllustration />
            <div>
              <h1>404...</h1>
              <h2>Oops! Página não encontrada.</h2>
              <a href="/">
                <button>Página inicial</button>
              </a>
            </div>
          </Container>
        </div>
      )}
    />
  )
}
