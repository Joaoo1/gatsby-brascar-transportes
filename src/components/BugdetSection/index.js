import React from 'react'

import SectionTitle from '../SectionTitle'
import { Container, Form, Illustration } from './styles'

function BudgetSection() {
  return (
    <section>
      <SectionTitle title="Solicite um orçamento" />
      <Container>
        <Form>
          <div>
            <label htmlFor="name">Nome</label>
            <input id="name" type="text" />
          </div>

          <div>
            <label htmlFor="phone">Telefone</label>
            <input id="phone" type="text" />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" />
          </div>

          <div>
            <label htmlFor="car">Modelo/fabricante do veículo</label>
            <input id="car" type="text" />
          </div>

          <div>
            <label htmlFor="origin">Cidade de origem</label>
            <input id="origin" type="text" />
          </div>

          <div>
            <label htmlFor="destination">Cidade de destino</label>
            <input id="destination" type="text" />
          </div>

          <div>
            <label htmlFor="state">Estado do veículo</label>
            <input id="state" type="text" />
          </div>

          <div>
            <label htmlFor="value">Valor do veículo</label>
            <input id="value" type="text" />
          </div>

          <div className="button">
            <button>Solicitar orçamento</button>
          </div>
        </Form>
        <Illustration />
      </Container>
    </section>
  )
}

export default BudgetSection
