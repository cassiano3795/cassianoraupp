import React, { Component } from 'react'
// import { dados} from './dados.json'
const infos = require('./dados.json')

class LeftContainer extends Component {
    render() {
        return (
            <div className="w3-container">
                {infos.dados.map((value, index) => {
                    return (
                        <Info key={index} props={value}></Info>
                    )
                })}
                <hr />

                <p className="w3-large"><b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal" />Competências</b></p>
                {infos.competencias.sort((a, b) => {
                    return b.width - a.width;
                }).map((value, index) => {
                    return (
                        <Competencias key={index} props={value}></Competencias>
                    )
                })}

                <br />
                {/* <p className="w3-large w3-text-theme"><b><i className="fa fa-globe fa-fw w3-margin-right w3-text-teal" />Idiomas</b></p>
                {infos.idiomas.sort((a, b) => {
                    return b.width - a.width;
                }).map((value, index) => {
                    return (
                        <Idiomas key={index} props={value}></Idiomas>
                    )
                })} */}
                <br />
            </div>
        )
    }
}

const Info = ({ props }) => {
    return (
        <p><i className={`fa fa-${props.icone} fa-fw w3-margin-right w3-large w3-text-teal`} />{props.value}</p>
    )
}

const Competencias = ({ props }) => {
    return (
        <div style={{paddingBottom: 10, width: "50%", float: "left"}}>
            <img style={{borderRadius: 10}} src={props.urlLogo} width="40px" height="40px"></img>
            <span style={{paddingLeft: 10}}>{props.value}</span>
        </div>

    )
}

const Idiomas = ({ props }) => {
    return (
        <div style={{paddingBottom: 10, width: "50%", float: "left"}}>
            <img style={{paddingRight: 10}} src={props.urlLogo} width={40}></img>
            <span>{props.value}</span>
        </div>
    )
}

export default LeftContainer