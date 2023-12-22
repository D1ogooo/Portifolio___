import styled from 'styled-components'

export const Container = styled.div`

 margin: 0 auto;
  
`

export const Main = styled.main`
 
`

export const MainFirst = styled.div`
 margin-top: 6.375rem;
 margin-bottom: .5rem;
 justify-content: space-around;
 display: flex;

 @media (max-width: 62.5rem) { // Tablet
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
 }
`

export const InternalLeft = styled.div`
 display: flex;
 max-width: 37rem;
 min-width: 2rem;
 flex-direction: column;
 align-items: flex-start;
 gap: 2rem;

 @media (max-width: 62.5rem) { // Tablet
  align-items: center;
  h2 {
   display: flex;
   align-items: center ;
   justify-content: center;
  }
  p {
   text-align: center;
  }
 }
`

export const Seta1 = styled.div`
 margin: 0 auto;
 display: flex;
 align-items: center;

 img {
  margin-top: 2rem;
 }

 @media (max-width: 62.5rem) { // Tablet
  display: none;
 }
`

export const LeftContentFirst = styled.section`
  display: flex;
  flex-direction: column;
  padding: 6rem 2rem;
  align-items: center;
  gap: 2rem;
 
 h1 {
  background: var(--brand-gradient-horizontal, linear-gradient(90deg, #9955E8 0%, #7BFFAF 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Kalam';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
 }
 
 h2 {
  align-self: stretch;
  color: ${({ theme }) => theme.Text_Colors.text_primary};
  font-family: 'Heebo';
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 133.333%;
 }

 p {
  align-self: stretch;
  color: ${({ theme }) => theme.Text_Colors.text_secondary};
  font-family: 'Heebo';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

 #first_button {
  display: flex;
  text-decoration: none;
  background: ${({ theme }) => theme.Surface_Colors.surface_secondary};
  min-width: 7rem;
  padding: 1rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  border-radius: .5rem;

  color: ${({ theme }) => theme.Text_Colors.text_primary};
  text-align: center;
  font-family: 'Heebo';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
 }

 #second_button {
  display: flex;
  text-decoration: none;
  background-color: #8A42DB;
  min-width: 7rem;
  padding: 1rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  border-radius: .5rem;

  color: ${({ theme }) => theme.Text_Colors.text_primary};
  text-align: center;
  font-family: 'Heebo';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
 }
`

export const RightContentFirst = styled.section`
 align-items: center;
 display: flex;
 width: 30rem;
  img {
   width: 100%;
   height: auto;
  }

 @media (max-width: 62.5rem) {
  order: -1;
 }
`

export const Links = styled.div`
 display: flex;
 align-items: flex-start;
 gap: 1rem;
`

export const MainSecond = styled.div`
 @media (max-width: 75rem) {
  flex-wrap: wrap;
  margin-bottom: 300px;
  height: 59.9rem;
 }
 
 background-color: #2C243B;
 display: flex;
 align-items: center;
 justify-content: space-around;
 border-radius: 1rem; 
 height: 31.25rem;
 margin-bottom: 3.125rem;
`

export const RightSecond = styled.div`
 img {
  width: 29.6627rem;
  height: 20.916rem;
  flex-shrink: 0;
 } 
`

export const LeftSecond = styled.div`
 display: flex;
 justify-content: space-between;
 flex-direction: column;
 gap: 2rem;
 width: 37rem;
 height: 21.5rem;
`

export const Meuresumo = styled.button`
 display: flex;
 width: 11.875rem;
 padding: 1rem 1.5rem;
 justify-content: center;
 align-items: center;
 gap: 0.5rem;

 border-radius: 0.5rem;
 background: #8A42DB;
 border: none;
 cursor: pointer;

 color: #F5F6F6;
 text-align: center;
 font-family: 'Heebo';
 font-size: 1rem;
 font-style: normal;
 font-weight: 500;
 line-height: 150%;
`

export const FirstChild = styled.div`
 display: flex;
 gap: 1.5rem;
`

export const SecondChild = styled.div`
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 gap: .4rem;
 
 p {
 color: #7DFFAF;
 font-family: 'Kalam';
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: 100%;
 }

h2 {
 color: #F5F6F6;
 font-family: 'Heebo';
 font-size: 1.5rem;
 font-style: normal;
 font-weight: 500;
 line-height: 2rem;
}

h3 {
 color: #CDD0D4;
 font-family: 'Heebo';
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: 150%;
} */
`