import styled from 'styled-components'

import Img from 'gatsby-image'

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Image = styled(Img)`
  margin: 15px;
  flex: 33%;

  @media screen and (max-width: 900px) {
    flex: 50%;
  }
`

export { ImagesContainer, Image }
