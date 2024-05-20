import { useRef } from 'react'
import { CardPai, Card, FooterCard, HeaderCard, TitleProjects, PaiButtonCard } from './style'
import { CardsAparecer, CardImage } from './style'
import { SubContainer }from './style'
import { DataProjects } from '../../pages/Projetos/data'
import PrimeiraPagina from '../../pages/Projetos/img/primeiro projeto.png'
import DevLinksImage from '../../assets/Project image delinks.svg'
import SetaParaOLado from '../../assets/ArrowRight.svg'
import JsImage from '../../assets/js icon.svg'
import ReactImage from '../../pages/Projetos/img/react icon.svg'

export const MainThird = () => {
  const cardPai = useRef(null)

  function handleLeftClick (e) {
   if(cardPai.current) {
    e.preventDefault()
    cardPai.current.scrollLeft -= cardPai.current.offsetWidth;
   }
  }
 
  function handleRightClick (e) {
   if(cardPai.current) {
    e.preventDefault()
    cardPai.current.scrollLeft += cardPai.current.offsetWidth;
   }
  }

  return (
  <>
   <TitleProjects id='projects'>
    <h2>Projetos</h2>
    <p>Dê uma olhada nos meus projetos em destaque</p>
   </TitleProjects>
   
   <SubContainer>
   <CardPai ref={cardPai}>
    {DataProjects.map((info) => (
    <Card to={`/projects/${info.id}`} key={info.id}>
     <CardImage>
      <img src={info.img} id='first_image'/>
     </CardImage>
     <CardsAparecer>
      <a href="#" target='_blank'></a>
      <a href="#" target='_blank'></a>
     </CardsAparecer>
      <HeaderCard>
      <div>
       {info.tech.map((tech) => (
        <img src={tech.image} key={info.id}/>
       ))}
      </div>
      </HeaderCard>
      <FooterCard>
       <h3>{info.title}</h3>
       <p>{info.principalText}</p>
      </FooterCard>
     </Card>
    ))}
   </CardPai>
  </SubContainer>

   <PaiButtonCard> 
    <a className='seta_left' onClick={handleLeftClick}>
     <span className='text'>Voltar</span>
     <span className='icon'>
      <img src={SetaParaOLado} />
     </span>
    </a>

    <a className='seta_right' onClick={handleRightClick}>
    <span className='text'>Ver mais</span>
    <span className='icon'>
     <img src={SetaParaOLado} />
    </span>
    </a>
  </PaiButtonCard>


 </>
 )
}