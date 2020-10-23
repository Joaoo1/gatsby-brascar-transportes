import styled from 'styled-components'

const Container = styled.div`
  .reverse {
    flex-direction: row-reverse;

    @media screen and (max-width: 900px) {
      flex-direction: column;
    }
  }

  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    margin: 2rem 0.5rem;
    padding: 0;
  }
`

const ServiceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  .image-container {
    width: 100%;
    max-width: 380px;
    max-height: 200px;
  }

  img {
    border-radius: 10px;
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;

    > div {
      margin: 20px 0;
    }
  }
`

const ServiceInfo = styled.div`
  width: 70%;
  margin: 0 20px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

export { Container, ServiceContainer, ServiceInfo }
