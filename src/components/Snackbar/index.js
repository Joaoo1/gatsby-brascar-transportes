import React, { useState, useEffect } from 'react';

import { Container } from './styles';

function Snackbar({ msg }) {
  const [isShowingSnackbar, setShowingSnackbar] = useState(false);

  useEffect(() =>{
    console.log(msg, "teste")
    if(msg !== "") {
      setShowingSnackbar(true)

    setTimeout(() => {
      setShowingSnackbar(false)
    }, 3000)
    }
  }, [msg])

  return <Container isShowingSnackbar={isShowingSnackbar}> {msg} </Container>;
}

export default Snackbar;