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

export const SubContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-around;
`

export const FooterCard = styled.div`
  width: 360px;
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
  
  h3 {
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

 div {
  display: flex;
  gap: .5rem;
  margin-top: 10px;
  margin-bottom: 10px;

  img {
   width: 2rem;
   height: 2rem;
  }
 }
`
export const CardPai = styled.div`
  display: flex;
  gap: 2rem;
  width: 384px;
  transition: transform 0.4s ease;
  will-change: transform;
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
 padding: 1.9rem;
 flex-direction: column;
 width: 384px;
 height: 344px;
 align-items: flex-start;
 align-self: stretch;
 border-radius: 1rem;
 background-color: #2C243B;
`

export const ButtonCard = styled.button`
 display: flex;
 align-items: flex-start;
 gap: 1rem;

 .seta_left {
  width: 7rem;
  padding: 1rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  margin-top: 1.2rem;
  border-radius: .5rem;
  background-color: ${({ theme }) => theme.Surface_Colors.surface_secondary};
 }

 img {
  transform: scaleX(-1);
 }

 .text {
  color: ${({ theme }) => theme.Text_Colors.text_primary};
  text-align: center;
  font-family: 'Heebo';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
 }

 @media (max-width: 62.5rem) {
  .seta_left .text{
   display: none;
  }

  .second_button .text {
   display: none;
  }


  .seta_left .text {
    margin: auto;
  }

  .seta_left .text{
    margin: auto;
  }
}
`

export const PaiButtonCard = styled.div`
 display: flex;
 justify-content: center;
 gap: 2rem;
 
 :first-child img {
  transform: scaleX(-1);
 }

 .seta_left,.seta_right {
  margin-top: 1.2rem;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  min-width: 2rem;
  padding: 1rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.Surface_Colors.surface_secondary};
  border-radius: .5rem;
 }

 .text {
  color: ${({ theme }) => theme.Text_Colors.text_primary};
  text-align: center;
  font-family: 'Heebo';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
 }

 @media (max-width: 62.5rem) {
  .seta_left .text{
   display: none;
  }

  .seta_right .text {
   display: none;
  }

  .seta_left .text {
    margin: auto;
  }

  .seta_right .text{
    margin: auto;
  }
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

export const CardImage = styled.section`
 margin: 0 auto;

 #first_image{
  width: 100%;
  height: 176px;
  border-radius: 0.3125rem;
 }
`

export const CardsAparecer = styled.div``

export const CarouselViewport = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: calc(384px * 3 + 2rem * 2);

  @media (max-width: 900px) {
    max-width: calc(384px * 2 + 2rem);
  }

  @media (max-width: 600px) {
    max-width: 384px;
  }
`
