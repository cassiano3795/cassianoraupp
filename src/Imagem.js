import React, { Component } from 'react'

class Imagem extends Component {
    render() {
        return (
            <div className="w3-display-container">
                <img src="https://success.salesforce.com/resource/1498435200000/sharedlayout/img/new-user-image-default.png" style={{ width: '100%' }} alt="Avatar" />
                <div className="w3-display-bottomleft w3-container w3-text-black">
                    <h2>Cassiano Raupp</h2>
                </div>
            </div>
        )
    }
}

export default Imagem