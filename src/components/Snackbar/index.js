import React, { useState, useEffect } from 'react';

import { Container } from './styles';

function Snackbar({ msg }) {
  const [isShowingSnackbar, setShowingSnackbar] = useState(false);

  useEffect(() =>{
    if(msg !== "") {
      setShowingSnackbar(true)

      setTimeout(() => {
        setShowingSnackbar(false)
      }, 5000)
    }
  }, [msg])

  return <Container isShowingSnackbar={isShowingSnackbar}> {msg} </Container>;
}

export default Snackbar;