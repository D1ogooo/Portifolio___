import styled from 'styled-components'

export const SecondHeader = styled.div`
 
`

export const ImageHeaderSecond = styled.div` 
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
 
 #icon_hamb {
  cursor: pointer;
  width: 30px;
  height: 35px;
  flex-shrink: 0;
}
`

export const HeaderStyle = styled.header`
 position: fixed;
 top: 0;
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

export const Container = styled.div`
 width: 100%;
 height: auto;
 display: flex;
 justify-content: space-between;

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
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
 }
`

export const Central = styled.div`
 background: ${({ theme }) => theme.Surface_Colors.surface_secondary};
 transition: 500ms all;
 
 height: 200px;
 padding: 20px;
 margin: 0 auto;

 li {
  list-style: none;
  img {
   cursor: pointer;
  }
 }
`
