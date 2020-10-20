import React from 'react';

import { BottomLine } from './styles';

function SectionTitle({ title }) {
  return (
    <div>
      <h1>{ title }</h1>
      <BottomLine />
    </div>);
}

export default SectionTitle;