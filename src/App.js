import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import ListaDeNotas from './components/listaDeNotas/listaDeNotas'
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias'
import Categorias from './dados/Categorias'
import ArrayDeNotas from './dados/Notas'

import './Assets/App.css'
import './Assets/index.css'

export default class App extends Component {
  constructor() {
    super()
    this.categorias = new Categorias()
    this.notas = new ArrayDeNotas()
    //notas: []
    //categorias: ['Música', 'Trabalho']
  }

  /*criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }*/

  /* adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = { ...this.state, categorias: novoArrayCategorias }
    this.setState(novoEstado)
  }

  deletarNota(index) {
    let arrayNotas = this.state.notas
    arrayNotas.splice(index, 1)
    console.log('deletar')
    this.setState({ notas: arrayNotas })
  }*/

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.criarNota}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(
              this.categorias
            )}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota}
            notas={this.notas.notas}
          />
        </main>
      </section>
    )
  }
}
