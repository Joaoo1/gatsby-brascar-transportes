import styled from 'styled-components';

const FooterContainer = styled.footer`
 background-color: var(--primary-color);
`
const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 60px 30px 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  color: white;

  .logo-container {
    margin: 25px 20px 0 0;

    p {
      width: 240px;
      text-align: center;
    }
  }

  .half {
    display:flex;
    flex-direction: column;

    div:nth-child(2) {
      margin-top: 30px;
    }
  }

  @media screen and (max-width: 965px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterItem = styled.div`
  margin: 30px 30px 0 30px;
  max-width: 253px;

  .item-header {
    color: var(--footer-font-color);
  }

  .contact-item {
    display:flex;
    align-items: center;

    p{
      margin-right: 10px;
    }
  }

  p {
    line-height: 3;
    font-weight: 300;
  }
`;


export { FooterContainer, Container, FooterItem }
