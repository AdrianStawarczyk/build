import React from 'react'
import styled from 'styled-components'
import img4 from '../assets/coop.jpg'
import img5 from '../assets/costred.png'
import img6 from '../assets/media.png'

const Section = styled.section`
position: relative;
min-height: 100vh;
width: 100%;
display: flex;
flex-direction: column;
margin: 0 auto;
background-color: ${props => props.theme.body};
img{
    width: 80vw;
    margin-left: 10%;
    margin-right: 10%;
    height: 100vh;
}
h2{
    font-family: 'Open Sans', sans-serif;
    justify-content: center;
    text-align: center;
    font-size: 2.3rem;
    font-weight: 400;
    margin: 5rem 10rem;
    line-height: 3.5rem;
    color: #333;
}
.LeftRight{
    display: flex;
    flex-direction: row;
}
@media (max-width: 768px) {
    flex-direction: column;
    margin: 0 0;
        .LeftRight{
            display: flex;
            flex-direction: column;
        }
        img{
            width: 100%;
            margin:0;
            height: 20%;
        }
        h2{
            font-family: 'Open Sans', sans-serif;
            justify-content: center;
            text-align: center;
            font-size: 1.3rem;
            font-weight: 400;
            margin: 1rem 1rem;
            line-height:    1.5rem;
            color: #333;
            margin-top: 20%;
        }
}
`
const Title = styled.h1`
font-size: ${props => props.theme.fontBig};
font-family: 'Open Sans', sans-serif;
font-weight: 300;
position: absolute;
justify-content: center;
text-align: center;
top: 15%;
left: 35%;
z-index: 5;
color: #f2f2f2;
text-shadow: 2px 2px #222;
@media (max-width: 768px) {
    position: relative;
    display: flex;  
    flex-direction: column;
    top: 10rem;
    left: 0%;
    justify-content: center;
    text-align: center;
    color: #f2f2f2;
    text-shadow: 2px 2px #222; 
    display: flex;  
    flex-direction: column;

    
    justify-content: center;
    text-align: center;
    font-size: 3rem;
  }
`

const Left = styled.div`
width: 50%;
font-size: ${props => props.theme.fontlg};
font-weight: 300;
position: relative;
z-index: 5;
margin-top: 2rem;
margin-left: 10%;
padding-right: 5%;
display: flex;
flex-direction: column;
.h3{
    font-family: "Open Sans";
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 1rem;
    margin: 0.75rem 0px;
    color: rgba(0,0,0,.85);
}
img{
    width: 100%;
    margin-left: 0;

    height: auto;
}
@media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 80%;
  }
`

const Right = styled.div`
    width: 50%;
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    position: relative;
    z-index: 5;
    margin-top: 2rem;
    margin-left: 5%;
    padding-right: 10%;
    display: flex;
    flex-direction: column;
.h3{
    font-family: "Open Sans";
    font-weight: 300;
    font-size: 1.3rem;
    line-height: 2rem;
    margin: 0.75rem 0px;
    color: rgba(0,0,0,.85);
}
img{
    width: 100%;
    margin-left: 0%;
    height: auto;
}
@media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 80%;
    margin-left: 10%;
}
`


const Cooperation = () => {
  return (
    <Section>
        <Title data-scroll data-scroll-speed='-2' data-scroll-direction='horizontal'>
            Współpraca
        </Title>
        <img src={img4} alt='Cooperation' className='wall-img'/>
        <h2>W Homeeer jesteśmy otwarci na podjęcie współpracy z producentami materiałów budowlnaych, 
            architektami czy składami budowlanymi.            <br /><br />
            W zamian oferujemy: 
        </h2>
        <div className='LeftRight'>
            <Left>
                <h3>
                    Zwiększenie sprzedaży poprzez udostępnienie swoich produktów tysiącom potencjalnych klientów. 
                    <br /><br /><br /><br />
                </h3>
                <h3>
                    Ponad 120 000 odsłon miesięcznie.
                </h3>
                <br/><br/>
                <p>
                    Dzięki rewolucyjnemu podejściu do budowy domu, Twój produkt ma szanse zostać rozreklamowany ponad milionowi potencjalnych klientów! <br/><br/>
                </p>
                <br/><br/>
                <img src={img6} alt='Cooperation' className='wall-img'/>
                <br/><br/>
                <h3>
                    Wspołpraca z tooba.pl.
                </h3>
                <br/><br/>
                <p>
                    Działamy razem z tooba.pl, co przekłada się na blisko 10 000 sprzedanych projektów domów każdego roku,
                    projektów w których może być uwzględniony właśnie Twój produkt!
                </p>
                <br/><br/>
                
                
            </Left>
            <Right>
                <h3>                   
                    Redukcja kosztów marketingowych.<br /><br />
                </h3>
                <img src={img5} alt='Cooperation' className='wall-img'/>
                <br /><br />
                <h3>
                    Poszerzenie usług dzięki serwisowi posprzedażowemu. 
                    Dostęp do obsługi serwisowej WORKET:<br /><br />
                </h3>
                <br/><br/>
                <p>
                    - dostęp do zleceń,<br/>
                    - prosty system składania ofert bazujący na kilku kliknięciach,<br/>
                    - bezpłatny dostęp, prowizję pobieramy po zrealizowanym zleceniu!<br/></p>
                <br/><br/>
            </Right>
        </div>
    </Section>
  )
}

export default Cooperation