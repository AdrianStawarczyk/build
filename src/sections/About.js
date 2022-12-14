import React from 'react'
import styled from 'styled-components'

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
top: 3rem;
left: 30%;
z-index: 5;
@media (max-width: 768px) {
  display: flex;  
    flex-direction: column;
    margin-bottom: 20%;
    margin-top: 15%;
    left: none;
    justify-content: center;
    text-align: center;
    font-size: 2rem;
    left: 5%;
  }
 


`

const Left = styled.div`
width: 50%;
font-size: ${props => props.theme.fontlg};
font-weight: 300;
position: relative;
z-index: 5;
margin-top: 15%;
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
    margin-top: 0%;
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
    position: relative;
    width: 100%;
    height: auto;
    left: 5%;
    top: 30%;
    margin-bottom: 40%;
}

@media (max-width: 768px) {
    
  width: 100%;
.small-img-3{
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
                Platforma Homeeer u??atwia przep??yw informacji mi??dzy osob?? planuj??c?? budow?? 
                domu a biurami architektonicznymi oferuj??cymi projekty, producentami i 
                dostawcami materia????w budowlanych, wykonawcami budowlanymi. <br/><br/>
                Usprawnia proces realizacji budowy domu poprzez dostarczanie wiarygodnych informacji 
                cenowych i technologicznych, przyczyniaj??c si?? do ??wiadomego wyboru technologii 
                budowlanych przez inwestora.
                Zapewniamy pe??n?? kontrol?? nad bud??etem i harmonogramem budowy. Inwestorowi 
                dostarczamy narz??dzia pozwalaj??ce obni??y?? koszt inwestycji oraz zapewniaj??ce
                dost??p do najnowszych technologi.<br/><br/>
                Dostawcy materia????w i us??ug budowlanych otrzymuj?? narz??dzia pozwalaj??ce na 
                dotarcie z ofert?? do indywidualnych inwestor??w budowlanych.<br/><br/>
                Naszym celem jest budowanie ??wiadomo??ci inwestor??w i pomoc w wyborze 
                rozwi??za?? zw??aszcza tych pozwalaj??cych na obni??enie emisji CO2.
                <br/><br/><br/><br/>
            </p>
        </Left>
        <Right >
            <img
          
            src={img3} alt='About Us' className='small-img-3'/>
          
        </Right>
    </Section>
  )
}

export default About;