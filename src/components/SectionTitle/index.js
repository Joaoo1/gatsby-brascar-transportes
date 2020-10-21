import React from 'react';

import { BottomLine, Container } from './styles';

function SectionTitle({ title }) {
  return (
    <Container>
      <h1>{ title }</h1>
      <BottomLine />
    </Container>);
}

export default SectionTitle;