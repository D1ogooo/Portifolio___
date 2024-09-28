import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
 width: 90%;
 margin: 0 auto;
`

export const PaiCards = styled.div`
 display: flex;
 justify-content: center;
 flex-wrap: wrap;
 align-items: start;
 gap: 1.5rem;
 margin-top: 2rem;

 @media (max-width: 62.5rem) { //Tablet
  margin-bottom: 2rem;
 }
`

export const Left = styled.section`
 display: flex;
 flex-direction: column;
`

export const Right = styled.section`

 
 h2 {
 color: ${({ theme }) => theme.Text_Colors.text_primary};
 font-family: 'Heebo';
 font-size: 1.25rem;
 font-style: normal;
 font-weight: 500;
 line-height: 160%;
 }

 background-color: ${({ theme }) => theme.Surface_Colors.surface_primary};
 border-radius: 1rem;
 display: flex;
 width: 24rem;
 padding: 2rem;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 1.5rem;
`

export const FirstButton = styled.a`
 cursor: pointer;
 border: none;
 border-radius: 0.5rem;
 background-color: #8A42DB;
 display: flex;
 flex: 1 0 0;
 min-width: 7rem;
 max-width: 20rem;
 padding: 1rem 1.5rem;
 justify-content: center;
 align-items: center;
 gap: 0.5rem;
 align-self: stretch;
 text-decoration: none;
 color: #F5F6F6;
 text-align: center;
 font-family: 'Heebo';
 font-size: 1rem;
 font-style: normal;
 font-weight: 500;
 line-height: 150%;
`

export const FirstFirst = styled.div`
 width: 100%;
 display: flex;
 img {
  width: 30px;
  height: 30px;
 }

 svg {
  width: 30px;
  height: 30px;
 }

 p {
  width: 100%;
 }
`

export const SecondButton = styled.a`
 cursor: pointer;
 text-decoration: none;
 border: none;
 border-radius: 0.5rem;
 background-color: ${({ theme }) => theme.Surface_Colors.surface_background};
 display: flex;
 min-width: 7rem;
 padding: 1rem 1.5rem;
 justify-content: center;
 align-items: center;
 gap: 0.5rem;
 align-self: stretch;
 color: ${({ theme }) => theme.Text_Colors.text_primary};
 text-align: center;
 font-family: 'Heebo';
 font-size: 1rem;
 font-style: normal;
 font-weight: 500;
 line-height: 150%;
`

export const SecondLeft = styled.div`
 @media (max-width: 62.5rem) { // Tablet
  width: 40rem;
  height: 28.25rem;
 }

 @media (max-width: 568px) { // Celular iphone 5
  width: 24rem;
  height: 40rem;
 }

 margin-top: -1.27rem;
 border-radius: 0px 0px .5rem .5rem;
 align-self: stretch;
 background-color: ${({ theme }) => theme.Surface_Colors.surface_primary};
 display: flex;
 width: 48rem;
 max-height: 30.375rem;
 overflow-y: auto;
 padding: 1.1875rem 3rem 3rem 3rem;
 flex-direction: column;
 align-items: flex-start;
 gap: 1.5rem;
 
 h2 {
  color: ${({ theme }) => theme.Text_Colors.text_primary};
  font-family: 'Heebo';
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 125%;
 }
 
 h3 {
  color: ${({ theme }) => theme.Text_Colors.text_secondary};
  font-family: 'Heebo';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 400;
  line-height: 180%;
 }

 span {
  color: ${({ theme }) => theme.Text_Colors.text_secondary};
  font-family: 'Heebo';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 180%;
 }

p {
 color: ${({ theme }) => theme.Text_Colors.text_secondary};
 font-family: 'Heebo';
 font-size: 1.125rem;
 font-style: normal;
 font-weight: 400;
 line-height: 2rem;
}
`

export const First = styled.div`
 width: 100%;
 display: flex;
 gap: 1rem;
 justify-content: end;
 
 p {
 text-align: start;
 color: ${({ theme }) => theme.Text_Colors.text_secondary};
 font-family: 'Heebo';
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: 150%;
 }
`

export const FirstLeft = styled.div`
 margin: 0 auto;
 width: 100%;
 
 @media (max-width: 62.5rem) { // Tablet
  width: 40rem;
  height: 21.25rem;
  margin-top: 50px;
}

 @media (max-width: 568px) { //Celular iphone 5
  width: 100%;
  height: 11.7rem;
 }

 width: 48rem;
 height: 21.25rem;
 img {
  border-radius: .5rem .5rem 0rem 0rem;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
 }
 margin-bottom: 21px;
`

export const Return = styled(Link)`
  &:hover {
   transition: 500ms all;
   box-shadow: 0rem 0rem 3rem 0rem rgba(125, 255, 175, 0.24);
  }

  cursor: pointer;
  border: none;
  margin-left: 0.9375rem;
  margin-top: 0.625rem;
  position: absolute;
  background: none;
  display: flex;
  padding: 0.75rem;
  align-items: flex-start;
  gap: 0.5rem;

  border-radius: 0.5rem;
  background: #171023;
  box-shadow: 0rem 0.5rem 1.5rem 0rem rgba(0, 0, 0, 0.40);

  img {
   width: 1.5rem;
   height: 1.5rem;
  }
 `

export const TechStyle = styled.div`
  display: flex;
  gap: 1rem;
  img {
    width: 50px;
  }

  @media (max-width: 568px) { //Celular iphone 5
   width: 30px;
  }
 `