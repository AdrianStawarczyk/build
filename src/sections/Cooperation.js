import React from 'react'
import styled from 'styled-components'
import img4 from '../assets/tooba.jpeg'
import img5 from '../assets/salesup.jpg'
import img6 from '../assets/worket.jpg'
import img7 from '../assets/coop.jpg'
import Card from '../components/Card'

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
.Wrapper{
    display: grid; 
    grid-template-columns: repeat(auto-fit,
        minmax(15rem, 23rem));
    gap: 5rem;
    justify-content: center;
    margin-bottom: 10%;
}
.card{
    overflow: hidden;
    box-shadow:0 2px 20px #333;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 5px;
    .card-img{
    height: 12rem;
    width: 100%;
    margin-left: 0;
    object-fit: cover;
    }
    .card-title{
        margin:0;
        font-size: 1.1rem;
        line-height: 2rem;
        font-weight: 600;
        padding: 1rem;
    }
    .card-description{
        padding: 1rem;
        text-align: center;
    }
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
            Wsp????praca
        </Title>
        <img src={img7} alt='Cooperation' className='wall-img'/>
        <h2>W Homeeer jeste??my otwarci na podj??cie wsp????pracy z producentami materia????w budowlnaych, 
            architektami czy sk??adami budowlanymi.            <br /><br />
            W zamian oferujemy: 
        </h2>
         {
         /* <div className='LeftRight'>
          
            <Left>
                <h3>
                    Zwi??kszenie sprzeda??y poprzez udost??pnienie swoich produkt??w. 
                    <br /><br /><br /><br />
                </h3>
                <h3>
                    Ponad 120 000 ods??on miesi??cznie.
                </h3>
                <br/><br/>
                <p>
                    Dzi??ki rewolucyjnemu podej??ciu do budowy domu, Tw??j produkt ma szanse zosta?? rozreklamowany ponad milionowi potencjalnych klient??w! <br/><br/>
                </p>
                <br/><br/>
                <img src={img6} alt='Cooperation' className='wall-img'/>
                <br/><br/>
                <h3>
                    Wspo??praca z tooba.pl.
                </h3>
                <br/><br/>
                <p>
                    Dzia??amy razem z tooba.pl, co przek??ada si?? na blisko 10 000 sprzedanych projekt??w dom??w ka??dego roku,
                    projekt??w w kt??rych mo??e by?? uwzgl??dniony w??a??nie Tw??j produkt!
                </p>
                <br/><br/>
                
                
            </Left>
            <Right>
                <h3>                   
                    Redukcja koszt??w marketingowych.<br /><br />
                </h3>
                <img src={img5} alt='Cooperation' className='wall-img'/>
                <br /><br />
                <h3>
                    Poszerzenie us??ug dzi??ki serwisowi posprzeda??owemu. 
                    Dost??p do obs??ugi serwisowej WORKET:<br /><br />
                </h3>
                <br/><br/>
                <p>
                    - dost??p do zlece??,<br/>
                    - prosty system sk??adania ofert bazuj??cy na kilku klikni??ciach,<br/>
                    - bezp??atny dost??p, prowizj?? pobieramy po zrealizowanym zleceniu!<br/></p>
                <br/><br/>
            </Right>
            </div>
  */}
        

        <div className='Wrapper'>
            <Card 
            img  = {img5} 
            title="Zwi??kszenie sprzeda??y"
            description="Poprzez udost??pnienie swoich produkt??w w naszym
             serwisie b??d?? one dost??pne dla ponad 1 miliona os??b odwiedzaj??cych."
            />
            <Card
            img  = {img4}
            title="Wspo??praca z tooba.pl."
            description="Dzia??amy razem z tooba.pl, 
            co przek??ada si?? na 10 000 sprzedanych projekt??w dom??w ka??dego roku, 
            w kt??rych mog?? by?? zawarte Twoje produkty!"
            />
            <Card 
            img = {img6}
            title=" 
            Dost??p do obs??ugi serwisowej WORKET"
            description=" 
            Poszerzenie us??ug, dzi??ki prostemu systemowi sk??adania ofert, 
            bazuj??cego na kilku klikni??ciach WORKET, 
            zagwarantuje bezp??atny dost??p do zlece??.
           "
            />
        </div>
    </Section>
  )
}

export default Cooperation