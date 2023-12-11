import { Left , Right , Container, ComentContainer, ButtonMessage, Internal, FirstLeft } from './style'
import SetaDireita from '../../assets/ArrowRight.svg'
import Bg from '../../assets/Bg.png'
import githubimage from '../../assets/logo_github 1.svg'
import linkedinimage from '../../assets/logo_instagram 1.svg'
import instagramimage from '../../assets/logo_linkedin 1.svg'

export const MainFor = () => {
  return (
   <>
    <Container>
     <Left>
     <FirstLeft>
     <img src={Bg}/>
      <h1>Contact</h1>
      <h2>Enjoyed my work? Let's work together</h2>
      <p>I’m always up for a chat. Pop me an email at hi@linalevi.com or give me a shout on social media. </p>
     </FirstLeft>
      <Internal>
       <a href="https://github.com/D1ogooo" target='_blank'>
        <img src={githubimage}/>
       </a>
       <a href="https://www.linkedin.com/in/diogo-maçal-4a31882a1" target='_blank'>
        <img src={instagramimage}/>
       </a>
       <a href="#" target='_blank'>
        <img src={linkedinimage}/>
       </a>
      </Internal>
     </Left>
     <Right>
      <input type="text" placeholder='Name'/>
      <input type="text" placeholder='E-mail'/>
      <ComentContainer placeholder="Sua mensagem"/>
      <ButtonMessage>
       Enviar mensagem
       <img src={SetaDireita}/>
      </ButtonMessage>
     </Right>
    </Container>
   </>
  )
}