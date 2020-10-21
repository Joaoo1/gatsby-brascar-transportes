import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  background-color: var(--primary-color);
  color: white;

  .logo-container {
    p {
      width: 240px;
      text-align: center;
    }
  }
`;

const Container = styled.div`
  
`;

export { FooterContainer, Container}
