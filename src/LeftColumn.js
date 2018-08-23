import React, { Component } from 'react';

class LeftColumn extends Component {
    render() {
        return (
            <div className="w3-third">
                <div className="w3-white w3-text-grey w3-card-4">
                    <div className="w3-display-container">
                        <img src="https://success.salesforce.com/resource/1498435200000/sharedlayout/img/new-user-image-default.png" style={{ width: '100%' }} alt="Avatar" />
                        <div className="w3-display-bottomleft w3-container w3-text-black">
                            <h2>Cassiano Raupp</h2>
                        </div>
                    </div>
                    <div className="w3-container">
                        <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />Desenvolvedor de Sistemas</p>
                        <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />Cachoeirinha, RS</p>
                        <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />cassiano.raupp@outlook.com</p>
                        <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />(51)981276337</p>
                        <hr />
                        <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />Competências</b></p>
                        <p>SQL</p>
                        <div className="w3-light-grey w3-round-xlarge">
                            <div className="w3-round-xlarge w3-teal" style={{ height: 20, width: '90%' }} />
                        </div>
                        <p>HTML</p>
                        <div className="w3-light-grey w3-round-xlarge">
                            <div className="w3-round-xlarge w3-teal" style={{ height: 20, width: '70%' }} />
                        </div>
                        <p>CSS</p>
                        <div className="w3-light-grey w3-round-xlarge">
                            <div className="w3-round-xlarge w3-teal" style={{ height: 20, width: '60%' }} />
                        </div>
                        <p>APS.NET</p>
                        <div className="w3-light-grey w3-round-xlarge">
                            <div className="w3-round-xlarge w3-teal" style={{ height: 20, width: '80%' }} />
                        </div>
                        <br />
                        <p>Java</p>
                        <div className="w3-light-grey w3-round-xlarge">
                            <div className="w3-round-xlarge w3-teal" style={{ height: 20, width: '75%' }} />
                        </div>
                        <br />
                        <p>Oracle</p>
                        <div className="w3-light-grey w3-round-xlarge">
                            <div className="w3-round-xlarge w3-teal" style={{ height: 20, width: '80%' }} />
                        </div>
                        <br />
                        <p>SQL Server</p>
                        <div className="w3-light-grey w3-round-xlarge">
                            <div className="w3-round-xlarge w3-teal" style={{ height: 20, width: '75%' }} />
                        </div>
                        <p>JavaScript</p>
                        <div className="w3-light-grey w3-round-xlarge">
                            <div className="w3-round-xlarge w3-teal" style={{ height: 20, width: '75%' }} />
                        </div>
                        <br />
                        <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" />Idiomas</b></p>
                        <p>Português</p>
                        <div className="w3-light-grey w3-round-xlarge">
                            <div className="w3-round-xlarge w3-teal" style={{ height: 24, width: '100%' }} />
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        )
    }
}

export default LeftColumn