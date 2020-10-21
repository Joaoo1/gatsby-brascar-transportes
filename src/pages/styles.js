import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SectionContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 60px 80px;
  padding: 0 15px;

  section {
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 620px) {
    margin: 40px 30px;
  }
`;

export { SectionContainer, Container }
