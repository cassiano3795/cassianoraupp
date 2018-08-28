import React, { Component } from 'react'
import Imagem from './Imagem'
import LeftContainer from './LeftContainer'

class LeftColumn extends Component {
    render() {
        return (
            <div className="w3-third">
                <div className="w3-white w3-text-grey w3-card-4">
                    <Imagem></Imagem>
                    <LeftContainer></LeftContainer>
                </div>
            </div>
        )
    }
}

export default LeftColumn