import React, { Component } from 'react';
import "./styles.css"
import deleteSVG from "../../assets/img/delete.svg"
export default class CardNota extends Component {
    state = {}
    render() {
        return (
            <section className="card-nota">
                <header className="card-nota_cabecalho">
                    <h3 className="card-nota_titulo">{this.props.titulo}</h3>
                    <img src={deleteSVG}/>
                </header>
                <p className="card-nota_texto">{this.props.text}</p>
            </section>
        );
    }
}