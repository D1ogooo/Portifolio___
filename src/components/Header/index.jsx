import { useState } from 'react'
import { Container, HeeaderStyle } from './style'
import { FirstHeader, SecondHeader, ImageHeaderSecond } from './style'
import { Logo } from './style'
import sumIcon from '../../assets/SunDim.svg'
import HambNormal from '../../assets/MenuHambnormal.svg'
import HambClose from '../../assets/MenuHambclose.svg'

export const Header = () => {
  const [menu, setMenu] = useState(false)

  return (
   <>
    <HeeaderStyle>
     <Container>
       <Logo>
        <p>Diogo<span>Maçal</span></p>
       </Logo>

     <FirstHeader>
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
        {/*<li>
         <a href="#">PT</a>
        </li>
         <li>
         <img src={sumIcon}/>
        </li> */}
       </ul>
     </FirstHeader>

     <ImageHeaderSecond onClick={() => setMenu(!menu)}>
      <img src={menu ? HambClose : HambNormal} id="icon_hamb"/>
     <SecondHeader>
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
    </SecondHeader>
     </ImageHeaderSecond>
      </Container>
     </HeeaderStyle>
   </>
  )
}