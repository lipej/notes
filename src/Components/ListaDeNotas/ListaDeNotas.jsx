import { Component } from "react";
import CardNota from "../CardNota";
import "./styles.css"
export default class ListaDeNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.map((nota, index) => {
                    return (
                        <li className="lista-notas_item" key={index}>
                        <CardNota 
                        id={index}
                        apagarNota={this.props.apagarNota}
                        titulo={nota.titulo} 
                        text={nota.text}/>
                    </li>
                    )
                })}
            </ul>

        )
    }
}