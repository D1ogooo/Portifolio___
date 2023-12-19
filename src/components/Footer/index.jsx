import { FooterStyle, Right, LeftFooter } from './style'
import ArrowUp from '../../assets/ArrowUp.png'

export const Footer = () => {
  return (
   <>
    <FooterStyle>
     <Right>
      <p>feito por Diogo maçal</p>
     </Right>
      <LeftFooter>
       <a href="#">Github</a>
       <a href="#">LinkedIn</a>
       <a href="#">Instagram</a>
       <img src={ArrowUp}/>
      </LeftFooter>
    </FooterStyle>
   </>
  )
}