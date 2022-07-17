import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ButtonSection from './ButtonSection'
import SensorValues from './SensorValues'
import StopButton from './StopButton'

const Container = styled.div`
  width : 95vw;
  height: 96vh;
  background-color: #2f00ff;
  margin : 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
`

const Right = styled.div`
  width : 45%;
  height : 90%;
  background-color: #e8e8e8;
  margin : 8px;
  border-radius: 15px ;
  display: flex;
  justify-content: space-around;
  align-items: center ;
  flex-direction: column;
`
const Left = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  width : 45%;
  height : 90%;
  background-color: #e8e8e8;
  margin : 8px;
  border-radius: 15px ;
  flex-direction: column;
`
const Title = styled.h1`
  font-size : 70px;
  text-align: center ;
  margin-bottom :10px ;
`


export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      temp : 10,
      nitrates : 10,
      nitrites : 10,
      pH : 'neutre',
      water : 'full'
    }
  }
  componentDidMount(){
    this.timerID = setInterval(
      () => this.updateValue(),
      1000
    )
  }
  componentWillUnmount(){
    clearInterval(this.timerID)
  }
  updateValue(){
    axios.get('http://localhost:3001/api-hackathon/values', 
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
      responseType: "json",}
      )
        .then(response => {
          console.log(response.data)
          this.setState({ 
          vidange : response.data.vidange,
          aliment : response.data.aliment,
          temp : response.data.temp,
          nitrates : response.data.nitrates,
          nitrites : response.data.nitrites,
          pH : response.data.pH,
          stop : response.data.stop,
          water : response.data.water,
         })})
    
  }
  render() {
    return (
      <Container>
      <Left>

        {/* temperature */}
        <SensorValues src = 'https://i.ibb.co/YkGnNbd/tempIcon.jpg' titre = 'Temperature' value = {this.state.temp} units = '°C' couleur = '#fff'/>
        {/* Nitrates */}
        <SensorValues src = 'https://i.ibb.co/QCx3RCJ/kisspng-carbon-hydrogen-atom-molecule-chemistry-hydrogen-5ae011fc0a8555-2452251615246341080431.png' titre = 'Nitrates' value = {this.state.nitrates} units = 'g/mol/m3' couleur = 'yellowGreen'/>
        {/* Nitrites */}
        <SensorValues src = 'https://i.ibb.co/QCx3RCJ/kisspng-carbon-hydrogen-atom-molecule-chemistry-hydrogen-5ae011fc0a8555-2452251615246341080431.png' titre = 'Nitrites' value = {this.state.nitrites} units = 'g/mol/m3' couleur = 'Green'/>
        {/* ph */}
        <SensorValues src = 'https://i.ibb.co/bHgwfhV/t-l-chargement.png' titre = 'pH' value = {this.state.pH} units = 'none' couleur = '#006aff'/>
        {/* niveau d'eau */}
        <SensorValues src = 'https://i.ibb.co/VM0csbr/drop-simple-transparentpng-image-water-drop-logo-11562911481murprhiazy.png' titre = {'Niveau d\'eau'} value = {this.state.water ? 'Full' : 'Empty'} units = 'none' couleur = 'aqua' />
      </Left>
      <Right>
        <Title>CONTROL PANEL</Title>
        <ButtonSection titre ={'Rechange d\'eau'} button = 'Vidange/Recharge' butType = {1} vidange = {this.state.vidange}/>
        <ButtonSection titre ={'Distribuer l\'aliment'} button = 'Alimenter' butType = {2} aliment = {this.state.aliment}/>
        <StopButton stop = {this.state.stop}/>
      </Right>
      
    </Container>
    )
  }
}
