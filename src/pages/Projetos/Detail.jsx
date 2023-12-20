import { useLocation } from 'react-router-dom'
import { Container, PaiCards, Left, Right } from './style'
import { FirstButton, SecondButton, Return, SecondLeft, First, FirstLeft, FirstFirst } from './style'
import { Footer } from '../../components/Footer'
import { DataProjects } from './data'
import setaLeft from '../../assets/ArrowRight.svg'
import setaLeftUp from '../../assets/ArrowUpRight.svg'
import GlobeSimple from '../../../src/pages/Projetos/img/GlobeSimple.svg'
import GithubLogo from '../../assets/logo-github 1.svg'
import ReturnImage from '../../assets/ArrowLeft.svg'
import ExemploImage from '../../assets/Rectangle 277.svg'
import PythonIcon from '../../assets/python icon.svg'
import TailwindIcon from '../../assets/tailwind icon.svg'

export const Detail = () => {
  const location = useLocation();
  const stateValue = location.search;
 
  return (
    <>
     <Container>
      {DataProjects.map((info) => (
      <PaiCards key={stateValue}>
       <Left>
        <FirstLeft>
         <Return to="/">
          <img src={ReturnImage}/>
         </Return>
        <img src={info.img}/>
        </FirstLeft>
        <SecondLeft>
         <FirstFirst>
          <p>Jan - Dec 2023</p> 
         <First>
          <img src={info.tech.image}/>
         </First>
         </FirstFirst>
         <h2>{info.title}</h2>
         <h3><span>My role:</span> Desenvolvedor fullstack</h3>
         <h3><span>Team:</span> Marcus Souza (PM), Ilana Mallak (UX/UI Designer)</h3>
         <p>{info.text}
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
       ))}
     </Container>
    </>
  )
}