import { useState } from 'react'
import { Left , Right , Container, ComentContainer, ButtonMessage, Internal, FirstLeft } from './style'
import SetaDireita from '../../assets/ArrowRight.svg'
import ImageDiogo from '../../assets/imagem diogo.png'
import githubimage from '../../assets/logo_github 1.svg'
import instagramimage from '../../assets/logo_instagram 1.svg'
import linkedinimage from '../../assets/logo_linkedin 1.svg'

export const MainFor = () => {
  const [mensagem, setMensagem] = useState()
  const messageWhatsap = mensagem ? mensagem.split(' ').join('%20') : ''
  
  function handleInputChange (e) {
   setMensagem(e.target.value)
  }

  return (
   <>
    <Container id='contato'>
     <Left>
     <FirstLeft>
     <img src={ImageDiogo}/>
      <h1>Contato</h1>
      <h2>Gostou do meu trabalho? Vamos trabalhar juntos</h2>
      <p>Estou sempre pronto para conversar. Envie-me um e-mail para diiogomarsalcosta@gmail.com ou ligue para mim nas redes sociais. </p>
     </FirstLeft>
      <Internal>
       <a href="https://github.com/D1ogooo" target='_blank' rel="noreferrer">
        <img src={githubimage} alt=""/>
       </a>
       <a href="https://www.instagram.com/diogoo_0202/" target='_blank' rel="noreferrer">
        <img src={instagramimage} alt=""/>
       </a>
       <a href="https://www.linkedin.com/in/diogo-ma%C3%A7al-70a18a2a6/" target='_blank' rel="noreferrer">
        <img src={linkedinimage} alt=""/>
       </a>
      </Internal>
     </Left>
     <Right>
     <ComentContainer placeholder="Sua mensagem" value={mensagem} onChange={handleInputChange}/>
      <ButtonMessage target="_blank" href={`https://wa.me/27988004330/?text=${messageWhatsap}`}>
       Enviar mensagem
      <img src={SetaDireita}/>
      </ButtonMessage>
     </Right>
    </Container>
   </>
  )
}
