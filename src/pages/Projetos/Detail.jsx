import { Container, PaiCards, Left, Right } from './style'
import { FirstButton, SecondButton, Return, SecondLeft, First, FirstLeft, FirstFirst } from './style'
import { Footer } from '../../components/Footer'
import setaLeft from '../../assets/ArrowRight.svg'
import setaLeftUp from '../../assets/ArrowUpRight.svg'
import GlobeSimple from '../../../src/pages/Projetos/img/GlobeSimple.svg'
import GithubLogo from '../../assets/logo-github 1.svg'
import ReturnImage from '../../assets/ArrowLeft.svg'
import ExemploImage from '../../assets/Rectangle 277.svg'
import PythonIcon from '../../assets/python icon.svg'
import TailwindIcon from '../../assets/tailwind icon.svg'

export const Detail = () => {
  return (
    <>
     <Container>
      <PaiCards>
       <Left>
        <FirstLeft>
         <Return to="/">
          <img src={ReturnImage}/>
         </Return>
        <img src={ExemploImage}/>
        </FirstLeft>
        <SecondLeft>
         <FirstFirst>
          <p>Jul - Dec 2022</p> 
          <First>
           <img src={PythonIcon}/>
           <img src={TailwindIcon}/>
         </First>
         </FirstFirst>
         <h2>Feedback Widget</h2>
         <h3><span>My role:</span> Desenvolvedor fullstack</h3>
         <h3><span>Team:</span> Marcus Souza (PM), Ilana Mallak (UX/UI Designer)</h3>
         <p>We improved our CSAT from 4.4 to 4.8 after analysing custumer feedback provided on our product trought this widget. 
          I worked as the main developer of this features implementing the front-end using Tailwind and a Data Viz dashboard
          using Python to follow-up customer feedback and improve data analysis. 
          The main challenge was to create a flexible structure that could be used as an API across all our company web applications.
         </p>
        </SecondLeft>
       </Left>
       <Right>
        <h2>Dê uma olhada nesse projeto</h2>
        <FirstButton target='_blank'>
         <img src={GlobeSimple}/>
          Demonstração
         <img src={setaLeftUp}/>
        </FirstButton>
        <SecondButton target='_blank'>
         <img src={GithubLogo}/>
          Código
         <img src={setaLeftUp}/>
        </SecondButton>
       </Right>
      </PaiCards>
     </Container>
    </>
  )
}