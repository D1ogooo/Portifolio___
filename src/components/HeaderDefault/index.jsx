import { FirstHeader, Container, HeaderStyle, Logo } from './style'

export const HeaderDefault = () => {
  return (
  <>
  <HeaderStyle>
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
   </Container>
     </HeaderStyle>
    </>
  )
}