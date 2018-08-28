import React, { Component } from 'react'
const infos = require('./dados.json')

class RightContainer extends Component {
    render() {
        return (
            <div className="w3-twothird">
                <Experciencias props={infos.experiencias}></Experciencias>
                <div className="w3-container w3-card-2 w3-white">
                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Formação</h2>
                    <div className="w3-container">
                        <h5 className="w3-opacity"><b>Universidade Luterana do Brasil</b></h5>
                        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />2015 - <span className="w3-tag w3-teal w3-round">Atualmente</span></h6>
                        <p>Bacharel em Ciência da Computação</p>
                        <hr />
                    </div>
                </div>
            </div>
        )
    }
}

const Experciencias = ({ props }) => {
    return (
        <div className="w3-container w3-card-2 w3-white w3-margin-bottom">
            <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Experiência de Trabalho</h2>

            {props.map((value, index) => {
                return (
                    <div key={index} className="w3-container">
                        <h5 className="w3-opacity"><b>{value.cargo}</b></h5>
                        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />{value.dtInicio} - {value.dtFim != "" ? value.dtFim : <span className="w3-tag w3-teal w3-round">Atualmente</span>} </h6>
                        <p>{value.descricao}</p>
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default RightContainer