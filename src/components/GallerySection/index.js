import { StaticQuery, graphql } from 'gatsby'
import React from 'react'

import SectionTitle from '../SectionTitle'
import { ImagesContainer, Image as Img } from './styles'

function GallerySection({ id }) {
  const graphqlQuery = graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "images/gallery" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 600, maxHeight: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `
  return (
    <StaticQuery
      query={graphqlQuery}
      render={data => (
        <section>
          <div className="anchor" id={id} />
          <SectionTitle title="Galeria" />
          <ImagesContainer>
            {data.allFile.edges.map(n => {
              const fluid = n.node.childImageSharp.fluid
              return <Img 
                        key={fluid.src}
                        fluid={fluid}
                        imgStyle={{ borderRadius: '10px' }} />
            })}
          </ImagesContainer>
        </section>
      )}
    />
  )
}

export default GallerySection
