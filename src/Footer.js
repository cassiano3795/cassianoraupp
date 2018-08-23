import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="w3-container w3-teal w3-center w3-margin-top">
                <p>Encontre-me nas Rede Sociais.</p>
                <a href="https://www.facebook.com/csraupp" target="_blank"><i className="fa fa-facebook-official w3-hover-opacity" /></a>
                <a href="https://www.instagram.com/rauppcs/?hl=pt-br" target="_blank"><i className="fa fa-instagram w3-hover-opacity" /></a>
                <a href="https://www.linkedin.com/in/cassiano-raupp-50a6a9133/" target="_blank"><i className="fa fa-linkedin w3-hover-opacity" /></a>
            </footer>
        )
    }
}

export default Footer