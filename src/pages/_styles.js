import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SectionContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 50px;

  section {
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 500px) {
    margin: 50px 30px;
  }
`

export { SectionContainer, Container }
