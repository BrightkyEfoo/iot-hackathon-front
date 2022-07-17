import React , {Component}from 'react'
import styled from 'styled-components'

const Logo = styled.img`
    height : 45px;
    aspect-ratio: 1/1;
    border-style : none;
    border-radius: 50% ;
    object-fit: cover;
    background-color: #fff;
    padding : 3px;
    @media (max-width: 420px) {
        height : 30px;
      }
`
const Title = styled.div`
    font-weight : 600;
    font-size : 30px;
    @media (max-width: 420px) {
        font-size : 20px;
      }
`
const Valeur = styled.div`
    font-weight : 700;
    font-size : 35px;
    @media (max-width: 420px) {
        font-size : 25px;
      }
`
const Unite = styled.div`
    font-weight : 500;
    font-size : 25px;
    @media (max-width: 420px) {
        font-size : 15px;
      }
`
const Container = styled.div`
    border-width : 1.5px;
    border-radius : 18px;
    background-color: #1d2ad9ea;
    height : 70px;
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin: 15px 0;
    padding: 5px 20px;
    color: black;
    @media (max-width: 420px) {
        border-width : 1.5px;
        border-radius : 10px;
        background-color: #1d2ad9ea;
        height : 50px;
        display: flex;
        width: 80%;
        margin: 10px 0;
        padding: 5px 15px;
      }
`
class SensorValues extends Component {
  constructor() {
    super();
    this.state = { checked: false };
  }
  
  render() {
    return (
    <Container style={ {backgroundColor : this.props.couleur}}>
        <Logo src={this.props.src} alt =''/>
        <Title>{this.props.titre}</Title>
        <Valeur>{this.props.value}</Valeur>
        {
            this.props.units!=='none' ? <Unite>{this.props.units}</Unite>:''
        }
    </Container>
  )
  }
}


export default SensorValues