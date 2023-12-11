import { Main, MainFirst, MainSecond, Links } from './style'
import { Container, LeftContentFirst, RightContentFirst, InternalLeft, Seta1 } from './style'
import { RightSecond, LeftSecond, FirstChild, SecondChild, Meuresumo } from './style'
import GirlAndCat from '../assets/design girl bro.svg'
import CurriculoImage from '../assets/ReadCvLogo.png'
import setaDireitaImage from '../assets/ArrowRight.svg'
import imagemPrincipal from '../assets/imagem principal da mao com pc.svg'
import SetaParaBaixo from '../assets/Graphic.svg'
import pythonicon from '../assets/python icon.svg'
import jsicon from '../assets/js icon.svg'
import reacticon from '../assets/react icon.svg'
import tailwindicon from '../assets/tailwind icon.svg'
import nodeicon from '../assets/node icon.svg'
import { MainThird } from '../components/CardProjects'
import { MainFor } from '../components/CardContact'

function Home () {
 return (
  <>
   <Container>
    <Main>
     <MainFirst>
     <LeftContentFirst>
     <InternalLeft>
     <h1>Olá, eu sou o Diogo</h1>
      <h2>Desenvolvedor Fullstack</h2>
      <p>Com 2 anos de experiência em Desenvolvimento web. Sou especialista em desenvolvimento
        de websites responsivos com React e Node.
      </p>
      <Links>
       <a href="#" id="first_button">
        <img src={CurriculoImage}/>
        Meu resumo
       </a>
       <a href="#" id="second_button">
        Entrar em contato
        <img src={setaDireitaImage}/>
       </a>
       <Seta1>
        <img src={SetaParaBaixo} id="imagem_setaprabaixo"/>
       </Seta1>
      </Links>
     </InternalLeft>
     </LeftContentFirst> 
     <RightContentFirst>
      <img src={imagemPrincipal}/>
     </RightContentFirst>
     </MainFirst>
 
     <MainSecond>
      <RightSecond>
       <img src={GirlAndCat}/>
      </RightSecond>
      <LeftSecond>
       <FirstChild>
        <img src={jsicon}/>
        <img src={reacticon}/>
        <img src={nodeicon}/>
        <img src={tailwindicon}/>
        <img src={pythonicon} />
       </FirstChild>
       <SecondChild>
        <p>Sobre mim</p>
        <h2>I’m a passionate software developer looking for my first international oppotunity</h2>
        <h3>Beyond coding, I'm a coffee enthusiast, a cat lover, 
          and a self-taught artist who enjoys spending my free time doodling. 
          I am currently seeking opportunities to bring my skills and enthusiasm to a 
          tech company in the United States or Europe and am excited about the prospect of relocating to pursue new challenges.</h3>
       </SecondChild>
       <Meuresumo>
        <img src={CurriculoImage}/>
        Meu resumo
       </Meuresumo>
      </LeftSecond>
     </MainSecond>
     <MainThird />
     <MainFor/>
    </Main>
   </Container>
  </>
 )
}

export default Home