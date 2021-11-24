import React, { Component } from 'react';
import "./estilo.css"
export default class ListaDeCategorias extends Component {
  render() { 
    return (
      <section className="lista-categorias">
      <ul className="lista-categorias_lista">
        <li className="lista-categorias_item">categorias</li>
        <li className="lista-categorias_item">categorias</li>
        <li className="lista-categorias_item">categorias</li>
      </ul>
      <input type="text" className="lista-categorias_input"></input>
      </section>
      );
  }
}
 
