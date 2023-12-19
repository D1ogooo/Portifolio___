import { useRef } from 'react'
import { CardPai, Card, FooterCard, HeaderCard, TitleProjects, ButtonCard, PaiButtonCard, ButtonCardTwo } from './style'
import { CardsAparecer } from './style'
import DevLinksImage from '../../assets/Project image delinks.svg'
import SetaParaOLado from '../../assets/ArrowRight.svg'
import JsImage from '../../assets/js icon.svg'
import ReactImage from '../../assets/react icon.svg'

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
    <TitleProjects>
     <h2>Projects</h2>
     <p>Take a look at my highlighted projects</p>
    </TitleProjects>

   <CardPai ref={cardPai}>
    <Card to='/projects/1'>
     <img src={DevLinksImage}/>ac
     <CardsAparecer>
      <a href="#"></a>
      <a href="#"></a>
     </CardsAparecer>
      <HeaderCard>
       <p>Jul - Dec 2022</p>
      <div>
       <img src={JsImage}/>
       <img src={ReactImage}/>
      </div>
      </HeaderCard>
      <FooterCard>
       <h1>DevLinks</h1>
       <p>A link agragator for social media</p>
      </FooterCard>
     </Card>
  
    <Card to='/projects/2'>
      <img src={DevLinksImage}/>
     <CardsAparecer>
      <a href="#"></a>
      <a href="#"></a>
     </CardsAparecer>
      <HeaderCard>
       <p>Jul - Dec 2022</p>
      <div>
       <img src={JsImage}/>
       <img src={ReactImage}/>
      </div>
      </HeaderCard>
      <FooterCard>
       <h1>DevLinks</h1>
       <p>A link agragator for social media</p>
      </FooterCard>
    </Card>

    <Card to='/projects/3'>
     <img src={DevLinksImage}/>
      <CardsAparecer>
      <a href="#"></a>
      <a href="#"></a>
     </CardsAparecer>
      <HeaderCard>
       <p>Jul - Dec 2022</p>
      <div>
       <img src={JsImage}/>
       <img src={ReactImage}/>
      </div>
      </HeaderCard>
      <FooterCard>
       <h1>DevLinks</h1>
       <p>A link agragator for social media</p>
      </FooterCard>
    </Card>
    <Card to='/projects/3'>
     <img src={DevLinksImage}/>
      <CardsAparecer>
      <a href="#"></a>
      <a href="#"></a>
     </CardsAparecer>
      <HeaderCard>
       <p>Jul - Dec 2022</p>
      <div>
       <img src={JsImage}/>
       <img src={ReactImage}/>
      </div>
      </HeaderCard>
      <FooterCard>
       <h1>DevLinks</h1>
       <p>A link agragator for social media</p>
      </FooterCard>
    </Card>
    <Card to='/projects/3'>
     <img src={DevLinksImage}/>
      <CardsAparecer>
      <a href="#"></a>
      <a href="#"></a>
     </CardsAparecer>
      <HeaderCard>
       <p>Jul - Dec 2022</p>
      <div>
       <img src={JsImage}/>
       <img src={ReactImage}/>
      </div>
      </HeaderCard>
      <FooterCard>
       <h1>DevLinks</h1>
       <p>A link agragator for social media</p>
      </FooterCard>
    </Card>
   </CardPai>

   <PaiButtonCard> 
   <ButtonCard id='seta_left' onClick={handleLeftClick}>
    <img src={SetaParaOLado} />
    Voltar
   </ButtonCard>

   <ButtonCardTwo onClick={handleRightClick}>
    Ver mais
    <img src={SetaParaOLado} />
   </ButtonCardTwo>
  </PaiButtonCard>
 </>
 )
}