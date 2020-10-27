import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { FiClock, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { TiContacts } from 'react-icons/ti'
import { MdLockOutline } from 'react-icons/md'

import { FooterContainer, Container, FooterItem } from './styles'

function Footer({ id }) {
  const graphqlQuery = graphql`
    query {
      footerLogo: file(relativePath: { eq: "images/footer-logo.png" }) {
        childImageSharp {
          fixed(width: 240, height: 160) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      insuranceLogo: file(relativePath: { eq: "images/insurance-logo.png" }) {
        childImageSharp {
          fixed(width: 150, height: 38) {
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
        <FooterContainer>
          <Container>
            <div className="logo-container">
              <Img fixed={data.footerLogo.childImageSharp.fixed} />
              <p>Transportando seu veículo com agilidade e segurança</p>
            </div>

            <FooterItem>
              <div className="item-header">
                <FiClock size={32} />
                <h3>Horário de funcionamento</h3>
              </div>
              <p>De segunda a sexta das 8h às 18h</p>
              <p>Sábado das 8h às 12h</p>
            </FooterItem>

            <div className="half">
              <FooterItem>
                <div className="item-header">
                  <FiMapPin size={28} />
                  <h3>Localização</h3>
                </div>
                <p>Rua indiana nº 78, Passa-vinte, Palhoça - SC</p>
              </FooterItem>

              <FooterItem>
                <div className="item-header">
                  <MdLockOutline size={32} />
                  <h3>Seguradora</h3>
                  <Img fixed={data.insuranceLogo.childImageSharp.fixed} />
                </div>
              </FooterItem>
            </div>

            <FooterItem>
              <div className="anchor" id={id} />
              <div className="item-header">
                <TiContacts size={36} />
                <h3>Contatos</h3>
              </div>
              <p>brascar@brascartransportes.com</p>
              <a href="https://www.instagram.com/brascar_transportes">
                <div className="contact-item">
                <p>@brascar_transportes</p>
                <FaInstagram size={20} />
                </div>
              </a>
              
              <a href="https://api.whatsapp.com/send?phone=5548991875244">
                <div className="contact-item">
                  <p>(48) 99187-5244 </p>
                  <FaWhatsapp size={20} />
                </div>
              </a>
              <p>Respondemos 24h por dia pelo whatsapp</p>
            </FooterItem>
          </Container>
        </FooterContainer>
      )}
    />
  )
}

export default Footer
