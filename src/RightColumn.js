import React, { Component } from 'react'

class RightColumn extends Component {
    render() {
        return (
            <div className="w3-twothird">
                <div className="w3-container w3-card-2 w3-white w3-margin-bottom">
                    <h2 className="w3-text-grey w3-padding-16"><i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />Experiência de Trabalho</h2>
                    <div className="w3-container">
                        <h5 className="w3-opacity"><b>Desenvolvedor .Net / Luedtke Assessoria Industrial Ltda</b></h5>
                        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Ago 2017 - <span className="w3-tag w3-teal w3-round">Atualmente</span></h6>
                        <p>Desenvolvimento de aplicações .Net utilizando o ASP.Net MVC 5, aplicando DDD, principios SOLID e fazendo uso de frameworks como: Entity Framework, Bootstrap e Jquery.</p>
                        <hr />
                    </div>
                    <div className="w3-container">
                        <h5 className="w3-opacity"><b>Desenvolvedor de Sistemas / AllTrade System Informatica</b></h5>
                        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Dez 2016 - Ago - 2017</h6>
                        <p>Auxilio no desenvolvimento de scripts SQL, manutenção de sistemas ERP e desenvolvimento de aplicações web na plataforma ASP.NET. </p>
                        <hr />
                    </div>
                    <div className="w3-container">
                        <h5 className="w3-opacity"><b>Analista de Sistemas / Lojas Quero-Quero/SA</b></h5>
                        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Mar 2015 - Dez 2016</h6>
                        <p>Suporte de sistema e manutenção da solução, analise, levantamento de requisitos, mapeamento de processos e realização de modelagem de dados, com objetivo de manter operante os sistemas.</p>
                        <hr />
                    </div>
                    <div className="w3-container">
                        <h5 className="w3-opacity"><b>Operador de Help-Desk / Lojas Quero-Quero/SA</b></h5>
                        <h6 className="w3-text-teal"><i className="fa fa-calendar fa-fw w3-margin-right" />Fev 2014 - Mar 2015</h6>
                        <p>Atendimento e direcionamento de chamados na área de TI, relacionados à microinformática, sistemas comerciais, sistemas operacionais e dúvidas de usuários.
            </p><br />
                    </div>
                </div>
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

export default RightColumn