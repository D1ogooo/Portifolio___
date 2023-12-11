import { CardPai, Card, FooterCard, HeaderCard, TitleProjects, ButtonCard } from './style'
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
      <HeaderCard>
      <p>Jul - Dec 2022</p>
      </HeaderCard>
      <FooterCard>
       <h1>DevLinks</h1>
       <p>A link agragator for social media</p>
      </FooterCard>
     </Card>

     <Card>
     <img src={DevLinksImage}/>
      <HeaderCard>
      <p>Jul - Dec 2022</p>

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