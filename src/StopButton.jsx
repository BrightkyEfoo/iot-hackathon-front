import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
const Button = styled.button`
    width : 90%;
    height: 50px;
    font-weight: 600;
    color : white;
    font-size : 40px;
    font-family: 'Josefin Sans', sans-serif;
    background-color: red;
    border-style: none ;
    border-radius : 15px;
`
export class StopButton extends Component {
  handleChange(e){
    e.preventDefault()
    axios.post('http://localhost:3001/api-hackathon/stop',{
      stop:true
    })
  }
  render() {
    let color = ''
    let texte = ''
    if(this.props.stop){
      texte = 'START'
      color = 'lightgreen'
    }else{
      texte = 'STOP'
      color = 'red'
    }
    return (
      <Button style={{backgroundColor : color}} onClick = {(e)=>this.handleChange(e)}>
        {texte}
      </Button>
    )
  }
}

export default StopButton