import React, { useState } from 'react'

import SectionTitle from '../SectionTitle'
import Snackbar from '../Snackbar'

import { Container, Form, Illustration } from './styles'

function BudgetSection({ id }) {

  const [snackbarMessage, setSnackbarMessage] = useState("")
  
  function submitForm(e) {
    e.preventDefault();
    setSnackbarMessage("Formulário enviado com sucesso!")
    /*
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        
      } else {
        setSnackbarMessage("Erro ao enviar, entre em contato pelo whatsapp ou email!")
      }
    };
    xhr.send(data);*/
  }

  return (
    <section>
      {
        snackbarMessage != "" ? <Snackbar msg={snackbarMessage} /> : null
      }
      <div className="anchor" id={id} />
      <SectionTitle title="Solicite um orçamento" />
      <Container>
        <Form
           onSubmit={submitForm}
           //action="https://getform.io/f/35f785fc-d477-4f95-b193-722b19728c54"
           method="POST"
        >
          <div>
            <label htmlFor="name">Nome</label>
            <input id="name" type="text" name="Nome do cliente"/>
          </div>

          <div>
            <label htmlFor="phone">Telefone</label>
            <input id="phone" type="text" name="Telefone"/>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" name="E-mail"/>
          </div>

          <div>
            <label htmlFor="car">Modelo/fabricante do veículo</label>
            <input id="car" type="text" name="Modelo/fabricante do veículo"/>
          </div>

          <div>
            <label htmlFor="origin">Cidade de origem</label>
            <input id="origin" type="text" name="Cidade de origem"/>
          </div>

          <div>
            <label htmlFor="destination">Cidade de destino</label>
            <input id="destination" type="text" name="Cidade de destino"/>
          </div>

          <div>
            <label htmlFor="status">Estado do veículo</label>
            <input id="status" type="text" name="Estado do veículo"/>
          </div>

          <div>
            <label htmlFor="value">Valor do veículo</label>
            <input id="value" type="text" name="Valor do veículo"/>
          </div>

          <div className="button">
            <button type="submit">Solicitar orçamento</button>
          </div>
        </Form>
        <Illustration />
      </Container>
    </section>
  )
}

export default BudgetSection
