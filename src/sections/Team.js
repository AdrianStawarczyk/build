import React from 'react'
import styled from 'styled-components'

import img7 from '../assets/who.jpg'
import img8 from '../assets/u.jpg'

const Title = styled.h1`
color: ${props => props.theme.body};
font-size: ${props => props.theme.fontBig};
font-family: 'Open Sans', sans-serif;
font-weight: 300;
position: relative;
justify-content: center;
text-align: center;
top: 3rem;
left:0%;
z-index: 5;
@media (max-width: 768px) {
    display: flex;  
    flex-direction: column;
    margin-bottom: 20%;
    margin-top: 10%;
    
    justify-content: center;
    text-align: center;
    font-size: 2rem;
  }
`
const Section = styled.section`
position: relative;
min-height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
margin: 0 auto;
background-color: #333333;
.LeftRightWrapp{
  display: flex;
  flex-direction: row;
}
@media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    .LeftRightWrapp{
  display: flex;
  flex-direction: column;
}
 
  }

`

const Left = styled.div`
width: 50%;
font-size: ${props => props.theme.fontlg};
font-weight: 300;
position: relative;
z-index: 5;
margin-top: 5rem;
margin-left: 5%;
padding-right: 0%;
display: flex;
flex-direction: column;
 p{
     font-size: ${props => props.theme.fontlg};
     width: 80%;
     color: ${props => props.theme.body};
     margin: 0 auto;
 }
 img{
    width: 100%;
    margin-left: 0%;
    height: auto;
 }
 @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin-left: 0;
    padding-right: 0;
  }
`
const Right = styled.div`
    width: 50%;
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    position: relative;
    z-index: 5;
    color: #edf0f4;
    margin-top: 5rem;
    margin-left: -6%;
    padding-right: 0%;
    display: flex;
    flex-direction: column;
p{
     font-size: ${props => props.theme.fontlg};
     width: 80%;
     color: ${props => props.theme.body};
     margin: 0 auto;
 }
 img{
    width: 100%;
    margin-left: 0%;
    height: auto;
}
@media (max-width: 768px) {
  flex-direction: row;
    justify-content: center;
    text-align: center;
    width: 100%;
    margin-left: 0;
    padding-right: 0;
  }
`




const Team = () => {
   
  return (
    <Section>
        <Title data-scroll data-scroll-speed='-2' data-scroll-direction='horizontal'>
            Kim jesteśmy? 
            <br></br>
         
        </Title>
        <div className='LeftRightWrapp'>
          <Left>

            <p>
            Jesteśmy zgranym zespołem projektantów, programistów pracujących razem od wielu lat nad tworzeniem i wdrażaniem zaawansowanych webowych systemów informatycznych, wspomagających pracę przedsiębiorstw. Naszą specjalizacją są dedykowane systemy usprawniające specyficzne procesy biznesowe.
            <br></br>
            <br></br>
           
            <img src={img7} alt='Teams' className='team-img'/>
            <br></br>
            <br></br>
            Podczas realizacji platformy Homeeer współpracowaliśmy ściśle z architektami, firmami projektowymi, producentami materiałów budowlanych i dostawcami usług budowlanych.
            <br></br>
            <br></br>  
            <br></br>
            <br></br>
            </p>
            </Left>
            
            <Right> 
        
            <p>
            <img src={img8} alt='Teams' className='team-img'/>
                    
            <br></br>
            <br></br>
            System Homeeer powstał w ramach projektu pod nazwą „Przeprowadzenie badań i stworzenie inteligentnego środowiska doradczo-analitycznego konsolidującego wymianę doświadczeń branżowych i wspomagającego zarządzanie budową energooszczędnych i ekologicznych inwestycji w oparciu o innowacyjne algorytmy” dofinansowanego w ramach działania 1.2 Działalność badawczo-rozwojowa przedsiębiorstw, Regionalnego Programu Operacyjnego Województwa Mazowieckiego na lata 2014-2020.
            <br></br>
            <br></br>
            </p>
          </Right>
       </div>
    </Section>
  )
}

export default Team