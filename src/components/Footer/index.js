import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { FooterContainer } from './styles';

function Footer() {
  const graphqlQuery = graphql`
  query {
    file(relativePath: { eq: "images/footer-logo.png" }) {
      childImageSharp  {
        fixed(width: 240, height: 160) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }`


  return (
     <StaticQuery
      query={graphqlQuery}
      render={data => (
        <FooterContainer>
          <div class="logo-container">
            <Img fixed={data.file.childImageSharp.fixed} />
            <p>Transportando seu veículo com agilidade e segurança</p>
          </div>
        </FooterContainer>
      )} />
  );
}

export default Footer;