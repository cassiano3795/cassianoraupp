import React, { Component } from 'react'
const infos = require('./dados.json')

class Imagem extends Component {
    render() {
        return (
            <div className="w3-display-container">
                <img src={infos.imagem} style={{ width: '100%' }} alt="Avatar" />
                <div className="w3-display-bottomleft w3-container w3-text-white">
                    <h2>Cassiano Raupp</h2>
                </div>
            </div>
        )
    }
}

export default Imagem