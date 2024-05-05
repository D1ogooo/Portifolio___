import styled from 'styled-components'

export const Container = styled.div`
 width: 100%;
 margin: 0 auto;
 display: flex;
 justify-content: space-between;
 align-items: center;

 ul {
  display: flex;
  gap: .5rem;
 }

 li {
  display: flex;
  align-items: center;
  list-style: none;
  width: 3.6875rem;
  height: 2.5rem;
  img {
   cursor: pointer;
  }
 }

 a {
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  color: ${({ theme }) => theme.Text_Colors.text_secondary};
  font-family: 'Heebo';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
 }
`

export const FirstHeader = styled.div`
 @media (max-width: 62.5rem) { // Tablet
  display: none;
 }
`

export const ImageHeaderSecond = styled.div`
 display: flex;
 align-items: center;
 display: none;
 
 @media (max-width: 62.5rem) { // Tablet
  display: block;
 }
 
 #icon_hamb {
  cursor: pointer;
  width: 1.875rem;
  height: 1.875rem;
  flex-shrink: 0;
}
`

export const SecondHeader = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
`

export const HeaderStyle = styled.header`
 width: 100%;
 height: 4.5rem;
 padding: 1rem 5rem;
 background-color: #171023;
 box-shadow: 0rem 0.5rem 1rem 0rem rgba(0, 0, 0, 0.25);
`

export const Logo = styled.div`
 p {
  width: 5.3125rem;
  height: 2rem;
  font-size: 1.2rem;
  flex-shrink: 0;
  color: ${({ theme }) => theme.Text_Colors.text_primary};
  font-family: 'Kalam', cursive;
  
 span {
  font-weight: 600;
 }
}
`

