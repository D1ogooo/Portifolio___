import { useState, useEffect } from 'react'
import { Container, HeaderStyle } from './style'
// import { FirstHeader, SecondHeader, ImageHeaderSecond } from './style'
import { HeaderDefault } from '../HeaderDefault/index'
import { MobilleHeader } from '../HeaderMobille/index'
import { Logo } from './style'

export const Header = () => {
 const [state, setState] = useState(window.innerWidth)

 useEffect(() => {
  const handleResize = () => {
   setState(window.innerWidth)
  }
  window.addEventListener('resize', handleResize);
 },[])

 return (
  <>
   {state > 1000 ? <HeaderDefault/> : <MobilleHeader/>}
  </>
 )
}