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
       <a href="https://github.com/D1ogooo" target='_blank'>Github</a>
       <a href="https://www.linkedin.com/in/diogo-maçal-4a31882a1" target='_blank'>LinkedIn</a>
       <a href="https://www.instagram.com/diogoo_0202" target='_blank'>Instagram</a>
       <img src={ArrowUp}/>
      </LeftFooter>
    </FooterStyle>
   </>
  )
}