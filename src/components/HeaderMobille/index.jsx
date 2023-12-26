import { SecondHeader, ImageHeaderSecond, HeaderStyle, Container, Logo, Central } from './style'
import sumIcon from '../../assets/SunDim.svg'
import HambNormal from '../../assets/MenuHambnormal.svg'
import HambClose from '../../assets/MenuHambclose.svg'
import { useState } from 'react'

export const MobilleHeader = () => {
 const [menu, setMenu] = useState(false)

 return (
  <>
   <HeaderStyle>
    <Container>
     <Logo>
      <p>Diogo<span>Maçal</span></p>
     </Logo>
   <ImageHeaderSecond>
    <img src={menu ? HambClose : HambNormal} id="icon_hamb" onClick={() => setMenu(!menu)}/>
    {menu &&
     <Central>
      <ul>
        <li>
         <a href="#home">Home</a>
        </li>
        <li>
         <a href="#about">About</a>
        </li>
        <li>
         <a href="#projects">Projects</a>
        </li>
        <li>
         <a href="#contato">Contact</a>
        </li>
       {/* <li>
        <a href="#">PT</a>
       </li> 
       <li>
        <img src={sumIcon}/>
       </li>*/}
      </ul>
     </Central>
    } 
   </ImageHeaderSecond>
   </Container>
  </HeaderStyle>
 </>
 )
}