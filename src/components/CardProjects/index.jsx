import { CardPai, Card, FooterCard, HeaderCard, TitleProjects, ButtonCard } from './style'
import { CardsAparecer } from './style'
import DevLinksImage from '../../assets/Project image delinks.svg'
import SetaParaOLado from '../../assets/ArrowRight.svg'
import JsImage from '../../assets/js icon.svg'
import ReactImage from '../../assets/react icon.svg'

export const MainThird = () => {
  return (
   <>
    <TitleProjects>
     <h1>Projects</h1>
     <p>Take a look at my highlighted projects</p>
    </TitleProjects>

    <CardPai>
     <Card>
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
     {/* border: 1.5px solid var(--color-stroke-stroke-highlight, #7DFFAF);
  background: ${({ theme }) => theme.Surface_Colors.surface_primary};
  box-shadow: 0rem 0rem 3rem 0rem rgba(125, 255, 175, 0.24); */}
     <Card>
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

     <Card>
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

    <ButtonCard>
      Ver mais
     <img src={SetaParaOLado}/>
    </ButtonCard>
   </>
  )
}