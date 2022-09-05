import React from 'react'
import styled from 'styled-components'

import img1 from '../assets/menu.png'
import img2 from '../assets/menu2.png'
import img3 from '../assets/screen.png'

const Section = styled.section`
position: relative;
min-height: 100vh;
width: 100%;
display: flex;
margin: 0 auto;
background-color: ${props => props.theme.body};
@media (max-width: 768px) {
    flex-direction: column-reverse;
    margin: 0;
  }
`

const Title = styled.h1`
font-size: ${props => props.theme.fontBig};
font-family: 'Open Sans', sans-serif;
font-weight: 300;
position: absolute;
justify-content: center;
text-align: center;
top: 2rem;
left: 30%;
z-index: 5;
@media (max-width: 768px) {
    display: flex;  
    flex-direction: column;
    margin-bottom: 20%;
    margin-top: 10%;
    left: 10%;
    justify-content: center;
    text-align: center;
    font-size: 2rem;
  }
`

const Left = styled.div`
width: 50%;
font-size: ${props => props.theme.fontlg};
font-weight: 300;
position: relative;
z-index: 5;
margin-top: 10%;
margin-left: 10%;
padding-right: 5%;
display: flex;
flex-direction: column;
.h2{
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 2rem;
    margin: 0.75rem 0px;
    color: rgba(0,0,0,.85);
}
@media (max-width: 768px) {
    display: flex;  
    flex-direction: column;
    width: 80%;
    text-align: center;
    margin-top: 40%;
    h2{
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 1.5rem;
    margin: 1.5rem 0;
    color: rgba(0,0,0,.85);
    }
  }
 
`

const Right = styled.div`
    width: 50%;
    position: relative;
    margin-right: 10%;
.small-img-3{
    position: absolute;
    width: 50%;
    height: auto;
    left: 65%;
    top: 55%;
}
.small-img-1{
    width: 80%;
    height: auto;
    position: absolute;
    left: 40%;
    bottom: 40%;
}
.small-img-2{
    width: 50%;
    position: absolute;
    left: 15%;
    bottom: 10%;
}
@media (max-width: 768px) {
   display: none;   
    .small-img-2{
   display:none;
}
.small-img-3{
   display: none;
}
.small-img-1{
  display: none;
}
  }

`

const About = () => {
  return (
    <Section id="fixed-target">
        <Title data-scroll data-scroll-speed='-2' data-scroll-direction='horizontal'>
            O Homeeerze
        </Title>
        <Left>
            <h2>
                Czym jest platforma Homeeer?<br/><br/>
            </h2>
            <p>
                Platforma Homeeer ułatwia przepływ informacji między osobą planującą budowę 
                domu a biurami architektonicznymi oferującymi projekty, producentami i 
                dostawcami materiałów budowlanych, wykonawcami budowlanymi. <br/><br/>
                Usprawnia proces realizacji budowy domu poprzez dostarczanie wiarygodnych informacji 
                cenowych i technologicznych, przyczyniając się do świadomego wyboru technologii 
                budowlanych przez inwestora.
                Zapewniamy pełną kontrolę nad budżetem i harmonogramem budowy. Inwestorowi 
                dostarczamy narzędzia pozwalające obniżyć koszt inwestycji oraz zapewniające
                dostęp do najnowszych technologi.<br/><br/>
                Dostawcy materiałów i usług budowlanych otrzymują narzędzia pozwalające na 
                dotarcie z ofertą do indywidualnych inwestorów budowlanych.<br/><br/>
                Naszym celem jest budowanie świadomości inwestorów i pomoc w wyborze 
                rozwiązań zwłaszcza tych pozwalających na obniżenie emisji CO2.
                <br/><br/><br/><br/>
            </p>
        </Left>
        <Right >
            <img
            data-scroll
            data-scroll-speed="2"
            src={img3} alt='About Us' className='small-img-3'/>
            <img 
            data-scroll
            data-scroll-speed="6"
            src={img2} className='small-img-1' alt='About Us' />
            <img 
            data-scroll
            data-scroll-speed="3"    
            src={img1}  alt='About Us' className='small-img-2' />
        </Right>
    </Section>
  )
}

export default About;