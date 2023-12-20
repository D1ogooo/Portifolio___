import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const TitleProjects = styled.h1`
display: flex;
align-items: center;
gap: .2rem;
flex-direction: column;

 h2 {
 text-align: center;
 color: #7DFFAF;
 font-family: 'Kalam';
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: 100%;
 }

 p {
  margin-bottom: .8rem;
  align-self: stretch;
  color: #F5F6F6;
  text-align: center;
  font-family: 'Heebo';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2rem;
 }
`

export const FooterCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  
  p {
   overflow: hidden;
   color: #F5F6F6;
   text-overflow: ellipsis;
   font-family: 'Heebo';
   font-size: 1rem;
   font-style: normal;
   font-weight: 400;
   line-height: 150%;
  }
  
  h1 {
   color: #F5F6F6;
   font-family: 'Heebo';
   font-size: 1.25rem;
   font-style: normal;
   font-weight: 500;
   line-height: 120%;
  }
`
 
export const HeaderCard = styled.div`
 display: flex;
 gap: 12.3rem;

 p {
  color: ${({ theme }) => theme.Text_Colors.text_secondary};
  font-family: 'Heebo';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 171.429%;
 }
`

export const CardPai = styled.div`
 width: 72%;
 overflow-x: auto;
 overflow: hidden;
 scroll-behavior: smooth;
 margin: 0 auto;
 display: flex;
 gap: 2rem;
`

export const Card = styled(Link)`
 &:hover {
  transition: 500ms all;
  border: 0.0938rem solid #7dffaf;
  background: ${({ theme }) => theme.Surface_Colors.surface_primary};
  box-shadow: 0rem 0rem 3rem 0rem rgba(125, 255, 175, 0.24);
 }

 text-decoration: none;
 display: flex;
 padding: 1.5rem;
 flex-direction: column;
 align-items: flex-start;
 gap: .5rem;
 align-self: stretch;
 border-radius: 1rem;
 background-color: #2C243B;
 height: 21.5rem;

 #first_image{
  width: 100%;
  height: 31.25rem;
  border-radius: 0.3125rem;
 }
`

export const ButtonCard = styled.button`
 display: flex;
 align-items: center;
 
 margin-top: 1.2rem;
 border-radius: .5rem;
 cursor: pointer;
 color: ${({ theme }) => theme.Text_Colors.text_primary};
 background-color: ${({ theme }) => theme.Surface_Colors.surface_secondary};
 font-family: 'Heebo';
 min-width: 7rem;
 padding: 1rem 1.5rem;
 justify-content: center;
 align-items: center;
 gap: 0.5rem;
 border: none;

 img {
  transform: scaleX(-1);
 }
`

export const ButtonCardTwo = styled.button`
 display: flex;
 align-items: center;

 margin-top: 1.2rem;
 border-radius: .5rem;
 cursor: pointer;
 color: ${({ theme }) => theme.Text_Colors.text_primary};
 background-color: ${({ theme }) => theme.Surface_Colors.surface_secondary};
 font-family: 'Heebo';
 min-width: 7rem;
 padding: 1rem 1.5rem;
 justify-content: center;
 align-items: center;
 gap: 0.5rem;
 border: none;
`

export const PaiButtonCard = styled.div`
 display: flex;
 justify-content: center;
 gap: 2rem;
`

export const CardsAparecer = styled.div`

`
