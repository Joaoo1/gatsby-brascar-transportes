import styled from 'styled-components';

const Container = styled.div`
  .reverse {
    flex-direction:row-reverse;
  }
 
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    margin: 4rem 0.5rem;
    padding: 0;
} 
`;

const ServiceContainer = styled.div`
    display: flex;  
    align-items: center;
    justify-content: space-between;

    img {
      border-radius: 10px;
    }

    @media screen and (max-width: 900px) {
        display: block;

        div, img {
          margin: 0 auto;
        }
        
    }
`;

const ServiceInfo = styled.div`
  width: 80%;
  margin: 0 20px 0 20px;
`;

export { Container, ServiceContainer, ServiceInfo }
