import React, { Component } from "react";
import styled from 'styled-components'
import axios from 'axios'

const Title = styled.div`
    font-size:35px ;
    @media (max-width: 420px) {
      font-size : 25px;
    }
`
const Button = styled.button`
    font-size:40px ;
    border-radius : 10px;
    background-color : lightgray ;
    border-style:none;
    padding : 10px 25px;
    margin : 5px;
    font-family: 'Josefin Sans', sans-serif;
    cursor : pointer;
    transition : all ease 300ms;
    &:hover{
      background-color:lightgreen ;
    }
    @media (max-width: 420px) {
      margin:10px 2px;
      font-size : 30px;
      border-radius : 10px;
      padding : 10px 5px;
    }
    
`
const Container = styled.div`
    font-size:40px ;
    margin: 15px;
`
class ButtonSection extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e,type) {
    e.preventDefault()
    let jsonPost = {}
    let url = ''
    if(type === 1){
      this.setState({...this.state,color1 : 'lightgreen'})
      url = `https://iot-hackathon-server.herokuapp.com/api-hackathon/vidange`
      jsonPost = {
        vidange : true
      }
    }else if(type === 2){
      this.setState({...this.state,color2 : 'lightgreen'})
      url = `https://iot-hackathon-server.herokuapp.com/api-hackathon/aliment`
      jsonPost = {
        aliment : true
      }
    }
    console.log(type)
    axios.post(url,jsonPost)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      
    
  }

  render() {
    let color1 = 'lightgray'
    let color2 = 'lightgray'
    let text2 = ''
    let text1 = ''
    if(this.props.aliment){
      color2 = 'lightgreen'
      text2 = 'Nutrition en cours ...'
    }else{
      color2 = 'lightgray'
      text2 = 'Alimentation'
    }
    if(this.props.vidange){
      color1 = 'lightgreen'
      text1 = 'Changement de l\'eau '
    }else{
      color1 = 'lightgray'
      text1 = 'Vidange/Recharge'
    }
    return (
        <Container>
            <Title>{this.props.titre}</Title>
            <Button style = {{ backgroundColor : this.props.butType === 1 ? color1 : color2 }} onClick={(e)=>this.handleChange(e,this.props.butType)}>
                {this.props.butType === 1? text1 : text2}
            </Button>
        </Container>
    );
  }
}

export default ButtonSection