import { useState } from 'react'
import {
  CardPai,
  Card,
  FooterCard,
  HeaderCard,
  TitleProjects,
  PaiButtonCard,
  CardImage,
  CardsAparecer,
  SubContainer,
  CarouselViewport
} from './style'

import { DataProjects } from '../../pages/Projetos/data'
import SetaParaOLado from '../../assets/ArrowRight.svg'

export const MainThird = () => {
  const [index, setIndex] = useState(0)

  const cardWidth = 384 + 32 // largura do card + gap (2rem)
  const maxIndex = DataProjects.length - 1

  function handleNext() {
    setIndex(prev => (prev < maxIndex ? prev + 1 : 0))
  }

  function handlePrev() {
    setIndex(prev => (prev > 0 ? prev - 1 : maxIndex))
  }

  return (
    <>
      <TitleProjects id="projects">
        <h2>Projetos</h2>
        <p>Dê uma olhada nos meus projetos em destaque</p>
      </TitleProjects>

      <SubContainer>
        <CarouselViewport>
        <CardPai style={{ transform: `translateX(-${index * cardWidth}px)` }}>
          {DataProjects.map(info => (
            <Card to={`/projects/${info.id}`} key={info.id}>
              <CardImage>
                <img src={info.img} id="first_image" />
              </CardImage>

              <CardsAparecer />

              <HeaderCard>
                <div>
                  {info.tech.map((tech, i) => (
                    <img src={tech.image} key={i} />
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
        </CarouselViewport>
      </SubContainer>

      <PaiButtonCard>
        <a className="seta_left" onClick={handlePrev}>
          <span className="text">Voltar</span>
          <span className="icon">
            <img src={SetaParaOLado} />
          </span>
        </a>

        <a className="seta_right" onClick={handleNext}>
          <span className="text">Ver mais</span>
          <span className="icon">
            <img src={SetaParaOLado} />
          </span>
        </a>
      </PaiButtonCard>
    </>
  )
}
