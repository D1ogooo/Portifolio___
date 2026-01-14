import { FooterStyle, Right, LeftFooter } from './style'
import ArrowUp from '../../assets/ArrowUp.png'

export const Footer = () => {
  return (
   <>
    <FooterStyle id="footer">
     <Right>
      <p>feito por Diogo maçal</p>
     </Right>
      <LeftFooter>
       <a href="https://github.com/D1ogooo" target='_blank' rel="noreferrer">Github</a>
       <a href="https://www.linkedin.com/in/diogo-maçal-4a31882a1" target='_blank' rel="noreferrer">LinkedIn</a>
       <a href="https://www.instagram.com/diogoo_0202" target='_blank' rel="noreferrer">Instagram</a>
       <a href="#"><img src={ArrowUp}/></a>
      </LeftFooter>
    </FooterStyle>
   </>
  )
}