import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import ListaDeNotas from './components/listaDeNotas/listaDeNotas'

import './Assets/App.css'
import './Assets/index.css'

class App extends Component {
  criarNota(titulo, texto) {
    console.log(`Nota criada ` + titulo + texto)
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota} />
        <ListaDeNotas />
      </section>
    )
  }
}

export default App
