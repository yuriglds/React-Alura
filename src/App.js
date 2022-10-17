import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';
class App extends Component {

  constructor() {
    super();
    this.notas = [];
    this.state = {
      notas: []
    };
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArayNotas = [...this.state.notas,novaNota];
    const novoEstado = {
      notas:novoArayNotas
    }
    this.notas.push(novaNota);
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
