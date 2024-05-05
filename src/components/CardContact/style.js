import styled from 'styled-components'

export const Container = styled.div`
 width: 95%;
 margin:  0 auto;
 margin-top: 4.5rem;
 display: flex;
 justify-content: space-evenly;
 padding: 4.5rem;
 align-items: flex-start;
 flex: 1 0 0;
 border-radius: 1rem;
 background-color: #2C243B;

 @media (max-width: 62.5rem) {
  flex-wrap: wrap;
 }
`

export const Left = styled.div`
 display: flex;
 flex-direction: column;

 img {
  width: 10rem;
  height: 10rem;
 }

 h1 {
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

 p {
 color: '#CDD0D4';
 font-family: 'Heebo';
 font-size: 1rem;
 font-style: normal;
 font-weight: 400;
 line-height: 150%;

  a {
  color: #7DFFAF;
  font-family: 'Heebo';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  text-decoration-line: underline;
  }
 }

 @media (max-width: 62.5rem) {
  padding: 2rem;
  align-items: center;
 }
`

export const ComentContainer = styled.textarea`
 border: none;
 resize: none;
 display: flex;
 margin-top: .9rem;
 margin-bottom: .5rem;
 
 height: 12.875rem;
 padding: 0.75rem;
 gap: 0.5rem;
 overflow: hidden;
 color: ${({ theme }) => theme.Text_Colors.text_secondary};
 font-family: 'Heebo';
 font-size: 15px;
 background-color: ${({ theme }) => theme.Surface_Colors.surface_background};
 border-radius: .5rem;
`

export const Right = styled.div`
 width: 30.25rem;
 display: flex;
 flex-direction: column;
 gap: 0.75rem;

 input {
  color: #CDD0D4;
  font-family: 'Heebo';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  width: 30.5rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: none;
  background-color: #171023; 
 } 
 
 @media (max-width: 62.5rem) {
  
 }
`

export const FirstLeft = styled.div`
 display: flex;
 flex-direction: column;
 gap: 1rem;

 @media (max-width: 62.5rem) {
  align-items: center;
 }

 p {
  font-family: 'Heebo';
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.Text_Colors.text_secondary};
  max-width: 592px;
  min-width: 200px;
 }

 img {
  border-radius: 100px;
  width: 180px;
  height: 180px;
 }

 @media (max-width: 62.5rem) {
  h2 {
    text-align: center;
  }

  p {
    text-align: center;
    margin-bottom: 1rem;
  }
 }
`

export const Internal = styled.div`
 display: flex;
 gap: .5rem;
 margin-top: 0.3125rem;

 img {
  width: 1.5rem;
  height: 1.5rem;
 }

 a {
  display: flex;
  padding: 0.75rem;
  align-items: flex-start;
  gap: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.Surface_Colors.surface_secondary};
 }
`

export const ButtonMessage = styled.a`
 color: #F5F6F6;
 text-align: center;
 text-decoration: none;
 font-family: 'Heebo';
 font-size: 1rem;
 font-style: normal;
 font-weight: 500;
 line-height: 150%;
 cursor: pointer;
 border: none;

 display: flex;
 width: 14.0625rem;
 padding: 1rem 1.5rem;
 justify-content: center;
 align-items: center;
 gap: 0.5rem;

 border-radius: 0.5rem;
 background: #8A42DB;

 @media (max-width: 62.5rem) {
  margin: 0 auto;
 }
`

