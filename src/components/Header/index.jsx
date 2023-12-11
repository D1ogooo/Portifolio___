import { Container, HeeaderStyle } from './style'
import { Logo } from './style'
import sumIcon from '../../assets/SunDim.svg'

export const Header = () => {
  return (
   <>
    <HeeaderStyle>
     <Container>
       <Logo>
        <p>Diogo<span>Maçal</span></p>
       </Logo>

       <ul>
        <li>
         <a href="#">Home</a>
        </li>
        <li>
         <a href="#">About</a>
        </li>
        <li>
         <a href="#">Projects</a>
        </li>
        <li>
         <a href="#">Contact</a>
        </li>
        <li>
         <a href="#">PT</a>
        </li>
        <li>
         <img src={sumIcon}/>
        </li>
       </ul>
      </Container>
     </HeeaderStyle>
   </>
  )
}